#! /usr/bin/env python3
from skills import sMoveToPoint, sMoveToBall
from sequence import seNormalMove


import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

# robot = {i: SSL_DetectionRobot for i in range(5)}

#number of robot
n = 11

ssl_msg = {i: SSL() for i in range(n)}

robot = {i: SSL_DetectionRobot for i in range(n)}

def recibir_datos(data):

    for i in range(0, len(data.robots_blue)):
        id_robots = data.robots_blue[i].robot_id
        for j in range(n):
            if id_robots == j:
                robot[j] = data.robots_blue[i]
    global ball
    ball = data.balls


rospy.init_node("detect", anonymous=False)

sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)
    
pub = {i: rospy.Publisher(f'/robot_blue_{i}/cmd', SSL, queue_size=10) for i in range(n)}


def sendCommand(robotIndex: int, x: float, y: float, z: float, kickPower: bool):
    ssl_msg[robotIndex].cmd_vel.angular.z = z
    ssl_msg[robotIndex].cmd_vel.linear.x = x
    ssl_msg[robotIndex].cmd_vel.linear.y = y
    ssl_msg[robotIndex].kicker = kickPower
    pub[robotIndex].publish(ssl_msg[robotIndex])