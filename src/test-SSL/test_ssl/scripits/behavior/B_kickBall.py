import math
from utils import position
from skills import sMoveToBall

# Basic classes for behavior tree nodes
class BehaviorNode:
    def execute(self):
        raise NotImplementedError()

class Composite(BehaviorNode):
    def __init__(self):
        self.children = []

    def add_child(self, child):
        self.children.append(child)

class Sequence(Composite):
    def execute(self):
        for child in self.children:
            if not child.execute():
                return False
        return True

class LeafNode(BehaviorNode):
    def execute(self):
        raise NotImplementedError()

class Player:
    def __init__(self, name, position):
        self.name = name
        self.position = position  # [x, y]

class MoveToBall(LeafNode):
    def __init__(self, robot_id, ball):
        self.robot_id = robot_id
        self.ball = ball

    def execute(self):
        sMoveToBall(self.robot_id)
        return True

class IsCloseToBall(LeafNode):
    def __init__(self, robot_id, threshold=1.0):
        self.robot_id = robot_id
        self.threshold = threshold  # Distance threshold for "close enough"

    def execute(self):
        distance = position.distanceToBall(self.robot_id)
        if distance <= self.threshold:
            print(f"Robot is close enough to the ball. Distance: {distance}")
            return True
        print(f"Robot is not close enough. Distance: {distance}")
        return False

class KickBall(LeafNode):
    def __init__(self, robot, ball, target_player):
        self.robot = robot
        self.ball = ball
        self.target_player = target_player

    def execute(self):
        print("kick")
        return True

class StopMoving(LeafNode):
    def execute(self):
        print("Robot has reached the ball. Stopping movement.")
        return True

ball = position.ball



root = Sequence()

root.add_child(MoveToBall(1, ball))     # Move towards the ball
root.add_child(IsCloseToBall(1, ball))  # Check if close to the ball
root.add_child(KickBall(1, ball))  # Kick the ball to another player
root.add_child(StopMoving())

def execute():
    root.execute()