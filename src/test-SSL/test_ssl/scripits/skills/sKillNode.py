import rospy
# from krssg_ssl_msgs.msg import *
from grsim_ros_bridge_msgs.msg import *

# robot = {i: SSL_DetectionRobot for i in range(5)}

ssl_msg = {i: SSL() for i in range(5)}

def sendCommand(pub,robotIndex: int, x: float, y: float, z: float, kickPower: bool):
    ssl_msg[robotIndex].cmd_vel.angular.z = z
    ssl_msg[robotIndex].cmd_vel.linear.x = x
    ssl_msg[robotIndex].cmd_vel.linear.y = y
    ssl_msg[robotIndex].kicker = kickPower
    pub[robotIndex].publish(ssl_msg[robotIndex])