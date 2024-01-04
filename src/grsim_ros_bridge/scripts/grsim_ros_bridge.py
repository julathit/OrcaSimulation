#! /usr/bin/env python3
import rospy
from geometry_msgs.msg import *
from std_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *
import random
import math
import numpy as np
import csv
import rospkg
import time
import os

from erforce.model import RobotCommand, MoveLocalVelocity
from erforce.client import ErForceClientBlue
from erforce.client import ErForceClientYellow
clientblue = ErForceClientBlue()
clientyellow = ErForceClientYellow()

# myCmd = '/home/ricardo/ssl_ws/src/grSim/bin/grSim'
# os.system(myCmd)

KICKER_SPEED = 4
DIBBLER_SPEED = 1.0

def move_robot_blue(data, id):
    global clientblue

    move_command = MoveLocalVelocity(forward=data.cmd_vel.linear.x, left=data.cmd_vel.linear.y, angular=data.cmd_vel.angular.z)

    if (data.kicker and data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=KICKER_SPEED, kick_angle=0, dribbler_speed=DIBBLER_SPEED)
    elif (not data.kicker and data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=0, kick_angle=0, dribbler_speed=DIBBLER_SPEED)
    elif (data.kicker and not data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=KICKER_SPEED, kick_angle=0, dribbler_speed=0)
    else:
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=0, kick_angle=0, dribbler_speed=0)

    clientblue.send_action_command(robot_command)

def move_robot_yellow(data, id):
    global clientyellow

    move_command = MoveLocalVelocity(forward=data.cmd_vel.linear.x, left=data.cmd_vel.linear.y, angular=data.cmd_vel.angular.z)

    if (data.kicker and data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=KICKER_SPEED, kick_angle=0, dribbler_speed=DIBBLER_SPEED)
    elif (not data.kicker and data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=0, kick_angle=0, dribbler_speed=DIBBLER_SPEED)
    elif (data.kicker and not data.dribbler):
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=KICKER_SPEED, kick_angle=0, dribbler_speed=0)
    else:
        robot_command = RobotCommand(robot_id=id, move_command=move_command, kick_speed=0, kick_angle=0, dribbler_speed=0)

    clientyellow.send_action_command(robot_command)

def cmd_blue_0_callback(data):
    move_robot_blue(data, 0)

def cmd_blue_1_callback(data):
    move_robot_blue(data, 1)

def cmd_blue_2_callback(data):
    move_robot_blue(data, 2)

def cmd_blue_3_callback(data):
    move_robot_blue(data, 3)

def cmd_blue_4_callback(data):
    move_robot_blue(data, 4)

def cmd_blue_5_callback(data):
    move_robot_blue(data, 5)

def cmd_yellow_0_callback(data):
    move_robot_yellow(data, 0)

def cmd_yellow_1_callback(data):
    move_robot_yellow(data, 1)

def cmd_yellow_2_callback(data):
    move_robot_yellow(data, 2)

def cmd_yellow_3_callback(data):
    move_robot_yellow(data, 3)

def cmd_yellow_4_callback(data):
    move_robot_yellow(data, 4)

if __name__ == "__main__":
    rospy.init_node("grsim_ros_bridge", anonymous=False)

    rospy.Subscriber("robot_blue_0/cmd", SSL, cmd_blue_0_callback)
    rospy.Subscriber("robot_blue_1/cmd", SSL, cmd_blue_1_callback)
    rospy.Subscriber("robot_blue_2/cmd", SSL, cmd_blue_2_callback)
    rospy.Subscriber("robot_blue_3/cmd", SSL, cmd_blue_3_callback)
    rospy.Subscriber("robot_blue_4/cmd", SSL, cmd_blue_4_callback)
    rospy.Subscriber("robot_blue_5/cmd", SSL, cmd_blue_5_callback)

    rospy.Subscriber("robot_yellow_0/cmd", SSL, cmd_yellow_0_callback)
    rospy.Subscriber("robot_yellow_1/cmd", SSL, cmd_yellow_1_callback)
    rospy.Subscriber("robot_yellow_2/cmd", SSL, cmd_yellow_2_callback)
    rospy.Subscriber("robot_yellow_3/cmd", SSL, cmd_yellow_3_callback)
    rospy.Subscriber("robot_yellow_4/cmd", SSL, cmd_yellow_4_callback)

    rospy.spin()
