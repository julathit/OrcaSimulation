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

class SSL_Refbox {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.packet_timestamp = null;
      this.stage = null;
      this.stage_time_left = null;
      this.command = null;
      this.command_counter = null;
      this.command_timestamp = null;
      this.b_name = null;
      this.b_score = null;
      this.b_red_cards = null;
      this.b_yellow_cards = null;
      this.b_timeouts = null;
      this.b_timeout_time = null;
      this.b_goalie = null;
      this.y_name = null;
      this.y_score = null;
      this.y_red_cards = null;
      this.y_yellow_cards = null;
      this.y_timeouts = null;
      this.y_timeout_time = null;
      this.y_goalie = null;
      this.y_card_times = null;
      this.b_card_times = null;
    }
    else {
      if (initObj.hasOwnProperty('packet_timestamp')) {
        this.packet_timestamp = initObj.packet_timestamp
      }
      else {
        this.packet_timestamp = 0.0;
      }
      if (initObj.hasOwnProperty('stage')) {
        this.stage = initObj.stage
      }
      else {
        this.stage = 0;
      }
      if (initObj.hasOwnProperty('stage_time_left')) {
        this.stage_time_left = initObj.stage_time_left
      }
      else {
        this.stage_time_left = 0;
      }
      if (initObj.hasOwnProperty('command')) {
        this.command = initObj.command
      }
      else {
        this.command = 0;
      }
      if (initObj.hasOwnProperty('command_counter')) {
        this.command_counter = initObj.command_counter
      }
      else {
        this.command_counter = 0;
      }
      if (initObj.hasOwnProperty('command_timestamp')) {
        this.command_timestamp = initObj.command_timestamp
      }
      else {
        this.command_timestamp = 0;
      }
      if (initObj.hasOwnProperty('b_name')) {
        this.b_name = initObj.b_name
      }
      else {
        this.b_name = '';
      }
      if (initObj.hasOwnProperty('b_score')) {
        this.b_score = initObj.b_score
      }
      else {
        this.b_score = 0;
      }
      if (initObj.hasOwnProperty('b_red_cards')) {
        this.b_red_cards = initObj.b_red_cards
      }
      else {
        this.b_red_cards = 0;
      }
      if (initObj.hasOwnProperty('b_yellow_cards')) {
        this.b_yellow_cards = initObj.b_yellow_cards
      }
      else {
        this.b_yellow_cards = 0;
      }
      if (initObj.hasOwnProperty('b_timeouts')) {
        this.b_timeouts = initObj.b_timeouts
      }
      else {
        this.b_timeouts = 0;
      }
      if (initObj.hasOwnProperty('b_timeout_time')) {
        this.b_timeout_time = initObj.b_timeout_time
      }
      else {
        this.b_timeout_time = 0;
      }
      if (initObj.hasOwnProperty('b_goalie')) {
        this.b_goalie = initObj.b_goalie
      }
      else {
        this.b_goalie = 0;
      }
      if (initObj.hasOwnProperty('y_name')) {
        this.y_name = initObj.y_name
      }
      else {
        this.y_name = '';
      }
      if (initObj.hasOwnProperty('y_score')) {
        this.y_score = initObj.y_score
      }
      else {
        this.y_score = 0;
      }
      if (initObj.hasOwnProperty('y_red_cards')) {
        this.y_red_cards = initObj.y_red_cards
      }
      else {
        this.y_red_cards = 0;
      }
      if (initObj.hasOwnProperty('y_yellow_cards')) {
        this.y_yellow_cards = initObj.y_yellow_cards
      }
      else {
        this.y_yellow_cards = 0;
      }
      if (initObj.hasOwnProperty('y_timeouts')) {
        this.y_timeouts = initObj.y_timeouts
      }
      else {
        this.y_timeouts = 0;
      }
      if (initObj.hasOwnProperty('y_timeout_time')) {
        this.y_timeout_time = initObj.y_timeout_time
      }
      else {
        this.y_timeout_time = 0;
      }
      if (initObj.hasOwnProperty('y_goalie')) {
        this.y_goalie = initObj.y_goalie
      }
      else {
        this.y_goalie = 0;
      }
      if (initObj.hasOwnProperty('y_card_times')) {
        this.y_card_times = initObj.y_card_times
      }
      else {
        this.y_card_times = [];
      }
      if (initObj.hasOwnProperty('b_card_times')) {
        this.b_card_times = initObj.b_card_times
      }
      else {
        this.b_card_times = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type SSL_Refbox
    // Serialize message field [packet_timestamp]
    bufferOffset = _serializer.float64(obj.packet_timestamp, buffer, bufferOffset);
    // Serialize message field [stage]
    bufferOffset = _serializer.uint32(obj.stage, buffer, bufferOffset);
    // Serialize message field [stage_time_left]
    bufferOffset = _serializer.uint32(obj.stage_time_left, buffer, bufferOffset);
    // Serialize message field [command]
    bufferOffset = _serializer.uint32(obj.command, buffer, bufferOffset);
    // Serialize message field [command_counter]
    bufferOffset = _serializer.uint32(obj.command_counter, buffer, bufferOffset);
    // Serialize message field [command_timestamp]
    bufferOffset = _serializer.uint32(obj.command_timestamp, buffer, bufferOffset);
    // Serialize message field [b_name]
    bufferOffset = _serializer.string(obj.b_name, buffer, bufferOffset);
    // Serialize message field [b_score]
    bufferOffset = _serializer.uint32(obj.b_score, buffer, bufferOffset);
    // Serialize message field [b_red_cards]
    bufferOffset = _serializer.uint32(obj.b_red_cards, buffer, bufferOffset);
    // Serialize message field [b_yellow_cards]
    bufferOffset = _serializer.uint32(obj.b_yellow_cards, buffer, bufferOffset);
    // Serialize message field [b_timeouts]
    bufferOffset = _serializer.uint32(obj.b_timeouts, buffer, bufferOffset);
    // Serialize message field [b_timeout_time]
    bufferOffset = _serializer.uint32(obj.b_timeout_time, buffer, bufferOffset);
    // Serialize message field [b_goalie]
    bufferOffset = _serializer.uint32(obj.b_goalie, buffer, bufferOffset);
    // Serialize message field [y_name]
    bufferOffset = _serializer.string(obj.y_name, buffer, bufferOffset);
    // Serialize message field [y_score]
    bufferOffset = _serializer.uint32(obj.y_score, buffer, bufferOffset);
    // Serialize message field [y_red_cards]
    bufferOffset = _serializer.uint32(obj.y_red_cards, buffer, bufferOffset);
    // Serialize message field [y_yellow_cards]
    bufferOffset = _serializer.uint32(obj.y_yellow_cards, buffer, bufferOffset);
    // Serialize message field [y_timeouts]
    bufferOffset = _serializer.uint32(obj.y_timeouts, buffer, bufferOffset);
    // Serialize message field [y_timeout_time]
    bufferOffset = _serializer.uint32(obj.y_timeout_time, buffer, bufferOffset);
    // Serialize message field [y_goalie]
    bufferOffset = _serializer.uint32(obj.y_goalie, buffer, bufferOffset);
    // Serialize message field [y_card_times]
    bufferOffset = _arraySerializer.uint32(obj.y_card_times, buffer, bufferOffset, null);
    // Serialize message field [b_card_times]
    bufferOffset = _arraySerializer.uint32(obj.b_card_times, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type SSL_Refbox
    let len;
    let data = new SSL_Refbox(null);
    // Deserialize message field [packet_timestamp]
    data.packet_timestamp = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [stage]
    data.stage = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [stage_time_left]
    data.stage_time_left = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [command]
    data.command = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [command_counter]
    data.command_counter = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [command_timestamp]
    data.command_timestamp = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_name]
    data.b_name = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [b_score]
    data.b_score = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_red_cards]
    data.b_red_cards = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_yellow_cards]
    data.b_yellow_cards = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_timeouts]
    data.b_timeouts = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_timeout_time]
    data.b_timeout_time = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [b_goalie]
    data.b_goalie = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_name]
    data.y_name = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [y_score]
    data.y_score = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_red_cards]
    data.y_red_cards = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_yellow_cards]
    data.y_yellow_cards = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_timeouts]
    data.y_timeouts = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_timeout_time]
    data.y_timeout_time = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_goalie]
    data.y_goalie = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [y_card_times]
    data.y_card_times = _arrayDeserializer.uint32(buffer, bufferOffset, null)
    // Deserialize message field [b_card_times]
    data.b_card_times = _arrayDeserializer.uint32(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += _getByteLength(object.b_name);
    length += _getByteLength(object.y_name);
    length += 4 * object.y_card_times.length;
    length += 4 * object.b_card_times.length;
    return length + 92;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/SSL_Refbox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '473e87105d23511aae7f9b0fe64666df';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 packet_timestamp
    uint32 stage
    uint32 stage_time_left
    uint32 command
    uint32 command_counter
    uint32 command_timestamp
    string b_name
    uint32 b_score
    uint32 b_red_cards
    uint32 b_yellow_cards
    uint32 b_timeouts
    uint32 b_timeout_time
    uint32 b_goalie
    string y_name
    uint32 y_score
    uint32 y_red_cards
    uint32 y_yellow_cards
    uint32 y_timeouts
    uint32 y_timeout_time
    uint32 y_goalie
    uint32[] y_card_times
    uint32[] b_card_times
    
    	
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new SSL_Refbox(null);
    if (msg.packet_timestamp !== undefined) {
      resolved.packet_timestamp = msg.packet_timestamp;
    }
    else {
      resolved.packet_timestamp = 0.0
    }

    if (msg.stage !== undefined) {
      resolved.stage = msg.stage;
    }
    else {
      resolved.stage = 0
    }

    if (msg.stage_time_left !== undefined) {
      resolved.stage_time_left = msg.stage_time_left;
    }
    else {
      resolved.stage_time_left = 0
    }

    if (msg.command !== undefined) {
      resolved.command = msg.command;
    }
    else {
      resolved.command = 0
    }

    if (msg.command_counter !== undefined) {
      resolved.command_counter = msg.command_counter;
    }
    else {
      resolved.command_counter = 0
    }

    if (msg.command_timestamp !== undefined) {
      resolved.command_timestamp = msg.command_timestamp;
    }
    else {
      resolved.command_timestamp = 0
    }

    if (msg.b_name !== undefined) {
      resolved.b_name = msg.b_name;
    }
    else {
      resolved.b_name = ''
    }

    if (msg.b_score !== undefined) {
      resolved.b_score = msg.b_score;
    }
    else {
      resolved.b_score = 0
    }

    if (msg.b_red_cards !== undefined) {
      resolved.b_red_cards = msg.b_red_cards;
    }
    else {
      resolved.b_red_cards = 0
    }

    if (msg.b_yellow_cards !== undefined) {
      resolved.b_yellow_cards = msg.b_yellow_cards;
    }
    else {
      resolved.b_yellow_cards = 0
    }

    if (msg.b_timeouts !== undefined) {
      resolved.b_timeouts = msg.b_timeouts;
    }
    else {
      resolved.b_timeouts = 0
    }

    if (msg.b_timeout_time !== undefined) {
      resolved.b_timeout_time = msg.b_timeout_time;
    }
    else {
      resolved.b_timeout_time = 0
    }

    if (msg.b_goalie !== undefined) {
      resolved.b_goalie = msg.b_goalie;
    }
    else {
      resolved.b_goalie = 0
    }

    if (msg.y_name !== undefined) {
      resolved.y_name = msg.y_name;
    }
    else {
      resolved.y_name = ''
    }

    if (msg.y_score !== undefined) {
      resolved.y_score = msg.y_score;
    }
    else {
      resolved.y_score = 0
    }

    if (msg.y_red_cards !== undefined) {
      resolved.y_red_cards = msg.y_red_cards;
    }
    else {
      resolved.y_red_cards = 0
    }

    if (msg.y_yellow_cards !== undefined) {
      resolved.y_yellow_cards = msg.y_yellow_cards;
    }
    else {
      resolved.y_yellow_cards = 0
    }

    if (msg.y_timeouts !== undefined) {
      resolved.y_timeouts = msg.y_timeouts;
    }
    else {
      resolved.y_timeouts = 0
    }

    if (msg.y_timeout_time !== undefined) {
      resolved.y_timeout_time = msg.y_timeout_time;
    }
    else {
      resolved.y_timeout_time = 0
    }

    if (msg.y_goalie !== undefined) {
      resolved.y_goalie = msg.y_goalie;
    }
    else {
      resolved.y_goalie = 0
    }

    if (msg.y_card_times !== undefined) {
      resolved.y_card_times = msg.y_card_times;
    }
    else {
      resolved.y_card_times = []
    }

    if (msg.b_card_times !== undefined) {
      resolved.b_card_times = msg.b_card_times;
    }
    else {
      resolved.b_card_times = []
    }

    return resolved;
    }
};

module.exports = SSL_Refbox;
