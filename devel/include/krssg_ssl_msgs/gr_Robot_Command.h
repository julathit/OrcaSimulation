// Generated by gencpp from file krssg_ssl_msgs/gr_Robot_Command.msg
// DO NOT EDIT!


#ifndef KRSSG_SSL_MSGS_MESSAGE_GR_ROBOT_COMMAND_H
#define KRSSG_SSL_MSGS_MESSAGE_GR_ROBOT_COMMAND_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace krssg_ssl_msgs
{
template <class ContainerAllocator>
struct gr_Robot_Command_
{
  typedef gr_Robot_Command_<ContainerAllocator> Type;

  gr_Robot_Command_()
    : id(0)
    , kickspeedx(0.0)
    , kickspeedz(0.0)
    , veltangent(0.0)
    , velnormal(0.0)
    , velangular(0.0)
    , spinner(false)
    , wheelsspeed(false)  {
    }
  gr_Robot_Command_(const ContainerAllocator& _alloc)
    : id(0)
    , kickspeedx(0.0)
    , kickspeedz(0.0)
    , veltangent(0.0)
    , velnormal(0.0)
    , velangular(0.0)
    , spinner(false)
    , wheelsspeed(false)  {
  (void)_alloc;
    }



   typedef uint32_t _id_type;
  _id_type id;

   typedef float _kickspeedx_type;
  _kickspeedx_type kickspeedx;

   typedef float _kickspeedz_type;
  _kickspeedz_type kickspeedz;

   typedef float _veltangent_type;
  _veltangent_type veltangent;

   typedef float _velnormal_type;
  _velnormal_type velnormal;

   typedef float _velangular_type;
  _velangular_type velangular;

   typedef uint8_t _spinner_type;
  _spinner_type spinner;

   typedef uint8_t _wheelsspeed_type;
  _wheelsspeed_type wheelsspeed;





  typedef boost::shared_ptr< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> const> ConstPtr;

}; // struct gr_Robot_Command_

typedef ::krssg_ssl_msgs::gr_Robot_Command_<std::allocator<void> > gr_Robot_Command;

typedef boost::shared_ptr< ::krssg_ssl_msgs::gr_Robot_Command > gr_Robot_CommandPtr;
typedef boost::shared_ptr< ::krssg_ssl_msgs::gr_Robot_Command const> gr_Robot_CommandConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator1> & lhs, const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator2> & rhs)
{
  return lhs.id == rhs.id &&
    lhs.kickspeedx == rhs.kickspeedx &&
    lhs.kickspeedz == rhs.kickspeedz &&
    lhs.veltangent == rhs.veltangent &&
    lhs.velnormal == rhs.velnormal &&
    lhs.velangular == rhs.velangular &&
    lhs.spinner == rhs.spinner &&
    lhs.wheelsspeed == rhs.wheelsspeed;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator1> & lhs, const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace krssg_ssl_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
{
  static const char* value()
  {
    return "b80457e93869f2f2bd035c51d34aed48";
  }

  static const char* value(const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xb80457e93869f2f2ULL;
  static const uint64_t static_value2 = 0xbd035c51d34aed48ULL;
};

template<class ContainerAllocator>
struct DataType< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
{
  static const char* value()
  {
    return "krssg_ssl_msgs/gr_Robot_Command";
  }

  static const char* value(const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uint32 id\n"
"float32 kickspeedx\n"
"float32 kickspeedz\n"
"float32 veltangent\n"
"float32 velnormal\n"
"float32 velangular\n"
"bool spinner\n"
"bool wheelsspeed\n"
;
  }

  static const char* value(const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.id);
      stream.next(m.kickspeedx);
      stream.next(m.kickspeedz);
      stream.next(m.veltangent);
      stream.next(m.velnormal);
      stream.next(m.velangular);
      stream.next(m.spinner);
      stream.next(m.wheelsspeed);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct gr_Robot_Command_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::krssg_ssl_msgs::gr_Robot_Command_<ContainerAllocator>& v)
  {
    s << indent << "id: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.id);
    s << indent << "kickspeedx: ";
    Printer<float>::stream(s, indent + "  ", v.kickspeedx);
    s << indent << "kickspeedz: ";
    Printer<float>::stream(s, indent + "  ", v.kickspeedz);
    s << indent << "veltangent: ";
    Printer<float>::stream(s, indent + "  ", v.veltangent);
    s << indent << "velnormal: ";
    Printer<float>::stream(s, indent + "  ", v.velnormal);
    s << indent << "velangular: ";
    Printer<float>::stream(s, indent + "  ", v.velangular);
    s << indent << "spinner: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.spinner);
    s << indent << "wheelsspeed: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.wheelsspeed);
  }
};

} // namespace message_operations
} // namespace ros

#endif // KRSSG_SSL_MSGS_MESSAGE_GR_ROBOT_COMMAND_H
