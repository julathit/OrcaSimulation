// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class BeliefState {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.isteamyellow = null;
      this.frame_number = null;
      this.t_capture = null;
      this.t_sent = null;
      this.ballPos = null;
      this.ballVel = null;
      this.awayPos = null;
      this.homePos = null;
      this.ballDetected = null;
      this.homeDetected = null;
      this.awayDetected = null;
      this.our_bot_closest_to_ball = null;
      this.opp_bot_closest_to_ball = null;
      this.our_goalie = null;
      this.opp_goalie = null;
      this.opp_bot_marking_our_attacker = null;
      this.ball_at_corners = null;
      this.ball_in_our_half = null;
      this.ball_in_our_possession = null;
    }
    else {
      if (initObj.hasOwnProperty('isteamyellow')) {
        this.isteamyellow = initObj.isteamyellow
      }
      else {
        this.isteamyellow = false;
      }
      if (initObj.hasOwnProperty('frame_number')) {
        this.frame_number = initObj.frame_number
      }
      else {
        this.frame_number = 0;
      }
      if (initObj.hasOwnProperty('t_capture')) {
        this.t_capture = initObj.t_capture
      }
      else {
        this.t_capture = 0.0;
      }
      if (initObj.hasOwnProperty('t_sent')) {
        this.t_sent = initObj.t_sent
      }
      else {
        this.t_sent = 0.0;
      }
      if (initObj.hasOwnProperty('ballPos')) {
        this.ballPos = initObj.ballPos
      }
      else {
        this.ballPos = new geometry_msgs.msg.Pose2D();
      }
      if (initObj.hasOwnProperty('ballVel')) {
        this.ballVel = initObj.ballVel
      }
      else {
        this.ballVel = new geometry_msgs.msg.Point32();
      }
      if (initObj.hasOwnProperty('awayPos')) {
        this.awayPos = initObj.awayPos
      }
      else {
        this.awayPos = [];
      }
      if (initObj.hasOwnProperty('homePos')) {
        this.homePos = initObj.homePos
      }
      else {
        this.homePos = [];
      }
      if (initObj.hasOwnProperty('ballDetected')) {
        this.ballDetected = initObj.ballDetected
      }
      else {
        this.ballDetected = false;
      }
      if (initObj.hasOwnProperty('homeDetected')) {
        this.homeDetected = initObj.homeDetected
      }
      else {
        this.homeDetected = [];
      }
      if (initObj.hasOwnProperty('awayDetected')) {
        this.awayDetected = initObj.awayDetected
      }
      else {
        this.awayDetected = [];
      }
      if (initObj.hasOwnProperty('our_bot_closest_to_ball')) {
        this.our_bot_closest_to_ball = initObj.our_bot_closest_to_ball
      }
      else {
        this.our_bot_closest_to_ball = 0;
      }
      if (initObj.hasOwnProperty('opp_bot_closest_to_ball')) {
        this.opp_bot_closest_to_ball = initObj.opp_bot_closest_to_ball
      }
      else {
        this.opp_bot_closest_to_ball = 0;
      }
      if (initObj.hasOwnProperty('our_goalie')) {
        this.our_goalie = initObj.our_goalie
      }
      else {
        this.our_goalie = 0;
      }
      if (initObj.hasOwnProperty('opp_goalie')) {
        this.opp_goalie = initObj.opp_goalie
      }
      else {
        this.opp_goalie = 0;
      }
      if (initObj.hasOwnProperty('opp_bot_marking_our_attacker')) {
        this.opp_bot_marking_our_attacker = initObj.opp_bot_marking_our_attacker
      }
      else {
        this.opp_bot_marking_our_attacker = 0;
      }
      if (initObj.hasOwnProperty('ball_at_corners')) {
        this.ball_at_corners = initObj.ball_at_corners
      }
      else {
        this.ball_at_corners = false;
      }
      if (initObj.hasOwnProperty('ball_in_our_half')) {
        this.ball_in_our_half = initObj.ball_in_our_half
      }
      else {
        this.ball_in_our_half = false;
      }
      if (initObj.hasOwnProperty('ball_in_our_possession')) {
        this.ball_in_our_possession = initObj.ball_in_our_possession
      }
      else {
        this.ball_in_our_possession = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BeliefState
    // Serialize message field [isteamyellow]
    bufferOffset = _serializer.bool(obj.isteamyellow, buffer, bufferOffset);
    // Serialize message field [frame_number]
    bufferOffset = _serializer.uint32(obj.frame_number, buffer, bufferOffset);
    // Serialize message field [t_capture]
    bufferOffset = _serializer.float64(obj.t_capture, buffer, bufferOffset);
    // Serialize message field [t_sent]
    bufferOffset = _serializer.float64(obj.t_sent, buffer, bufferOffset);
    // Serialize message field [ballPos]
    bufferOffset = geometry_msgs.msg.Pose2D.serialize(obj.ballPos, buffer, bufferOffset);
    // Serialize message field [ballVel]
    bufferOffset = geometry_msgs.msg.Point32.serialize(obj.ballVel, buffer, bufferOffset);
    // Serialize message field [awayPos]
    // Serialize the length for message field [awayPos]
    bufferOffset = _serializer.uint32(obj.awayPos.length, buffer, bufferOffset);
    obj.awayPos.forEach((val) => {
      bufferOffset = geometry_msgs.msg.Pose2D.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [homePos]
    // Serialize the length for message field [homePos]
    bufferOffset = _serializer.uint32(obj.homePos.length, buffer, bufferOffset);
    obj.homePos.forEach((val) => {
      bufferOffset = geometry_msgs.msg.Pose2D.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [ballDetected]
    bufferOffset = _serializer.bool(obj.ballDetected, buffer, bufferOffset);
    // Serialize message field [homeDetected]
    bufferOffset = _arraySerializer.bool(obj.homeDetected, buffer, bufferOffset, null);
    // Serialize message field [awayDetected]
    bufferOffset = _arraySerializer.bool(obj.awayDetected, buffer, bufferOffset, null);
    // Serialize message field [our_bot_closest_to_ball]
    bufferOffset = _serializer.uint8(obj.our_bot_closest_to_ball, buffer, bufferOffset);
    // Serialize message field [opp_bot_closest_to_ball]
    bufferOffset = _serializer.uint8(obj.opp_bot_closest_to_ball, buffer, bufferOffset);
    // Serialize message field [our_goalie]
    bufferOffset = _serializer.uint8(obj.our_goalie, buffer, bufferOffset);
    // Serialize message field [opp_goalie]
    bufferOffset = _serializer.uint8(obj.opp_goalie, buffer, bufferOffset);
    // Serialize message field [opp_bot_marking_our_attacker]
    bufferOffset = _serializer.uint8(obj.opp_bot_marking_our_attacker, buffer, bufferOffset);
    // Serialize message field [ball_at_corners]
    bufferOffset = _serializer.bool(obj.ball_at_corners, buffer, bufferOffset);
    // Serialize message field [ball_in_our_half]
    bufferOffset = _serializer.bool(obj.ball_in_our_half, buffer, bufferOffset);
    // Serialize message field [ball_in_our_possession]
    bufferOffset = _serializer.bool(obj.ball_in_our_possession, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BeliefState
    let len;
    let data = new BeliefState(null);
    // Deserialize message field [isteamyellow]
    data.isteamyellow = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [frame_number]
    data.frame_number = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [t_capture]
    data.t_capture = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [t_sent]
    data.t_sent = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [ballPos]
    data.ballPos = geometry_msgs.msg.Pose2D.deserialize(buffer, bufferOffset);
    // Deserialize message field [ballVel]
    data.ballVel = geometry_msgs.msg.Point32.deserialize(buffer, bufferOffset);
    // Deserialize message field [awayPos]
    // Deserialize array length for message field [awayPos]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.awayPos = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.awayPos[i] = geometry_msgs.msg.Pose2D.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [homePos]
    // Deserialize array length for message field [homePos]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.homePos = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.homePos[i] = geometry_msgs.msg.Pose2D.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [ballDetected]
    data.ballDetected = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [homeDetected]
    data.homeDetected = _arrayDeserializer.bool(buffer, bufferOffset, null)
    // Deserialize message field [awayDetected]
    data.awayDetected = _arrayDeserializer.bool(buffer, bufferOffset, null)
    // Deserialize message field [our_bot_closest_to_ball]
    data.our_bot_closest_to_ball = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [opp_bot_closest_to_ball]
    data.opp_bot_closest_to_ball = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [our_goalie]
    data.our_goalie = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [opp_goalie]
    data.opp_goalie = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [opp_bot_marking_our_attacker]
    data.opp_bot_marking_our_attacker = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [ball_at_corners]
    data.ball_at_corners = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [ball_in_our_half]
    data.ball_in_our_half = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [ball_in_our_possession]
    data.ball_in_our_possession = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 24 * object.awayPos.length;
    length += 24 * object.homePos.length;
    length += object.homeDetected.length;
    length += object.awayDetected.length;
    return length + 82;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/BeliefState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '3b134ff6f4ce3926462be205754425ff';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # beliefstate message
    
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
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new BeliefState(null);
    if (msg.isteamyellow !== undefined) {
      resolved.isteamyellow = msg.isteamyellow;
    }
    else {
      resolved.isteamyellow = false
    }

    if (msg.frame_number !== undefined) {
      resolved.frame_number = msg.frame_number;
    }
    else {
      resolved.frame_number = 0
    }

    if (msg.t_capture !== undefined) {
      resolved.t_capture = msg.t_capture;
    }
    else {
      resolved.t_capture = 0.0
    }

    if (msg.t_sent !== undefined) {
      resolved.t_sent = msg.t_sent;
    }
    else {
      resolved.t_sent = 0.0
    }

    if (msg.ballPos !== undefined) {
      resolved.ballPos = geometry_msgs.msg.Pose2D.Resolve(msg.ballPos)
    }
    else {
      resolved.ballPos = new geometry_msgs.msg.Pose2D()
    }

    if (msg.ballVel !== undefined) {
      resolved.ballVel = geometry_msgs.msg.Point32.Resolve(msg.ballVel)
    }
    else {
      resolved.ballVel = new geometry_msgs.msg.Point32()
    }

    if (msg.awayPos !== undefined) {
      resolved.awayPos = new Array(msg.awayPos.length);
      for (let i = 0; i < resolved.awayPos.length; ++i) {
        resolved.awayPos[i] = geometry_msgs.msg.Pose2D.Resolve(msg.awayPos[i]);
      }
    }
    else {
      resolved.awayPos = []
    }

    if (msg.homePos !== undefined) {
      resolved.homePos = new Array(msg.homePos.length);
      for (let i = 0; i < resolved.homePos.length; ++i) {
        resolved.homePos[i] = geometry_msgs.msg.Pose2D.Resolve(msg.homePos[i]);
      }
    }
    else {
      resolved.homePos = []
    }

    if (msg.ballDetected !== undefined) {
      resolved.ballDetected = msg.ballDetected;
    }
    else {
      resolved.ballDetected = false
    }

    if (msg.homeDetected !== undefined) {
      resolved.homeDetected = msg.homeDetected;
    }
    else {
      resolved.homeDetected = []
    }

    if (msg.awayDetected !== undefined) {
      resolved.awayDetected = msg.awayDetected;
    }
    else {
      resolved.awayDetected = []
    }

    if (msg.our_bot_closest_to_ball !== undefined) {
      resolved.our_bot_closest_to_ball = msg.our_bot_closest_to_ball;
    }
    else {
      resolved.our_bot_closest_to_ball = 0
    }

    if (msg.opp_bot_closest_to_ball !== undefined) {
      resolved.opp_bot_closest_to_ball = msg.opp_bot_closest_to_ball;
    }
    else {
      resolved.opp_bot_closest_to_ball = 0
    }

    if (msg.our_goalie !== undefined) {
      resolved.our_goalie = msg.our_goalie;
    }
    else {
      resolved.our_goalie = 0
    }

    if (msg.opp_goalie !== undefined) {
      resolved.opp_goalie = msg.opp_goalie;
    }
    else {
      resolved.opp_goalie = 0
    }

    if (msg.opp_bot_marking_our_attacker !== undefined) {
      resolved.opp_bot_marking_our_attacker = msg.opp_bot_marking_our_attacker;
    }
    else {
      resolved.opp_bot_marking_our_attacker = 0
    }

    if (msg.ball_at_corners !== undefined) {
      resolved.ball_at_corners = msg.ball_at_corners;
    }
    else {
      resolved.ball_at_corners = false
    }

    if (msg.ball_in_our_half !== undefined) {
      resolved.ball_in_our_half = msg.ball_in_our_half;
    }
    else {
      resolved.ball_in_our_half = false
    }

    if (msg.ball_in_our_possession !== undefined) {
      resolved.ball_in_our_possession = msg.ball_in_our_possession;
    }
    else {
      resolved.ball_in_our_possession = false
    }

    return resolved;
    }
};

module.exports = BeliefState;
