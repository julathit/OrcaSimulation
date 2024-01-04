// Auto-generated. Do not edit!

// (in-package krssg_ssl_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let SSL_DetectionBall = require('./SSL_DetectionBall.js');
let SSL_DetectionRobot = require('./SSL_DetectionRobot.js');

//-----------------------------------------------------------

class SSL_DetectionFrame {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.frame_number = null;
      this.t_capture = null;
      this.t_sent = null;
      this.camera_id = null;
      this.balls = null;
      this.robots_yellow = null;
      this.robots_blue = null;
    }
    else {
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
      if (initObj.hasOwnProperty('camera_id')) {
        this.camera_id = initObj.camera_id
      }
      else {
        this.camera_id = 0;
      }
      if (initObj.hasOwnProperty('balls')) {
        this.balls = initObj.balls
      }
      else {
        this.balls = [];
      }
      if (initObj.hasOwnProperty('robots_yellow')) {
        this.robots_yellow = initObj.robots_yellow
      }
      else {
        this.robots_yellow = [];
      }
      if (initObj.hasOwnProperty('robots_blue')) {
        this.robots_blue = initObj.robots_blue
      }
      else {
        this.robots_blue = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type SSL_DetectionFrame
    // Serialize message field [frame_number]
    bufferOffset = _serializer.uint32(obj.frame_number, buffer, bufferOffset);
    // Serialize message field [t_capture]
    bufferOffset = _serializer.float64(obj.t_capture, buffer, bufferOffset);
    // Serialize message field [t_sent]
    bufferOffset = _serializer.float64(obj.t_sent, buffer, bufferOffset);
    // Serialize message field [camera_id]
    bufferOffset = _serializer.uint32(obj.camera_id, buffer, bufferOffset);
    // Serialize message field [balls]
    // Serialize the length for message field [balls]
    bufferOffset = _serializer.uint32(obj.balls.length, buffer, bufferOffset);
    obj.balls.forEach((val) => {
      bufferOffset = SSL_DetectionBall.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [robots_yellow]
    // Serialize the length for message field [robots_yellow]
    bufferOffset = _serializer.uint32(obj.robots_yellow.length, buffer, bufferOffset);
    obj.robots_yellow.forEach((val) => {
      bufferOffset = SSL_DetectionRobot.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [robots_blue]
    // Serialize the length for message field [robots_blue]
    bufferOffset = _serializer.uint32(obj.robots_blue.length, buffer, bufferOffset);
    obj.robots_blue.forEach((val) => {
      bufferOffset = SSL_DetectionRobot.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type SSL_DetectionFrame
    let len;
    let data = new SSL_DetectionFrame(null);
    // Deserialize message field [frame_number]
    data.frame_number = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [t_capture]
    data.t_capture = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [t_sent]
    data.t_sent = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [camera_id]
    data.camera_id = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [balls]
    // Deserialize array length for message field [balls]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.balls = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.balls[i] = SSL_DetectionBall.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [robots_yellow]
    // Deserialize array length for message field [robots_yellow]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.robots_yellow = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.robots_yellow[i] = SSL_DetectionRobot.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [robots_blue]
    // Deserialize array length for message field [robots_blue]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.robots_blue = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.robots_blue[i] = SSL_DetectionRobot.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 52 * object.balls.length;
    length += 60 * object.robots_yellow.length;
    length += 60 * object.robots_blue.length;
    return length + 36;
  }

  static datatype() {
    // Returns string type for a message object
    return 'krssg_ssl_msgs/SSL_DetectionFrame';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7c644edf1c1b3db92581949cc15a0ca0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # SSL_DetectionFrame.msg
    
    
    uint32             frame_number 
    float64            t_capture     
    float64            t_sent        
    uint32             camera_id     
    SSL_DetectionBall[]  balls         
    SSL_DetectionRobot[] robots_yellow 
    SSL_DetectionRobot[] robots_blue   
    
    ================================================================================
    MSG: krssg_ssl_msgs/SSL_DetectionBall
    float64  confidence 
    uint32 area      
    float64  x         
    float64  y          
    float64  z          
    float64  pixel_x    
    float64  pixel_y    
    
    ================================================================================
    MSG: krssg_ssl_msgs/SSL_DetectionRobot
    float64  confidence 
    uint32   robot_id      
    float64  x         
    float64  y           
    float64  orientation        
    float64  pixel_x    
    float64  pixel_y  
    float64  height   
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new SSL_DetectionFrame(null);
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

    if (msg.camera_id !== undefined) {
      resolved.camera_id = msg.camera_id;
    }
    else {
      resolved.camera_id = 0
    }

    if (msg.balls !== undefined) {
      resolved.balls = new Array(msg.balls.length);
      for (let i = 0; i < resolved.balls.length; ++i) {
        resolved.balls[i] = SSL_DetectionBall.Resolve(msg.balls[i]);
      }
    }
    else {
      resolved.balls = []
    }

    if (msg.robots_yellow !== undefined) {
      resolved.robots_yellow = new Array(msg.robots_yellow.length);
      for (let i = 0; i < resolved.robots_yellow.length; ++i) {
        resolved.robots_yellow[i] = SSL_DetectionRobot.Resolve(msg.robots_yellow[i]);
      }
    }
    else {
      resolved.robots_yellow = []
    }

    if (msg.robots_blue !== undefined) {
      resolved.robots_blue = new Array(msg.robots_blue.length);
      for (let i = 0; i < resolved.robots_blue.length; ++i) {
        resolved.robots_blue[i] = SSL_DetectionRobot.Resolve(msg.robots_blue[i]);
      }
    }
    else {
      resolved.robots_blue = []
    }

    return resolved;
    }
};

module.exports = SSL_DetectionFrame;
