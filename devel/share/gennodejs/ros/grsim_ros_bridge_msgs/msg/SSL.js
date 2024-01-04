// Auto-generated. Do not edit!

// (in-package grsim_ros_bridge_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class SSL {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.cmd_vel = null;
      this.kicker = null;
      this.dribbler = null;
    }
    else {
      if (initObj.hasOwnProperty('cmd_vel')) {
        this.cmd_vel = initObj.cmd_vel
      }
      else {
        this.cmd_vel = new geometry_msgs.msg.Twist();
      }
      if (initObj.hasOwnProperty('kicker')) {
        this.kicker = initObj.kicker
      }
      else {
        this.kicker = 0.0;
      }
      if (initObj.hasOwnProperty('dribbler')) {
        this.dribbler = initObj.dribbler
      }
      else {
        this.dribbler = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type SSL
    // Serialize message field [cmd_vel]
    bufferOffset = geometry_msgs.msg.Twist.serialize(obj.cmd_vel, buffer, bufferOffset);
    // Serialize message field [kicker]
    bufferOffset = _serializer.float32(obj.kicker, buffer, bufferOffset);
    // Serialize message field [dribbler]
    bufferOffset = _serializer.bool(obj.dribbler, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type SSL
    let len;
    let data = new SSL(null);
    // Deserialize message field [cmd_vel]
    data.cmd_vel = geometry_msgs.msg.Twist.deserialize(buffer, bufferOffset);
    // Deserialize message field [kicker]
    data.kicker = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [dribbler]
    data.dribbler = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 53;
  }

  static datatype() {
    // Returns string type for a message object
    return 'grsim_ros_bridge_msgs/SSL';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c12e8c1c2996fa9eaef36764e38486c8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    geometry_msgs/Twist cmd_vel
    float32 kicker
    bool dribbler
    ================================================================================
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new SSL(null);
    if (msg.cmd_vel !== undefined) {
      resolved.cmd_vel = geometry_msgs.msg.Twist.Resolve(msg.cmd_vel)
    }
    else {
      resolved.cmd_vel = new geometry_msgs.msg.Twist()
    }

    if (msg.kicker !== undefined) {
      resolved.kicker = msg.kicker;
    }
    else {
      resolved.kicker = 0.0
    }

    if (msg.dribbler !== undefined) {
      resolved.dribbler = msg.dribbler;
    }
    else {
      resolved.dribbler = false
    }

    return resolved;
    }
};

module.exports = SSL;
