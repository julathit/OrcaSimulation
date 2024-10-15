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

class TacticPacket {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.tID = null;
      this.tParamJSON = null;
    }
    else {
      if (initObj.hasOwnProperty('tID')) {
        this.tID = initObj.tID
      }
      else {
        this.tID = '';
      }
      if (initObj.hasOwnProperty('tParamJSON')) {
        this.tParamJSON = initObj.tParamJSON
      }
      else {
        this.tParamJSON = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type TacticPacket
    // Serialize message field [tID]
    bufferOffset = _serializer.string(obj.tID, buffer, bufferOffset);
    // Serialize message field [tParamJSON]
    bufferOffset = _serializer.string(obj.tParamJSON, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type TacticPacket
    let len;
    let data = new TacticPacket(null);
    // Deserialize message field [tID]
    data.tID = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [tParamJSON]
    data.tParamJSON = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.tID);
    length += _getByteLength(object.tParamJSON);
    return length + 8;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/TacticPacket';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '938fa10ebbde9705347694b0dec25403';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message for passing tactic name and tactic param from play -> robot
    string tID
    string tParamJSON
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new TacticPacket(null);
    if (msg.tID !== undefined) {
      resolved.tID = msg.tID;
    }
    else {
      resolved.tID = ''
    }

    if (msg.tParamJSON !== undefined) {
      resolved.tParamJSON = msg.tParamJSON;
    }
    else {
      resolved.tParamJSON = ''
    }

    return resolved;
    }
};

module.exports = TacticPacket;
