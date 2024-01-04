// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let gr_Commands = require('./gr_Commands.js');
let gr_Replacement = require('./gr_Replacement.js');
let sslDebug_Data = require('./sslDebug_Data.js');

//-----------------------------------------------------------

class gr_Packet {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.commands = null;
      this.replacement = null;
      this.debuginfo = null;
    }
    else {
      if (initObj.hasOwnProperty('commands')) {
        this.commands = initObj.commands
      }
      else {
        this.commands = new gr_Commands();
      }
      if (initObj.hasOwnProperty('replacement')) {
        this.replacement = initObj.replacement
      }
      else {
        this.replacement = new gr_Replacement();
      }
      if (initObj.hasOwnProperty('debuginfo')) {
        this.debuginfo = initObj.debuginfo
      }
      else {
        this.debuginfo = new sslDebug_Data();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type gr_Packet
    // Serialize message field [commands]
    bufferOffset = gr_Commands.serialize(obj.commands, buffer, bufferOffset);
    // Serialize message field [replacement]
    bufferOffset = gr_Replacement.serialize(obj.replacement, buffer, bufferOffset);
    // Serialize message field [debuginfo]
    bufferOffset = sslDebug_Data.serialize(obj.debuginfo, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type gr_Packet
    let len;
    let data = new gr_Packet(null);
    // Deserialize message field [commands]
    data.commands = gr_Commands.deserialize(buffer, bufferOffset);
    // Deserialize message field [replacement]
    data.replacement = gr_Replacement.deserialize(buffer, bufferOffset);
    // Deserialize message field [debuginfo]
    data.debuginfo = sslDebug_Data.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += sslDebug_Data.getMessageSize(object.debuginfo);
    return length + 96;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/gr_Packet';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f9f779287879cb8e47b613424fa478ac';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    gr_Commands commands
    gr_Replacement replacement
    sslDebug_Data debuginfo
    ================================================================================
    MSG: krssg_ssl_msgs/gr_Commands
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
    
    ================================================================================
    MSG: krssg_ssl_msgs/gr_Replacement
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
    
    ================================================================================
    MSG: krssg_ssl_msgs/sslDebug_Data
    string id
    sslDebug_Line[] line
    sslDebug_Circle[] circle
    ================================================================================
    MSG: krssg_ssl_msgs/sslDebug_Line
    int32 x1
    int32 y1
    int32 x2
    int32 y2
    float32 color
    ================================================================================
    MSG: krssg_ssl_msgs/sslDebug_Circle
    int32 x
    int32 y
    int32 radius
    float32 color
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new gr_Packet(null);
    if (msg.commands !== undefined) {
      resolved.commands = gr_Commands.Resolve(msg.commands)
    }
    else {
      resolved.commands = new gr_Commands()
    }

    if (msg.replacement !== undefined) {
      resolved.replacement = gr_Replacement.Resolve(msg.replacement)
    }
    else {
      resolved.replacement = new gr_Replacement()
    }

    if (msg.debuginfo !== undefined) {
      resolved.debuginfo = sslDebug_Data.Resolve(msg.debuginfo)
    }
    else {
      resolved.debuginfo = new sslDebug_Data()
    }

    return resolved;
    }
};

module.exports = gr_Packet;
