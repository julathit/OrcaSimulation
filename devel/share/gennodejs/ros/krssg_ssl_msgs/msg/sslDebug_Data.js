// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let sslDebug_Line = require('./sslDebug_Line.js');
let sslDebug_Circle = require('./sslDebug_Circle.js');

//-----------------------------------------------------------

class sslDebug_Data {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.id = null;
      this.line = null;
      this.circle = null;
    }
    else {
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = '';
      }
      if (initObj.hasOwnProperty('line')) {
        this.line = initObj.line
      }
      else {
        this.line = [];
      }
      if (initObj.hasOwnProperty('circle')) {
        this.circle = initObj.circle
      }
      else {
        this.circle = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type sslDebug_Data
    // Serialize message field [id]
    bufferOffset = _serializer.string(obj.id, buffer, bufferOffset);
    // Serialize message field [line]
    // Serialize the length for message field [line]
    bufferOffset = _serializer.uint32(obj.line.length, buffer, bufferOffset);
    obj.line.forEach((val) => {
      bufferOffset = sslDebug_Line.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [circle]
    // Serialize the length for message field [circle]
    bufferOffset = _serializer.uint32(obj.circle.length, buffer, bufferOffset);
    obj.circle.forEach((val) => {
      bufferOffset = sslDebug_Circle.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type sslDebug_Data
    let len;
    let data = new sslDebug_Data(null);
    // Deserialize message field [id]
    data.id = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [line]
    // Deserialize array length for message field [line]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.line = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.line[i] = sslDebug_Line.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [circle]
    // Deserialize array length for message field [circle]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.circle = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.circle[i] = sslDebug_Circle.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.id);
    length += 20 * object.line.length;
    length += 16 * object.circle.length;
    return length + 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/sslDebug_Data';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a4f68973c1a24950c9f075574765c5e7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    const resolved = new sslDebug_Data(null);
    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = ''
    }

    if (msg.line !== undefined) {
      resolved.line = new Array(msg.line.length);
      for (let i = 0; i < resolved.line.length; ++i) {
        resolved.line[i] = sslDebug_Line.Resolve(msg.line[i]);
      }
    }
    else {
      resolved.line = []
    }

    if (msg.circle !== undefined) {
      resolved.circle = new Array(msg.circle.length);
      for (let i = 0; i < resolved.circle.length; ++i) {
        resolved.circle[i] = sslDebug_Circle.Resolve(msg.circle[i]);
      }
    }
    else {
      resolved.circle = []
    }

    return resolved;
    }
};

module.exports = sslDebug_Data;
