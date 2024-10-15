
(cl:in-package :asdf)

(defsystem "grsim_ros_bridge_msgs-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :geometry_msgs-msg
)
  :components ((:file "_package")
    (:file "SSL" :depends-on ("_package_SSL"))
    (:file "_package_SSL" :depends-on ("_package"))
  ))