;; Auto-generated. Do not edit!


(when (boundp 'grsim_ros_bridge_msgs::SSL)
  (if (not (find-package "GRSIM_ROS_BRIDGE_MSGS"))
    (make-package "GRSIM_ROS_BRIDGE_MSGS"))
  (shadow 'SSL (find-package "GRSIM_ROS_BRIDGE_MSGS")))
(unless (find-package "GRSIM_ROS_BRIDGE_MSGS::SSL")
  (make-package "GRSIM_ROS_BRIDGE_MSGS::SSL"))

(in-package "ROS")
;;//! \htmlinclude SSL.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))


(defclass grsim_ros_bridge_msgs::SSL
  :super ros::object
  :slots (_cmd_vel _kicker _dribbler ))

(defmethod grsim_ros_bridge_msgs::SSL
  (:init
   (&key
    ((:cmd_vel __cmd_vel) (instance geometry_msgs::Twist :init))
    ((:kicker __kicker) 0.0)
    ((:dribbler __dribbler) nil)
    )
   (send-super :init)
   (setq _cmd_vel __cmd_vel)
   (setq _kicker (float __kicker))
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
   (&optional __kicker)
   (if __kicker (setq _kicker __kicker)) _kicker)
  (:dribbler
   (&optional (__dribbler :null))
   (if (not (eq __dribbler :null)) (setq _dribbler __dribbler)) _dribbler)
  (:serialization-length
   ()
   (+
    ;; geometry_msgs/Twist _cmd_vel
    (send _cmd_vel :serialization-length)
    ;; float32 _kicker
    4
    ;; bool _dribbler
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; geometry_msgs/Twist _cmd_vel
       (send _cmd_vel :serialize s)
     ;; float32 _kicker
       (sys::poke _kicker (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; bool _dribbler
       (if _dribbler (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; geometry_msgs/Twist _cmd_vel
     (send _cmd_vel :deserialize buf ptr-) (incf ptr- (send _cmd_vel :serialization-length))
   ;; float32 _kicker
     (setq _kicker (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; bool _dribbler
     (setq _dribbler (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(setf (get grsim_ros_bridge_msgs::SSL :md5sum-) "c12e8c1c2996fa9eaef36764e38486c8")
(setf (get grsim_ros_bridge_msgs::SSL :datatype-) "grsim_ros_bridge_msgs/SSL")
(setf (get grsim_ros_bridge_msgs::SSL :definition-)
      "geometry_msgs/Twist cmd_vel
float32 kicker
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



(provide :grsim_ros_bridge_msgs/SSL "c12e8c1c2996fa9eaef36764e38486c8")


