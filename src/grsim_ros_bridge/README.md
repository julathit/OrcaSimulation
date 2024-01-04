# grsim_ros_bridge

## Installation

In your terminal, follow the steps below:

1. Open your terminal.
2. Copy and paste the command below into your terminal:

```
bash -c "$(curl -fsSL https://gist.githubusercontent.com/jardeldyonisio/6a65e56330b0c1be9a724b127ae0812d/raw/install.sh)"
```

The command will automatically download and install grsim_ros_bridge and its dependencies.

If you want check .sh file, [acess here.](https://gist.github.com/jardeldyonisio/6a65e56330b0c1be9a724b127ae0812d)

## Running

Before running grsim_ros_bridge, you need to source ROS Workspace in your terminal. First acess the urucup_ws:

```
cd ~/urucup_ws/
```

If you're using Bash, enter the following command:

```
source devel/setup.bash
```

If you're using Zsh, enter the following command instead:

```
source devel/setup.zsh
```

To open simulation:

```
roslaunch grsim_ros_bridge launch.launch
```

This will launch the simulation environment. You can now interact with the simulation using ROS messages.
