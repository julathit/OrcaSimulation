// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let gr_BallReplacement = require('./gr_BallReplacement.js');
let gr_RobotReplacement = require('./gr_RobotReplacement.js');

//-----------------------------------------------------------

class gr_Replacement {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.ball = null;
      this.robots = null;
    }
    else {
      if (initObj.hasOwnProperty('ball')) {
        this.ball = initObj.ball
      }
      else {
        this.ball = new gr_BallReplacement();
      }
      if (initObj.hasOwnProperty('robots')) {
        this.robots = initObj.robots
      }
      else {
        this.robots = new gr_RobotReplacement();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type gr_Replacement
    // Serialize message field [ball]
    bufferOffset = gr_BallReplacement.serialize(obj.ball, buffer, bufferOffset);
    // Serialize message field [robots]
    bufferOffset = gr_RobotReplacement.serialize(obj.robots, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type gr_Replacement
    let len;
    let data = new gr_Replacement(null);
    // Deserialize message field [ball]
    data.ball = gr_BallReplacement.deserialize(buffer, bufferOffset);
    // Deserialize message field [robots]
    data.robots = gr_RobotReplacement.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 61;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/gr_Replacement';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '63f6045fad0d38b32afdf3f8ecc35d5c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    gr_BallReplacement ball  
    gr_RobotReplacement robots  
    
    
    ================================================================================
    MSG: krssg_ssl_msgs/gr_BallReplacement
    float64 x 
    float64 y 
    float64 vx 
    float64 vy 
    
    
    ================================================================================
    MSG: krssg_ssl_msgs/gr_RobotReplacement
    float64 x 
    float64 y 
    float64 dir 
    uint32 id 
    bool yellowteam 
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new gr_Replacement(null);
    if (msg.ball !== undefined) {
      resolved.ball = gr_BallReplacement.Resolve(msg.ball)
    }
    else {
      resolved.ball = new gr_BallReplacement()
    }

    if (msg.robots !== undefined) {
      resolved.robots = gr_RobotReplacement.Resolve(msg.robots)
    }
    else {
      resolved.robots = new gr_RobotReplacement()
    }

    return resolved;
    }
};

module.exports = gr_Replacement;
