#! /usr/bin/env python3
from skills import *
from sequence import *
from manul import ManulDrive


import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *


if __name__ == "__main__":
    rospy.init_node("detect", anonymous=False)
    
    r = rospy.Rate(50)
    
    while not rospy.is_shutdown():
        ManulDrive.execute(4)
        
        
    r.sleep(10)