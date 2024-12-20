// Generated by gencpp from file grsim_ros_bridge_msgs/SSL.msg
// DO NOT EDIT!


#ifndef GRSIM_ROS_BRIDGE_MSGS_MESSAGE_SSL_H
#define GRSIM_ROS_BRIDGE_MSGS_MESSAGE_SSL_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <geometry_msgs/Twist.h>

namespace grsim_ros_bridge_msgs
{
template <class ContainerAllocator>
struct SSL_
{
  typedef SSL_<ContainerAllocator> Type;

  SSL_()
    : cmd_vel()
    , kicker(0.0)
    , dribbler(false)  {
    }
  SSL_(const ContainerAllocator& _alloc)
    : cmd_vel(_alloc)
    , kicker(0.0)
    , dribbler(false)  {
  (void)_alloc;
    }



   typedef  ::geometry_msgs::Twist_<ContainerAllocator>  _cmd_vel_type;
  _cmd_vel_type cmd_vel;

   typedef float _kicker_type;
  _kicker_type kicker;

   typedef uint8_t _dribbler_type;
  _dribbler_type dribbler;





  typedef boost::shared_ptr< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> const> ConstPtr;

}; // struct SSL_

typedef ::grsim_ros_bridge_msgs::SSL_<std::allocator<void> > SSL;

typedef boost::shared_ptr< ::grsim_ros_bridge_msgs::SSL > SSLPtr;
typedef boost::shared_ptr< ::grsim_ros_bridge_msgs::SSL const> SSLConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator1> & lhs, const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator2> & rhs)
{
  return lhs.cmd_vel == rhs.cmd_vel &&
    lhs.kicker == rhs.kicker &&
    lhs.dribbler == rhs.dribbler;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator1> & lhs, const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace grsim_ros_bridge_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
{
  static const char* value()
  {
    return "c12e8c1c2996fa9eaef36764e38486c8";
  }

  static const char* value(const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xc12e8c1c2996fa9eULL;
  static const uint64_t static_value2 = 0xaef36764e38486c8ULL;
};

template<class ContainerAllocator>
struct DataType< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
{
  static const char* value()
  {
    return "grsim_ros_bridge_msgs/SSL";
  }

  static const char* value(const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
{
  static const char* value()
  {
    return "geometry_msgs/Twist cmd_vel\n"
"float32 kicker\n"
"bool dribbler\n"
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

  static const char* value(const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.cmd_vel);
      stream.next(m.kicker);
      stream.next(m.dribbler);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct SSL_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::grsim_ros_bridge_msgs::SSL_<ContainerAllocator>& v)
  {
    s << indent << "cmd_vel: ";
    s << std::endl;
    Printer< ::geometry_msgs::Twist_<ContainerAllocator> >::stream(s, indent + "  ", v.cmd_vel);
    s << indent << "kicker: ";
    Printer<float>::stream(s, indent + "  ", v.kicker);
    s << indent << "dribbler: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.dribbler);
  }
};

} // namespace message_operations
} // namespace ros

#endif // GRSIM_ROS_BRIDGE_MSGS_MESSAGE_SSL_H
