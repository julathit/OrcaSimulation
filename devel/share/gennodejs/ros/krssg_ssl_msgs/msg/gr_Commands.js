// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let gr_Robot_Command = require('./gr_Robot_Command.js');

//-----------------------------------------------------------

class gr_Commands {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.timestamp = null;
      this.isteamyellow = null;
      this.robot_commands = null;
    }
    else {
      if (initObj.hasOwnProperty('timestamp')) {
        this.timestamp = initObj.timestamp
      }
      else {
        this.timestamp = 0.0;
      }
      if (initObj.hasOwnProperty('isteamyellow')) {
        this.isteamyellow = initObj.isteamyellow
      }
      else {
        this.isteamyellow = false;
      }
      if (initObj.hasOwnProperty('robot_commands')) {
        this.robot_commands = initObj.robot_commands
      }
      else {
        this.robot_commands = new gr_Robot_Command();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type gr_Commands
    // Serialize message field [timestamp]
    bufferOffset = _serializer.float64(obj.timestamp, buffer, bufferOffset);
    // Serialize message field [isteamyellow]
    bufferOffset = _serializer.bool(obj.isteamyellow, buffer, bufferOffset);
    // Serialize message field [robot_commands]
    bufferOffset = gr_Robot_Command.serialize(obj.robot_commands, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type gr_Commands
    let len;
    let data = new gr_Commands(null);
    // Deserialize message field [timestamp]
    data.timestamp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [isteamyellow]
    data.isteamyellow = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [robot_commands]
    data.robot_commands = gr_Robot_Command.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 35;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/gr_Commands';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a045d291425bb1bd3aa6136dde3d9bfa';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 timestamp
    bool isteamyellow
    gr_Robot_Command robot_commands
    
    ================================================================================
    MSG: krssg_ssl_msgs/gr_Robot_Command
    uint32 id
    float32 kickspeedx
    float32 kickspeedz
    float32 veltangent
    float32 velnormal
    float32 velangular
    bool spinner
    bool wheelsspeed
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new gr_Commands(null);
    if (msg.timestamp !== undefined) {
      resolved.timestamp = msg.timestamp;
    }
    else {
      resolved.timestamp = 0.0
    }

    if (msg.isteamyellow !== undefined) {
      resolved.isteamyellow = msg.isteamyellow;
    }
    else {
      resolved.isteamyellow = false
    }

    if (msg.robot_commands !== undefined) {
      resolved.robot_commands = gr_Robot_Command.Resolve(msg.robot_commands)
    }
    else {
      resolved.robot_commands = new gr_Robot_Command()
    }

    return resolved;
    }
};

module.exports = gr_Commands;
