// Generated by gencpp from file grsim_ros_bridge/grsim_bridge_msg.msg
// DO NOT EDIT!


#ifndef GRSIM_ROS_BRIDGE_MESSAGE_GRSIM_BRIDGE_MSG_H
#define GRSIM_ROS_BRIDGE_MESSAGE_GRSIM_BRIDGE_MSG_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <geometry_msgs/Twist.h>

namespace grsim_ros_bridge
{
template <class ContainerAllocator>
struct grsim_bridge_msg_
{
  typedef grsim_bridge_msg_<ContainerAllocator> Type;

  grsim_bridge_msg_()
    : cmd_vel()
    , kicker(false)
    , dribbler(false)  {
    }
  grsim_bridge_msg_(const ContainerAllocator& _alloc)
    : cmd_vel(_alloc)
    , kicker(false)
    , dribbler(false)  {
  (void)_alloc;
    }



   typedef  ::geometry_msgs::Twist_<ContainerAllocator>  _cmd_vel_type;
  _cmd_vel_type cmd_vel;

   typedef uint8_t _kicker_type;
  _kicker_type kicker;

   typedef uint8_t _dribbler_type;
  _dribbler_type dribbler;





  typedef boost::shared_ptr< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> const> ConstPtr;

}; // struct grsim_bridge_msg_

typedef ::grsim_ros_bridge::grsim_bridge_msg_<std::allocator<void> > grsim_bridge_msg;

typedef boost::shared_ptr< ::grsim_ros_bridge::grsim_bridge_msg > grsim_bridge_msgPtr;
typedef boost::shared_ptr< ::grsim_ros_bridge::grsim_bridge_msg const> grsim_bridge_msgConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator1> & lhs, const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator2> & rhs)
{
  return lhs.cmd_vel == rhs.cmd_vel &&
    lhs.kicker == rhs.kicker &&
    lhs.dribbler == rhs.dribbler;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator1> & lhs, const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace grsim_ros_bridge

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
{
  static const char* value()
  {
    return "3ef1da6077e5c11cd24146e5248c94ba";
  }

  static const char* value(const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x3ef1da6077e5c11cULL;
  static const uint64_t static_value2 = 0xd24146e5248c94baULL;
};

template<class ContainerAllocator>
struct DataType< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
{
  static const char* value()
  {
    return "grsim_ros_bridge/grsim_bridge_msg";
  }

  static const char* value(const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
{
  static const char* value()
  {
    return "geometry_msgs/Twist cmd_vel\n"
"bool kicker\n"
"bool dribbler\n"
"\n"
"================================================================================\n"
"MSG: geometry_msgs/Twist\n"
"# This expresses velocity in free space broken into its linear and angular parts.\n"
"Vector3  linear\n"
"Vector3  angular\n"
"\n"
"================================================================================\n"
"MSG: geometry_msgs/Vector3\n"
"# This represents a vector in free space. \n"
"# It is only meant to represent a direction. Therefore, it does not\n"
"# make sense to apply a translation to it (e.g., when applying a \n"
"# generic rigid transformation to a Vector3, tf2 will only apply the\n"
"# rotation). If you want your data to be translatable too, use the\n"
"# geometry_msgs/Point message instead.\n"
"\n"
"float64 x\n"
"float64 y\n"
"float64 z\n"
;
  }

  static const char* value(const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.cmd_vel);
      stream.next(m.kicker);
      stream.next(m.dribbler);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct grsim_bridge_msg_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::grsim_ros_bridge::grsim_bridge_msg_<ContainerAllocator>& v)
  {
    s << indent << "cmd_vel: ";
    s << std::endl;
    Printer< ::geometry_msgs::Twist_<ContainerAllocator> >::stream(s, indent + "  ", v.cmd_vel);
    s << indent << "kicker: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.kicker);
    s << indent << "dribbler: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.dribbler);
  }
};

} // namespace message_operations
} // namespace ros

#endif // GRSIM_ROS_BRIDGE_MESSAGE_GRSIM_BRIDGE_MSG_H
