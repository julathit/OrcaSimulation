# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from grsim_ros_bridge_msgs/SSL.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import geometry_msgs.msg

class SSL(genpy.Message):
  _md5sum = "3ef1da6077e5c11cd24146e5248c94ba"
  _type = "grsim_ros_bridge_msgs/SSL"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """geometry_msgs/Twist cmd_vel
bool kicker
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
float64 z"""
  __slots__ = ['cmd_vel','kicker','dribbler']
  _slot_types = ['geometry_msgs/Twist','bool','bool']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       cmd_vel,kicker,dribbler

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(SSL, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.cmd_vel is None:
        self.cmd_vel = geometry_msgs.msg.Twist()
      if self.kicker is None:
        self.kicker = False
      if self.dribbler is None:
        self.dribbler = False
    else:
      self.cmd_vel = geometry_msgs.msg.Twist()
      self.kicker = False
      self.dribbler = False

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_6d2B().pack(_x.cmd_vel.linear.x, _x.cmd_vel.linear.y, _x.cmd_vel.linear.z, _x.cmd_vel.angular.x, _x.cmd_vel.angular.y, _x.cmd_vel.angular.z, _x.kicker, _x.dribbler))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.cmd_vel is None:
        self.cmd_vel = geometry_msgs.msg.Twist()
      end = 0
      _x = self
      start = end
      end += 50
      (_x.cmd_vel.linear.x, _x.cmd_vel.linear.y, _x.cmd_vel.linear.z, _x.cmd_vel.angular.x, _x.cmd_vel.angular.y, _x.cmd_vel.angular.z, _x.kicker, _x.dribbler,) = _get_struct_6d2B().unpack(str[start:end])
      self.kicker = bool(self.kicker)
      self.dribbler = bool(self.dribbler)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_6d2B().pack(_x.cmd_vel.linear.x, _x.cmd_vel.linear.y, _x.cmd_vel.linear.z, _x.cmd_vel.angular.x, _x.cmd_vel.angular.y, _x.cmd_vel.angular.z, _x.kicker, _x.dribbler))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    if python3:
      codecs.lookup_error("rosmsg").msg_type = self._type
    try:
      if self.cmd_vel is None:
        self.cmd_vel = geometry_msgs.msg.Twist()
      end = 0
      _x = self
      start = end
      end += 50
      (_x.cmd_vel.linear.x, _x.cmd_vel.linear.y, _x.cmd_vel.linear.z, _x.cmd_vel.angular.x, _x.cmd_vel.angular.y, _x.cmd_vel.angular.z, _x.kicker, _x.dribbler,) = _get_struct_6d2B().unpack(str[start:end])
      self.kicker = bool(self.kicker)
      self.dribbler = bool(self.dribbler)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_6d2B = None
def _get_struct_6d2B():
    global _struct_6d2B
    if _struct_6d2B is None:
        _struct_6d2B = struct.Struct("<6d2B")
    return _struct_6d2B
