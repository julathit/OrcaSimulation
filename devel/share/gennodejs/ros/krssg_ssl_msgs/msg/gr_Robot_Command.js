// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class gr_Robot_Command {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.id = null;
      this.kickspeedx = null;
      this.kickspeedz = null;
      this.veltangent = null;
      this.velnormal = null;
      this.velangular = null;
      this.spinner = null;
      this.wheelsspeed = null;
    }
    else {
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
      if (initObj.hasOwnProperty('kickspeedx')) {
        this.kickspeedx = initObj.kickspeedx
      }
      else {
        this.kickspeedx = 0.0;
      }
      if (initObj.hasOwnProperty('kickspeedz')) {
        this.kickspeedz = initObj.kickspeedz
      }
      else {
        this.kickspeedz = 0.0;
      }
      if (initObj.hasOwnProperty('veltangent')) {
        this.veltangent = initObj.veltangent
      }
      else {
        this.veltangent = 0.0;
      }
      if (initObj.hasOwnProperty('velnormal')) {
        this.velnormal = initObj.velnormal
      }
      else {
        this.velnormal = 0.0;
      }
      if (initObj.hasOwnProperty('velangular')) {
        this.velangular = initObj.velangular
      }
      else {
        this.velangular = 0.0;
      }
      if (initObj.hasOwnProperty('spinner')) {
        this.spinner = initObj.spinner
      }
      else {
        this.spinner = false;
      }
      if (initObj.hasOwnProperty('wheelsspeed')) {
        this.wheelsspeed = initObj.wheelsspeed
      }
      else {
        this.wheelsspeed = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type gr_Robot_Command
    // Serialize message field [id]
    bufferOffset = _serializer.uint32(obj.id, buffer, bufferOffset);
    // Serialize message field [kickspeedx]
    bufferOffset = _serializer.float32(obj.kickspeedx, buffer, bufferOffset);
    // Serialize message field [kickspeedz]
    bufferOffset = _serializer.float32(obj.kickspeedz, buffer, bufferOffset);
    // Serialize message field [veltangent]
    bufferOffset = _serializer.float32(obj.veltangent, buffer, bufferOffset);
    // Serialize message field [velnormal]
    bufferOffset = _serializer.float32(obj.velnormal, buffer, bufferOffset);
    // Serialize message field [velangular]
    bufferOffset = _serializer.float32(obj.velangular, buffer, bufferOffset);
    // Serialize message field [spinner]
    bufferOffset = _serializer.bool(obj.spinner, buffer, bufferOffset);
    // Serialize message field [wheelsspeed]
    bufferOffset = _serializer.bool(obj.wheelsspeed, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type gr_Robot_Command
    let len;
    let data = new gr_Robot_Command(null);
    // Deserialize message field [id]
    data.id = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [kickspeedx]
    data.kickspeedx = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [kickspeedz]
    data.kickspeedz = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [veltangent]
    data.veltangent = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [velnormal]
    data.velnormal = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [velangular]
    data.velangular = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [spinner]
    data.spinner = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [wheelsspeed]
    data.wheelsspeed = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 26;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/gr_Robot_Command';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b80457e93869f2f2bd035c51d34aed48';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    const resolved = new gr_Robot_Command(null);
    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    if (msg.kickspeedx !== undefined) {
      resolved.kickspeedx = msg.kickspeedx;
    }
    else {
      resolved.kickspeedx = 0.0
    }

    if (msg.kickspeedz !== undefined) {
      resolved.kickspeedz = msg.kickspeedz;
    }
    else {
      resolved.kickspeedz = 0.0
    }

    if (msg.veltangent !== undefined) {
      resolved.veltangent = msg.veltangent;
    }
    else {
      resolved.veltangent = 0.0
    }

    if (msg.velnormal !== undefined) {
      resolved.velnormal = msg.velnormal;
    }
    else {
      resolved.velnormal = 0.0
    }

    if (msg.velangular !== undefined) {
      resolved.velangular = msg.velangular;
    }
    else {
      resolved.velangular = 0.0
    }

    if (msg.spinner !== undefined) {
      resolved.spinner = msg.spinner;
    }
    else {
      resolved.spinner = false
    }

    if (msg.wheelsspeed !== undefined) {
      resolved.wheelsspeed = msg.wheelsspeed;
    }
    else {
      resolved.wheelsspeed = false
    }

    return resolved;
    }
};

module.exports = gr_Robot_Command;
