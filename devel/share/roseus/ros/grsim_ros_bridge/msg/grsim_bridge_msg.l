;; Auto-generated. Do not edit!


(when (boundp 'grsim_ros_bridge::grsim_bridge_msg)
  (if (not (find-package "GRSIM_ROS_BRIDGE"))
    (make-package "GRSIM_ROS_BRIDGE"))
  (shadow 'grsim_bridge_msg (find-package "GRSIM_ROS_BRIDGE")))
(unless (find-package "GRSIM_ROS_BRIDGE::GRSIM_BRIDGE_MSG")
  (make-package "GRSIM_ROS_BRIDGE::GRSIM_BRIDGE_MSG"))

(in-package "ROS")
;;//! \htmlinclude grsim_bridge_msg.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))


(defclass grsim_ros_bridge::grsim_bridge_msg
  :super ros::object
  :slots (_cmd_vel _kicker _dribbler ))

(defmethod grsim_ros_bridge::grsim_bridge_msg
  (:init
   (&key
    ((:cmd_vel __cmd_vel) (instance geometry_msgs::Twist :init))
    ((:kicker __kicker) nil)
    ((:dribbler __dribbler) nil)
    )
   (send-super :init)
   (setq _cmd_vel __cmd_vel)
   (setq _kicker __kicker)
   (setq _dribbler __dribbler)
   self)
  (:cmd_vel
   (&rest __cmd_vel)
   (if (keywordp (car __cmd_vel))
       (send* _cmd_vel __cmd_vel)
     (progn
       (if __cmd_vel (setq _cmd_vel (car __cmd_vel)))
       _cmd_vel)))
  (:kicker
   (&optional (__kicker :null))
   (if (not (eq __kicker :null)) (setq _kicker __kicker)) _kicker)
  (:dribbler
   (&optional (__dribbler :null))
   (if (not (eq __dribbler :null)) (setq _dribbler __dribbler)) _dribbler)
  (:serialization-length
   ()
   (+
    ;; geometry_msgs/Twist _cmd_vel
    (send _cmd_vel :serialization-length)
    ;; bool _kicker
    1
    ;; bool _dribbler
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; geometry_msgs/Twist _cmd_vel
       (send _cmd_vel :serialize s)
     ;; bool _kicker
       (if _kicker (write-byte -1 s) (write-byte 0 s))
     ;; bool _dribbler
       (if _dribbler (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; geometry_msgs/Twist _cmd_vel
     (send _cmd_vel :deserialize buf ptr-) (incf ptr- (send _cmd_vel :serialization-length))
   ;; bool _kicker
     (setq _kicker (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; bool _dribbler
     (setq _dribbler (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(setf (get grsim_ros_bridge::grsim_bridge_msg :md5sum-) "3ef1da6077e5c11cd24146e5248c94ba")
(setf (get grsim_ros_bridge::grsim_bridge_msg :datatype-) "grsim_ros_bridge/grsim_bridge_msg")
(setf (get grsim_ros_bridge::grsim_bridge_msg :definition-)
      "geometry_msgs/Twist cmd_vel
bool kicker
bool dribbler

================================================================================
MSG: geometry_msgs/Twist
# This expresses velocity in free space broken into its linear and angular parts.
Vector3  linear
Vector3  angular

================================================================================
MSG: geometry_msgs/Vector3
# This represents a vector in free space. 
# It is only meant to represent a direction. Therefore, it does not
# make sense to apply a translation to it (e.g., when applying a 
# generic rigid transformation to a Vector3, tf2 will only apply the
# rotation). If you want your data to be translatable too, use the
# geometry_msgs/Point message instead.

float64 x
float64 y
float64 z
")



(provide :grsim_ros_bridge/grsim_bridge_msg "3ef1da6077e5c11cd24146e5248c94ba")


