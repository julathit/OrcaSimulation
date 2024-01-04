from . import sKillNode

import rospy
from geometry_msgs.msg import *
from gazebo_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

import math

ball = Pose()

robot0 = SSL_DetectionRobot()
robot1 = SSL_DetectionRobot()
robot2 = SSL_DetectionRobot()
robot3 = SSL_DetectionRobot()
robot4 = SSL_DetectionRobot()
robot = {i: SSL_DetectionRobot() for i in range(5)}

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

sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)

def angToPoint(robotIndex: int, point: tuple):
    return math.atan2(point[1] - robot[robotIndex].y,point[0] - robot[robotIndex].x)

def distanceToPoint(robotIndex: int, point: tuple):
    return math.sqrt((point[1] - robot[robotIndex].y)**2 + (point[0] - robot[robotIndex].x)**2) 

def execute(pub,robotIndex: int,point: tuple):
    
    headingAngToBall = angToPoint(robotIndex,point) - robot[robotIndex].orientation 
    
    if headingAngToBall > math.pi:
        headingAngToBall -= 2 * math.pi

    elif headingAngToBall < -math.pi:
        headingAngToBall += 2 * math.pi

        
    if distanceToPoint(robotIndex,point) < 144:
        sKillNode.sendCommand(pub,robotIndex,0,0,0,False)
    elif abs(headingAngToBall) < 0.1 :
        sKillNode.sendCommand(pub,robotIndex,0.5*distanceToPoint(robotIndex,point)+0.25,0,0,False)
    elif abs(headingAngToBall) > 0.1:
        sKillNode.sendCommand(pub,robotIndex,0,0,3*headingAngToBall,False)


