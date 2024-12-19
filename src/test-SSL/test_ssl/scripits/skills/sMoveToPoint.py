from . import sKillNode
from utils import position

import rospy
from geometry_msgs.msg import *
from gazebo_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

import math


angToPoint = position.angToPoint
robot = position.robot
distanceToPoint = position.distanceToPoint

def execute(robotIndex: int,point: tuple):
    
    headingAngToBall = angToPoint(robotIndex,point) - robot[robotIndex].orientation 
    
    if headingAngToBall > math.pi:
        headingAngToBall -= 2 * math.pi

    elif headingAngToBall < -math.pi:
        headingAngToBall += 2 * math.pi

        
    if distanceToPoint(robotIndex,point) < 60:
        sKillNode.sendCommand(robotIndex,0,0,0,False)
    elif abs(headingAngToBall) < 0.1 :
        sKillNode.sendCommand(robotIndex,min(0.25*distanceToPoint(robotIndex,point)+0.25,20),0,0,False)
    elif abs(headingAngToBall) > 0.1:
        sKillNode.sendCommand(robotIndex,0,0,3*headingAngToBall,False)


