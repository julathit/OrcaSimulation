#! /usr/bin/env python3
from skills import *
from sequence import *

import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

    

if __name__ == "__main__":
    while not rospy.is_shutdown():
        sMoveToPoint.execute(0,(-3273,-4464))
        for i in range(11):
            sMoveToPoint.execute(i,(-3273 + 500*i,-4464))
        # seNormalMove.execute(pub,2)
        # seManulDrive.execute(pub,2)
        
        