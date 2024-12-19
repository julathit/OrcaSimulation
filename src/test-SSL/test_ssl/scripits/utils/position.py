import rospy
from geometry_msgs.msg import *
from gazebo_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

import math

ball = Pose()

#number of robot
n = 11

robot = {i: SSL_DetectionRobot() for i in range(n)}

p_ball = (0,0)

def recibir_datos(data):

    for i in range(0, len(data.robots_blue)):
        id_robots = data.robots_blue[i].robot_id
        # if id_robots == 0:
        #     robot[0] = data.robots_blue[i]
        # if id_robots == 1:
        #     robot[1] = data.robots_blue[i]
        # if id_robots == 2:
        #     robot[2] = data.robots_blue[i]
        # if id_robots == 3:
        #     robot[3] = data.robots_blue[i]
        # if id_robots == 4:
        #     robot[4] = data.robots_blue[i]
        for j in range(n):
            if id_robots == j:
                robot[j] = data.robots_blue[i]

    global ball
    ball = data.balls

sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)

sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)

def save_ball():

    global p_ball

    try:
        p_ball = ((ball[0].x), (ball[0].y))
        # print('return')
        return (p_ball)

    except:
        # print('except')
        pass

def ballPos():
    save_ball()
    return p_ball    

def angToBall(robotIndex: int):
    save_ball()
    return math.atan2(p_ball[1] - robot[robotIndex].y,p_ball[0] - robot[robotIndex].x)

def distanceToBall(robotIndex: int):
    save_ball()
    return math.sqrt((p_ball[1] - robot[robotIndex].y)**2 + (p_ball[0] - robot[robotIndex].x)**2) 

def angToPoint(robotIndex: int, point: tuple):
    return math.atan2(point[1] - robot[robotIndex].y,point[0] - robot[robotIndex].x)

def distanceToPoint(robotIndex: int, point: tuple):
    return math.sqrt((point[1] - robot[robotIndex].y)**2 + (point[0] - robot[robotIndex].x)**2) 