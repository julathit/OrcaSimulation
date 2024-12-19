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
    
    sKillNode.sendCommand(robotIndex,0,0,0,True)
