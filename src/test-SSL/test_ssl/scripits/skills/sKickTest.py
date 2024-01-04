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

p_ball = (0, 0)

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

def save_ball():

    global p_ball

    try:
        p_ball = ((ball[0].x), (ball[0].y))
        # print('return')
        return (p_ball)

    except:
        # print('except')
        pass

sub = rospy.Subscriber("/vision", SSL_DetectionFrame, recibir_datos)

def execute(pub,robotIndex:int):
    
    save_ball()
    distanceToBall = math.sqrt((p_ball[1] - robot[robotIndex].y)**2 + (p_ball[0] - robot[robotIndex].x)**2) 
    print(distanceToBall)
    if distanceToBall < 100:
        sKillNode.sendCommand(pub,robotIndex,0,0,0,False)
    else:
        sKillNode.sendCommand(pub,robotIndex,0.1,0,0,True)