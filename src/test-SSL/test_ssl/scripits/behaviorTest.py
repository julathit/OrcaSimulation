#! /usr/bin/env python3
from skills import sMoveToPoint, sMoveToBall
import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *




    

if __name__ == "__main__":
    
    while not rospy.is_shutdown():
        sMoveToPoint.execute(0,(-1000,-1500))
        # B_passBall.execute()
