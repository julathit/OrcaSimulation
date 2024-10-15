#! /usr/bin/env python3
import rospy
from geometry_msgs.msg import *
from gazebo_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *
import math
from functions import *
import time




ball = Pose()

robot0 = SSL_DetectionRobot()
robot1 = SSL_DetectionRobot()
robot2 = SSL_DetectionRobot()
robot3 = SSL_DetectionRobot()
robot4 = SSL_DetectionRobot()

robot = {i: SSL_DetectionRobot() for i in range(5)}
# inicializar valores
# vecBaotToball = {
#     0: (0, 0),  # vector de distancia
#     1: (0, 0),
#     2: (0, 0),
#     3: (0, 0),
#     4: (0, 0)
# }

# distBotToBall = {
#     0: 0,  # modulo de distancia
#     1: 0,
#     2: 0,
#     3: 0,
#     4: 0
# }

# angBotToBall = {
#     0: 0,  # angulo de distancia
#     1: 0,
#     2: 0,
#     3: 0,
#     4: 0
# }


ssl_msg = {i: SSL() for i in range(5)}

p_ball = (0, 0)

# ----------------------------------------------------------------------------------------------------------

def save_ball():

    global p_ball

    try:
        p_ball = ((ball[0].x), (ball[0].y))
        # dist_angle(p_ball[0], p_ball[1])
        # print('return')
        return (p_ball)

    except:
        # print('except')
        pass

# def dist_angle(x, y):
#     global vecBaotToball
#     global distBotToBall
#     global angBotToBall
#     vecBaotToball = {
#         0: (x-robot[0].x, y-robot[0].y),  # vector bot to ball
#         1: (x-robot[1].x, y-robot[1].y),
#         2: (x-robot[2].x, y-robot[2].y),
#         3: (x-robot[3].x, y-robot[3].y),
#         4: (x-robot[4].x, y-robot[4].y)
#     }

#     distBotToBall = {
#         # modulo de distancia
#         0: math.sqrt((x-robot[0].x)**2 + (y-robot[0].y)**2), # distance bot to ball
#         1: math.sqrt((x-robot[1].x)**2 + (y-robot[1].y)**2),
#         2: math.sqrt((x-robot[2].x)**2 + (y-robot[2].y)**2),
#         3: math.sqrt((x-robot[3].x)**2 + (y-robot[3].y)**2),
#         4: math.sqrt((x-robot[4].x)**2 + (y-robot[4].y)**2)
#     }

#     angBotToBall = {
#         0: math.atan2(distBotToBall[0][1], distBotToBall[0][0]),  # angle bot to ball
#         2: math.atan2(distBotToBall[2][1], distBotToBall[2][0]),
#         3: math.atan2(distBotToBall[3][1], distBotToBall[3][0]),
#         4: math.atan2(distBotToBall[4][1], distBotToBall[4][0])
#     }


def recibir_datos(data):

    for i in range(0, len(data.robots_blue)):
        id_robots = data.robots_blue[i].robot_id
        if id_robots == 0:
            robot[0] = data.robots_blue[i]
        if id_robots == 1:
            robot[1] = data.robots_blue[i]
        if id_robots == 2:
            robot[2] = data.robots_blue[i]
        if id_robots == 3:
            robot[3] = data.robots_blue[i]
        if id_robots == 4:
            robot[4] = data.robots_blue[i]

    global ball
    ball = data.balls

# ----------------------------------------------------------------------------------------------------------

def move(robotIndex: int,x: float,y: float,z:float):
    ssl_msg[robotIndex].cmd_vel.angular.z = z
    ssl_msg[robotIndex].cmd_vel.linear.x = x
    ssl_msg[robotIndex].cmd_vel.linear.y = y
    pub[robotIndex].publish(ssl_msg[robotIndex])

def angToBall(robotIndex: int):
    """it is the function that find the ang to the ball

    Args:
        robotIndex (int): clculate the angle using arctan build on  function in math

    Returns:
        _type_: _description_
    """
    save_ball()
    return math.atan2(p_ball[1] - robot[robotIndex].y,p_ball[0] - robot[robotIndex].x)

def angToPoint(robotIndex:int , point):
    """it is the function that find the ang to the point

    Args:
        robotIndex (int): calculate the angle using arctan bild in function in math

    Returns:
        _type_: angle to the point
    """
    return math.atan2(point[1]-robot[robotIndex].y,p_ball[0]-robot[robotIndex].x)

def distanceToBall(robotIndex: int):
    return math.sqrt((p_ball[1] - robot[robotIndex].y)**2 + (p_ball[0] - robot[robotIndex].x)**2) 

def runToBall(robotIndex: int):
    headingAngToBall = angToBall(robotIndex) - robot[robotIndex].orientation 
    
    if headingAngToBall > math.pi:
        headingAngToBall -= 2 * math.pi

    elif headingAngToBall < -math.pi:
        headingAngToBall += 2 * math.pi

        
    if distanceToBall(robotIndex) < 144:
        move(robotIndex,0,0,0)
    elif abs(headingAngToBall) < 0.1 :
        move(robotIndex,0.5*distanceToBall(robotIndex),0,0)
    elif abs(headingAngToBall) > 0.1:
        move(robotIndex,0,0,3*headingAngToBall)

# def runToPoint()

def shoot(robotIndex):
    if distanceToBall(robotIndex) < 200:
        ssl_msg[robotIndex].cmd_vel.angular.z = 0.0
        ssl_msg[robotIndex].cmd_vel.linear.x = 1.0
        ssl_msg[robotIndex].kicker = True
        pub[robotIndex].publish(ssl_msg[robotIndex])

        
if __name__ == "__main__":
    rospy.init_node("detect", anonymous=False)

    sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)
    pub = {
        0: rospy.Publisher('/robot_blue_0/cmd', SSL, queue_size=10),
        1: rospy.Publisher('/robot_blue_1/cmd', SSL, queue_size=10),
        2: rospy.Publisher('/robot_blue_2/cmd', SSL, queue_size=10),
        3: rospy.Publisher('/robot_blue_3/cmd', SSL, queue_size=10),
        4: rospy.Publisher('/robot_blue_4/cmd', SSL, queue_size=10),
        5: rospy.Publisher('/robot_blue_5/cmd', SSL, queue_size=10)
    }

    r = rospy.Rate(50)

    while not rospy.is_shutdown():
        # print(distanceToBall(2),angToBall(2) - robot[2].orientation,angToBall(2),robot[2].orientation)
        # print('-'*10)
        print(p_ball[0] , robot[2].x)
        runToBall(2)
    r.sleep(10)