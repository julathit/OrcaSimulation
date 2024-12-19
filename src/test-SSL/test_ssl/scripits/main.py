#! /usr/bin/env python3
from skills import sMoveToPoint, sMoveToBall
from sequence import seNormalMove


import rospy
    

if __name__ == "__main__":
    
    r = rospy.Rate(50)
    
    while not rospy.is_shutdown():
        sMoveToPoint.execute(1,(-2500,-1500))
        sMoveToPoint.execute(0,(-1000,-1500))
        # seSudoAvoidance.execute(pub,2)
        seNormalMove.execute(2)
        # seManulDrive.execute(pub,2)
        sMoveToBall.execute(3)
        
        
    r.sleep(10)