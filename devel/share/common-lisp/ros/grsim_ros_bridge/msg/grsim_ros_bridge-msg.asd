
(cl:in-package :asdf)

(defsystem "grsim_ros_bridge-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :geometry_msgs-msg
)
  :components ((:file "_package")
    (:file "grsim_bridge_msg" :depends-on ("_package_grsim_bridge_msg"))
    (:file "_package_grsim_bridge_msg" :depends-on ("_package"))
  ))