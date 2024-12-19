import pygame
import sys

from skills import sKillNode
from utils import position


pygame.init()

# Set up the display
width, height = 110, 5
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Keyboard Input")

# Initialize joystick
pygame.joystick.init()

# Set up the clock
clock = pygame.time.Clock()

# Variables to track if a key is currently pressed
keys_pressed = set()

moveSpeed = 2
rotationalSpeed = 5

# Check if joystick is connected
if pygame.joystick.get_count() == 0:
    print("No joystick connected.")
    pygame.quit()
    sys.exit()

# Get the first joystick
joystick = pygame.joystick.Joystick(0)
joystick.init()

running = True

def execute(robotIndex):
    print(position.robot[robotIndex].x,position.robot[robotIndex].y)
        # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.KEYDOWN:
            # Check if the key is not already being tracked
            if event.key == pygame.K_ESCAPE:
                pygame.quit()
                sys.exit()
            elif event.key not in keys_pressed:
                keys_pressed.add(event.key)
            if event.key == pygame.K_SPACE:
                sKillNode.sendCommand(robotIndex,0,0,0,True)
        elif event.type == pygame.KEYUP:
            # Check if the released key was being tracked
            if event.key in keys_pressed:
                keys_pressed.remove(event.key)
                sKillNode.sendCommand(robotIndex,0,0,0,False)
    
    # Joystick input handling
    x_axis_value = -joystick.get_axis(0) * 2
    y_axis_value = -joystick.get_axis(1) * 2
    r_axis_value = -joystick.get_axis(3) * 5
    
    if abs(x_axis_value) > 0.5 or abs(y_axis_value) > 0.5 or abs(r_axis_value) > 0.5:
        keys_pressed.add("JOYSTICK")
    else:
        keys_pressed.discard("JOYSTICK")
    # Check if the 'W' key is currently pressed
    
    moveSpeed = 2
    rotationalSpeed = 5
    if pygame.K_w in keys_pressed:
        sKillNode.sendCommand(robotIndex,moveSpeed,0,0,False)
    if pygame.K_a in keys_pressed:
        sKillNode.sendCommand(robotIndex,0,moveSpeed,0,False)  
    if pygame.K_s in keys_pressed:
        sKillNode.sendCommand(robotIndex,-moveSpeed,0,0,False)  
    if pygame.K_d in keys_pressed:
        sKillNode.sendCommand(robotIndex,0,-moveSpeed,0,False)
    if pygame.K_k in keys_pressed:  
        sKillNode.sendCommand(robotIndex,0,0,rotationalSpeed,False)
    if pygame.K_l in keys_pressed: 
        sKillNode.sendCommand(robotIndex,0,0,-rotationalSpeed,False)
    if len(keys_pressed) == 0:
        sKillNode.sendCommand(robotIndex,0,0,0,False)
    if "JOYSTICK" in keys_pressed:
        sKillNode.sendCommand( robotIndex, y_axis_value, x_axis_value, r_axis_value, False)
        

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)