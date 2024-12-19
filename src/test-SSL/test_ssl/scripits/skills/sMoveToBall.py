from . import sKillNode
from utils import position
import rospy
from geometry_msgs.msg import *
from gazebo_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

import math


save_ball = position.save_ball
p_ball = position.p_ball
angToBall = position.angToBall
robot = position.robot
distanceToBall = position.distanceToBall

def execute(robotIndex: int):
    
    save_ball()
    
    print(p_ball)
    
    headingAngToBall = angToBall(robotIndex) - robot[robotIndex].orientation 
    
    if headingAngToBall > math.pi:
        headingAngToBall -= 2 * math.pi

    elif headingAngToBall < -math.pi:
        headingAngToBall += 2 * math.pi

        
    if distanceToBall(robotIndex) < 100:
        sKillNode.sendCommand(robotIndex,0,0,0,False)
    elif abs(headingAngToBall) < 0.1 :
        sKillNode.sendCommand(robotIndex,min(0.25*distanceToBall(robotIndex),20),0,0,False)
    elif abs(headingAngToBall) > 0.1:
        sKillNode.sendCommand(robotIndex,0,0,3*headingAngToBall,False)
