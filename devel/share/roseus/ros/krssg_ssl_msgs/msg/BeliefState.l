;; Auto-generated. Do not edit!


(when (boundp 'krssg_ssl_msgs::BeliefState)
  (if (not (find-package "KRSSG_SSL_MSGS"))
    (make-package "KRSSG_SSL_MSGS"))
  (shadow 'BeliefState (find-package "KRSSG_SSL_MSGS")))
(unless (find-package "KRSSG_SSL_MSGS::BELIEFSTATE")
  (make-package "KRSSG_SSL_MSGS::BELIEFSTATE"))

(in-package "ROS")
;;//! \htmlinclude BeliefState.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))


(defclass krssg_ssl_msgs::BeliefState
  :super ros::object
  :slots (_isteamyellow _frame_number _t_capture _t_sent _ballPos _ballVel _awayPos _homePos _ballDetected _homeDetected _awayDetected _our_bot_closest_to_ball _opp_bot_closest_to_ball _our_goalie _opp_goalie _opp_bot_marking_our_attacker _ball_at_corners _ball_in_our_half _ball_in_our_possession ))

(defmethod krssg_ssl_msgs::BeliefState
  (:init
   (&key
    ((:isteamyellow __isteamyellow) nil)
    ((:frame_number __frame_number) 0)
    ((:t_capture __t_capture) 0.0)
    ((:t_sent __t_sent) 0.0)
    ((:ballPos __ballPos) (instance geometry_msgs::Pose2D :init))
    ((:ballVel __ballVel) (instance geometry_msgs::Point32 :init))
    ((:awayPos __awayPos) ())
    ((:homePos __homePos) ())
    ((:ballDetected __ballDetected) nil)
    ((:homeDetected __homeDetected) (let (r) (dotimes (i 0) (push nil r)) r))
    ((:awayDetected __awayDetected) (let (r) (dotimes (i 0) (push nil r)) r))
    ((:our_bot_closest_to_ball __our_bot_closest_to_ball) 0)
    ((:opp_bot_closest_to_ball __opp_bot_closest_to_ball) 0)
    ((:our_goalie __our_goalie) 0)
    ((:opp_goalie __opp_goalie) 0)
    ((:opp_bot_marking_our_attacker __opp_bot_marking_our_attacker) 0)
    ((:ball_at_corners __ball_at_corners) nil)
    ((:ball_in_our_half __ball_in_our_half) nil)
    ((:ball_in_our_possession __ball_in_our_possession) nil)
    )
   (send-super :init)
   (setq _isteamyellow __isteamyellow)
   (setq _frame_number (round __frame_number))
   (setq _t_capture (float __t_capture))
   (setq _t_sent (float __t_sent))
   (setq _ballPos __ballPos)
   (setq _ballVel __ballVel)
   (setq _awayPos __awayPos)
   (setq _homePos __homePos)
   (setq _ballDetected __ballDetected)
   (setq _homeDetected __homeDetected)
   (setq _awayDetected __awayDetected)
   (setq _our_bot_closest_to_ball (round __our_bot_closest_to_ball))
   (setq _opp_bot_closest_to_ball (round __opp_bot_closest_to_ball))
   (setq _our_goalie (round __our_goalie))
   (setq _opp_goalie (round __opp_goalie))
   (setq _opp_bot_marking_our_attacker (round __opp_bot_marking_our_attacker))
   (setq _ball_at_corners __ball_at_corners)
   (setq _ball_in_our_half __ball_in_our_half)
   (setq _ball_in_our_possession __ball_in_our_possession)
   self)
  (:isteamyellow
   (&optional (__isteamyellow :null))
   (if (not (eq __isteamyellow :null)) (setq _isteamyellow __isteamyellow)) _isteamyellow)
  (:frame_number
   (&optional __frame_number)
   (if __frame_number (setq _frame_number __frame_number)) _frame_number)
  (:t_capture
   (&optional __t_capture)
   (if __t_capture (setq _t_capture __t_capture)) _t_capture)
  (:t_sent
   (&optional __t_sent)
   (if __t_sent (setq _t_sent __t_sent)) _t_sent)
  (:ballPos
   (&rest __ballPos)
   (if (keywordp (car __ballPos))
       (send* _ballPos __ballPos)
     (progn
       (if __ballPos (setq _ballPos (car __ballPos)))
       _ballPos)))
  (:ballVel
   (&rest __ballVel)
   (if (keywordp (car __ballVel))
       (send* _ballVel __ballVel)
     (progn
       (if __ballVel (setq _ballVel (car __ballVel)))
       _ballVel)))
  (:awayPos
   (&rest __awayPos)
   (if (keywordp (car __awayPos))
       (send* _awayPos __awayPos)
     (progn
       (if __awayPos (setq _awayPos (car __awayPos)))
       _awayPos)))
  (:homePos
   (&rest __homePos)
   (if (keywordp (car __homePos))
       (send* _homePos __homePos)
     (progn
       (if __homePos (setq _homePos (car __homePos)))
       _homePos)))
  (:ballDetected
   (&optional (__ballDetected :null))
   (if (not (eq __ballDetected :null)) (setq _ballDetected __ballDetected)) _ballDetected)
  (:homeDetected
   (&optional __homeDetected)
   (if __homeDetected (setq _homeDetected __homeDetected)) _homeDetected)
  (:awayDetected
   (&optional __awayDetected)
   (if __awayDetected (setq _awayDetected __awayDetected)) _awayDetected)
  (:our_bot_closest_to_ball
   (&optional __our_bot_closest_to_ball)
   (if __our_bot_closest_to_ball (setq _our_bot_closest_to_ball __our_bot_closest_to_ball)) _our_bot_closest_to_ball)
  (:opp_bot_closest_to_ball
   (&optional __opp_bot_closest_to_ball)
   (if __opp_bot_closest_to_ball (setq _opp_bot_closest_to_ball __opp_bot_closest_to_ball)) _opp_bot_closest_to_ball)
  (:our_goalie
   (&optional __our_goalie)
   (if __our_goalie (setq _our_goalie __our_goalie)) _our_goalie)
  (:opp_goalie
   (&optional __opp_goalie)
   (if __opp_goalie (setq _opp_goalie __opp_goalie)) _opp_goalie)
  (:opp_bot_marking_our_attacker
   (&optional __opp_bot_marking_our_attacker)
   (if __opp_bot_marking_our_attacker (setq _opp_bot_marking_our_attacker __opp_bot_marking_our_attacker)) _opp_bot_marking_our_attacker)
  (:ball_at_corners
   (&optional (__ball_at_corners :null))
   (if (not (eq __ball_at_corners :null)) (setq _ball_at_corners __ball_at_corners)) _ball_at_corners)
  (:ball_in_our_half
   (&optional (__ball_in_our_half :null))
   (if (not (eq __ball_in_our_half :null)) (setq _ball_in_our_half __ball_in_our_half)) _ball_in_our_half)
  (:ball_in_our_possession
   (&optional (__ball_in_our_possession :null))
   (if (not (eq __ball_in_our_possession :null)) (setq _ball_in_our_possession __ball_in_our_possession)) _ball_in_our_possession)
  (:serialization-length
   ()
   (+
    ;; bool _isteamyellow
    1
    ;; uint32 _frame_number
    4
    ;; float64 _t_capture
    8
    ;; float64 _t_sent
    8
    ;; geometry_msgs/Pose2D _ballPos
    (send _ballPos :serialization-length)
    ;; geometry_msgs/Point32 _ballVel
    (send _ballVel :serialization-length)
    ;; geometry_msgs/Pose2D[] _awayPos
    (apply #'+ (send-all _awayPos :serialization-length)) 4
    ;; geometry_msgs/Pose2D[] _homePos
    (apply #'+ (send-all _homePos :serialization-length)) 4
    ;; bool _ballDetected
    1
    ;; bool[] _homeDetected
    (* 1    (length _homeDetected)) 4
    ;; bool[] _awayDetected
    (* 1    (length _awayDetected)) 4
    ;; uint8 _our_bot_closest_to_ball
    1
    ;; uint8 _opp_bot_closest_to_ball
    1
    ;; uint8 _our_goalie
    1
    ;; uint8 _opp_goalie
    1
    ;; uint8 _opp_bot_marking_our_attacker
    1
    ;; bool _ball_at_corners
    1
    ;; bool _ball_in_our_half
    1
    ;; bool _ball_in_our_possession
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _isteamyellow
       (if _isteamyellow (write-byte -1 s) (write-byte 0 s))
     ;; uint32 _frame_number
       (write-long _frame_number s)
     ;; float64 _t_capture
       (sys::poke _t_capture (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _t_sent
       (sys::poke _t_sent (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; geometry_msgs/Pose2D _ballPos
       (send _ballPos :serialize s)
     ;; geometry_msgs/Point32 _ballVel
       (send _ballVel :serialize s)
     ;; geometry_msgs/Pose2D[] _awayPos
     (write-long (length _awayPos) s)
     (dolist (elem _awayPos)
       (send elem :serialize s)
       )
     ;; geometry_msgs/Pose2D[] _homePos
     (write-long (length _homePos) s)
     (dolist (elem _homePos)
       (send elem :serialize s)
       )
     ;; bool _ballDetected
       (if _ballDetected (write-byte -1 s) (write-byte 0 s))
     ;; bool[] _homeDetected
     (write-long (length _homeDetected) s)
     (dotimes (i (length _homeDetected))
       (if (elt _homeDetected i) (write-byte -1 s) (write-byte 0 s))
       )
     ;; bool[] _awayDetected
     (write-long (length _awayDetected) s)
     (dotimes (i (length _awayDetected))
       (if (elt _awayDetected i) (write-byte -1 s) (write-byte 0 s))
       )
     ;; uint8 _our_bot_closest_to_ball
       (write-byte _our_bot_closest_to_ball s)
     ;; uint8 _opp_bot_closest_to_ball
       (write-byte _opp_bot_closest_to_ball s)
     ;; uint8 _our_goalie
       (write-byte _our_goalie s)
     ;; uint8 _opp_goalie
       (write-byte _opp_goalie s)
     ;; uint8 _opp_bot_marking_our_attacker
       (write-byte _opp_bot_marking_our_attacker s)
     ;; bool _ball_at_corners
       (if _ball_at_corners (write-byte -1 s) (write-byte 0 s))
     ;; bool _ball_in_our_half
       (if _ball_in_our_half (write-byte -1 s) (write-byte 0 s))
     ;; bool _ball_in_our_possession
       (if _ball_in_our_possession (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _isteamyellow
     (setq _isteamyellow (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; uint32 _frame_number
     (setq _frame_number (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float64 _t_capture
     (setq _t_capture (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _t_sent
     (setq _t_sent (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; geometry_msgs/Pose2D _ballPos
     (send _ballPos :deserialize buf ptr-) (incf ptr- (send _ballPos :serialization-length))
   ;; geometry_msgs/Point32 _ballVel
     (send _ballVel :deserialize buf ptr-) (incf ptr- (send _ballVel :serialization-length))
   ;; geometry_msgs/Pose2D[] _awayPos
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _awayPos (let (r) (dotimes (i n) (push (instance geometry_msgs::Pose2D :init) r)) r))
     (dolist (elem- _awayPos)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;; geometry_msgs/Pose2D[] _homePos
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _homePos (let (r) (dotimes (i n) (push (instance geometry_msgs::Pose2D :init) r)) r))
     (dolist (elem- _homePos)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;; bool _ballDetected
     (setq _ballDetected (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; bool[] _homeDetected
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _homeDetected (make-list n))
     (dotimes (i n)
     (setf (elt _homeDetected i) (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
     ))
   ;; bool[] _awayDetected
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _awayDetected (make-list n))
     (dotimes (i n)
     (setf (elt _awayDetected i) (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
     ))
   ;; uint8 _our_bot_closest_to_ball
     (setq _our_bot_closest_to_ball (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _opp_bot_closest_to_ball
     (setq _opp_bot_closest_to_ball (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _our_goalie
     (setq _our_goalie (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _opp_goalie
     (setq _opp_goalie (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _opp_bot_marking_our_attacker
     (setq _opp_bot_marking_our_attacker (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; bool _ball_at_corners
     (setq _ball_at_corners (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; bool _ball_in_our_half
     (setq _ball_in_our_half (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; bool _ball_in_our_possession
     (setq _ball_in_our_possession (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(setf (get krssg_ssl_msgs::BeliefState :md5sum-) "3b134ff6f4ce3926462be205754425ff")
(setf (get krssg_ssl_msgs::BeliefState :datatype-) "krssg_ssl_msgs/BeliefState")
(setf (get krssg_ssl_msgs::BeliefState :definition-)
      "# beliefstate message

bool               isteamyellow
uint32             frame_number 
float64            t_capture     
float64            t_sent   
geometry_msgs/Pose2D  ballPos       
geometry_msgs/Point32 ballVel  
geometry_msgs/Pose2D[] awayPos 
geometry_msgs/Pose2D[] homePos
bool ballDetected
bool[] homeDetected
bool[] awayDetected
uint8   our_bot_closest_to_ball
uint8   opp_bot_closest_to_ball
uint8   our_goalie			#returns 10 for no goalie
uint8   opp_goalie			#returns 10 for no goalie
uint8   opp_bot_marking_our_attacker
bool    ball_at_corners
bool    ball_in_our_half
bool    ball_in_our_possession

# add other stuff eg. field geometry, referee signals, bot/ball velocities and acc, score count, predicates, etc.
# node will have to subscribe to vision, refbox 
================================================================================
MSG: geometry_msgs/Pose2D
# Deprecated
# Please use the full 3D pose.

# In general our recommendation is to use a full 3D representation of everything and for 2D specific applications make the appropriate projections into the plane for their calculations but optimally will preserve the 3D information during processing.

# If we have parallel copies of 2D datatypes every UI and other pipeline will end up needing to have dual interfaces to plot everything. And you will end up with not being able to use 3D tools for 2D use cases even if they're completely valid, as you'd have to reimplement it with different inputs and outputs. It's not particularly hard to plot the 2D pose or compute the yaw error for the Pose message and there are already tools and libraries that can do this for you.


# This expresses a position and orientation on a 2D manifold.

float64 x
float64 y
float64 theta

================================================================================
MSG: geometry_msgs/Point32
# This contains the position of a point in free space(with 32 bits of precision).
# It is recommeded to use Point wherever possible instead of Point32.  
# 
# This recommendation is to promote interoperability.  
#
# This message is designed to take up less space when sending
# lots of points at once, as in the case of a PointCloud.  

float32 x
float32 y
float32 z
")



(provide :krssg_ssl_msgs/BeliefState "3b134ff6f4ce3926462be205754425ff")


