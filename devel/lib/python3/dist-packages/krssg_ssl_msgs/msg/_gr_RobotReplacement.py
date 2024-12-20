# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from krssg_ssl_msgs/gr_RobotReplacement.msg. Do not edit."""
import codecs
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct


class gr_RobotReplacement(genpy.Message):
  _md5sum = "f486282befeb95519efa1820701f0a04"
  _type = "krssg_ssl_msgs/gr_RobotReplacement"
  _has_header = False  # flag to mark the presence of a Header object
  _full_text = """float64 x 
float64 y 
float64 dir 
uint32 id 
bool yellowteam 
"""
  __slots__ = ['x','y','dir','id','yellowteam']
  _slot_types = ['float64','float64','float64','uint32','bool']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       x,y,dir,id,yellowteam

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(gr_RobotReplacement, self).__init__(*args, **kwds)
      # message fields cannot be None, assign default values for those that are
      if self.x is None:
        self.x = 0.
      if self.y is None:
        self.y = 0.
      if self.dir is None:
        self.dir = 0.
      if self.id is None:
        self.id = 0
      if self.yellowteam is None:
        self.yellowteam = False
    else:
      self.x = 0.
      self.y = 0.
      self.dir = 0.
      self.id = 0
      self.yellowteam = False

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
      buff.write(_get_struct_3dIB().pack(_x.x, _x.y, _x.dir, _x.id, _x.yellowteam))
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
      end = 0
      _x = self
      start = end
      end += 29
      (_x.x, _x.y, _x.dir, _x.id, _x.yellowteam,) = _get_struct_3dIB().unpack(str[start:end])
      self.yellowteam = bool(self.yellowteam)
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
      buff.write(_get_struct_3dIB().pack(_x.x, _x.y, _x.dir, _x.id, _x.yellowteam))
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
      end = 0
      _x = self
      start = end
      end += 29
      (_x.x, _x.y, _x.dir, _x.id, _x.yellowteam,) = _get_struct_3dIB().unpack(str[start:end])
      self.yellowteam = bool(self.yellowteam)
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e)  # most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_3dIB = None
def _get_struct_3dIB():
    global _struct_3dIB
    if _struct_3dIB is None:
        _struct_3dIB = struct.Struct("<3dIB")
    return _struct_3dIB
