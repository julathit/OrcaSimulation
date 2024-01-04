; Auto-generated. Do not edit!


(cl:in-package grsim_ros_bridge-msg)


;//! \htmlinclude grsim_bridge_msg.msg.html

(cl:defclass <grsim_bridge_msg> (roslisp-msg-protocol:ros-message)
  ((cmd_vel
    :reader cmd_vel
    :initarg :cmd_vel
    :type geometry_msgs-msg:Twist
    :initform (cl:make-instance 'geometry_msgs-msg:Twist))
   (kicker
    :reader kicker
    :initarg :kicker
    :type cl:boolean
    :initform cl:nil)
   (dribbler
    :reader dribbler
    :initarg :dribbler
    :type cl:boolean
    :initform cl:nil))
)

(cl:defclass grsim_bridge_msg (<grsim_bridge_msg>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <grsim_bridge_msg>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'grsim_bridge_msg)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name grsim_ros_bridge-msg:<grsim_bridge_msg> is deprecated: use grsim_ros_bridge-msg:grsim_bridge_msg instead.")))

(cl:ensure-generic-function 'cmd_vel-val :lambda-list '(m))
(cl:defmethod cmd_vel-val ((m <grsim_bridge_msg>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader grsim_ros_bridge-msg:cmd_vel-val is deprecated.  Use grsim_ros_bridge-msg:cmd_vel instead.")
  (cmd_vel m))

(cl:ensure-generic-function 'kicker-val :lambda-list '(m))
(cl:defmethod kicker-val ((m <grsim_bridge_msg>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader grsim_ros_bridge-msg:kicker-val is deprecated.  Use grsim_ros_bridge-msg:kicker instead.")
  (kicker m))

(cl:ensure-generic-function 'dribbler-val :lambda-list '(m))
(cl:defmethod dribbler-val ((m <grsim_bridge_msg>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader grsim_ros_bridge-msg:dribbler-val is deprecated.  Use grsim_ros_bridge-msg:dribbler instead.")
  (dribbler m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <grsim_bridge_msg>) ostream)
  "Serializes a message object of type '<grsim_bridge_msg>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'cmd_vel) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'kicker) 1 0)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if (cl:slot-value msg 'dribbler) 1 0)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <grsim_bridge_msg>) istream)
  "Deserializes a message object of type '<grsim_bridge_msg>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'cmd_vel) istream)
    (cl:setf (cl:slot-value msg 'kicker) (cl:not (cl:zerop (cl:read-byte istream))))
    (cl:setf (cl:slot-value msg 'dribbler) (cl:not (cl:zerop (cl:read-byte istream))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<grsim_bridge_msg>)))
  "Returns string type for a message object of type '<grsim_bridge_msg>"
  "grsim_ros_bridge/grsim_bridge_msg")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'grsim_bridge_msg)))
  "Returns string type for a message object of type 'grsim_bridge_msg"
  "grsim_ros_bridge/grsim_bridge_msg")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<grsim_bridge_msg>)))
  "Returns md5sum for a message object of type '<grsim_bridge_msg>"
  "3ef1da6077e5c11cd24146e5248c94ba")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'grsim_bridge_msg)))
  "Returns md5sum for a message object of type 'grsim_bridge_msg"
  "3ef1da6077e5c11cd24146e5248c94ba")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<grsim_bridge_msg>)))
  "Returns full string definition for message of type '<grsim_bridge_msg>"
  (cl:format cl:nil "geometry_msgs/Twist cmd_vel~%bool kicker~%bool dribbler~%~%================================================================================~%MSG: geometry_msgs/Twist~%# This expresses velocity in free space broken into its linear and angular parts.~%Vector3  linear~%Vector3  angular~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'grsim_bridge_msg)))
  "Returns full string definition for message of type 'grsim_bridge_msg"
  (cl:format cl:nil "geometry_msgs/Twist cmd_vel~%bool kicker~%bool dribbler~%~%================================================================================~%MSG: geometry_msgs/Twist~%# This expresses velocity in free space broken into its linear and angular parts.~%Vector3  linear~%Vector3  angular~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <grsim_bridge_msg>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'cmd_vel))
     1
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <grsim_bridge_msg>))
  "Converts a ROS message object to a list"
  (cl:list 'grsim_bridge_msg
    (cl:cons ':cmd_vel (cmd_vel msg))
    (cl:cons ':kicker (kicker msg))
    (cl:cons ':dribbler (dribbler msg))
))
