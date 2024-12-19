#! /usr/bin/env python3
from skills import *
from sequence import *
from manul import ManulDrive, ManulDriveJoyStick,ManulDrive2


import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *
    

if __name__ == "__main__":
    while not rospy.is_shutdown():
        # sMoveToPoint.execute(pub,1,(-2500,-1500))
        # sMoveToPoint.execute(pub,0,(-1000,-1500))
        # # seSudoAvoidance.execute(pub,2)
        # seNormalMove.execute(pub,2)
        ManulDrive2.execute(4)
        
