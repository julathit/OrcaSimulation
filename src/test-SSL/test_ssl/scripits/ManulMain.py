#! /usr/bin/env python3
from skills import *
from sequence import *
from manul import ManulDrive


import rospy
from grsim_ros_bridge_msgs.msg import *
from krssg_ssl_msgs.msg import *

robot0 = SSL_DetectionRobot()
robot1 = SSL_DetectionRobot()
robot2 = SSL_DetectionRobot()
robot3 = SSL_DetectionRobot()
robot4 = SSL_DetectionRobot()
robot = {i: SSL_DetectionRobot for i in range(5)}

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

    global ball
    ball = data.balls
    

if __name__ == "__main__":
    rospy.init_node("detect", anonymous=False)

    sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)
    
    pub = {i: rospy.Publisher(f'/robot_blue_{i}/cmd', SSL, queue_size=10) for i in range(5)}
    
    r = rospy.Rate(50)
    
    while not rospy.is_shutdown():
        sMoveToPoint.execute(pub,1,(-2500,-1500))
        sMoveToPoint.execute(pub,0,(-1000,-1500))
        # seSudoAvoidance.execute(pub,2)
        seNormalMove.execute(pub,2)
        ManulDrive.execute(pub,4)
        
        
    r.sleep(10)