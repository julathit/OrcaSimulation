import rospy
# from krssg_ssl_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *

# robot = {i: SSL_DetectionRobot for i in range(5)}

ssl_msg = {i: SSL() for i in range(5)}


# def recibir_datos(data):

#     for i in range(0, len(data.robots_blue)):
#         id_robots = data.robots_blue[i].robot_id
#         if id_robots == 0:
#             robot[0] = data.robots_blue[i]
#         if id_robots == 1:
#             robot[1] = data.robots_blue[i]
#         if id_robots == 2:
#             robot[2] = data.robots_blue[i]
#         if id_robots == 3:
#             robot[3] = data.robots_blue[i]
#         if id_robots == 4:
#             robot[4] = data.robots_blue[i]

#     global ball
#     ball = data.balls

# sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)

def sendCommand(pub,robotIndex: int, x: float, y: float, z: float, kickPower: bool):
    ssl_msg[robotIndex].cmd_vel.angular.z = z
    ssl_msg[robotIndex].cmd_vel.linear.x = x
    ssl_msg[robotIndex].cmd_vel.linear.y = y
    ssl_msg[robotIndex].kicker = kickPower
    pub[robotIndex].publish(ssl_msg[robotIndex])