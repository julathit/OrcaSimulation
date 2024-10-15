import pygame
import sys
from skills import sKillNode

pygame.init()

# Set up the display
print("wtf")
width, height = 110, 5
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Controller Input")

# Set up the clock
clock = pygame.time.Clock()

# Initialize the joystick
pygame.joystick.init()

# Variables to track if a button is currently pressed
buttons_pressed = set()

moveSpeed = 2
rotationalSpeed = 5

def executehandle(pub, robotIndex,joystick):
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.JOYBUTTONDOWN:
            # Check if the button is not already being tracked
            if event.button not in buttons_pressed:
                buttons_pressed.add(event.button)
                print(f"Button pressed: {event.button}")
                if event.button == 0:  # Example: If button 0 is pressed
                    sKillNode.sendCommand(pub, robotIndex, moveSpeed, 0, 0, False)
        elif event.type == pygame.JOYBUTTONUP:
            # Check if the released button was being tracked
            if event.button in buttons_pressed:
                buttons_pressed.remove(event.button)
                print(f"Button released: {event.button}")
                if event.button == 0:  # Example: If button 0 is released
                    sKillNode.sendCommand(pub, robotIndex, 0, 0, 0, False)

    # Get joystick axes values
    axis_x = joystick.get_axis(0)
    axis_y = joystick.get_axis(1)
    # Check joystick axes for movement
    if axis_y < -0.5:
        sKillNode.sendCommand(pub, robotIndex, moveSpeed, 0, 0, False)
    elif axis_y > 0.5:
        sKillNode.sendCommand(pub, robotIndex, -moveSpeed, 0, 0, False)
    if axis_x < -0.5:
        sKillNode.sendCommand(pub, robotIndex, 0, moveSpeed, 0, False)
    elif axis_x > 0.5:
        sKillNode.sendCommand(pub, robotIndex, 0, -moveSpeed, 0, False)

    # Get joystick hat values (if applicable)
    hat = joystick.get_hat(0)
    # Check joystick hat for rotation
    if hat[0] == 1:
        sKillNode.sendCommand(pub, robotIndex, 0, 0, rotationalSpeed, False)
    elif hat[0] == -1:
        sKillNode.sendCommand(pub, robotIndex, 0, 0, -rotationalSpeed, False)

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)

def execute(pub, robotIndex):
    # Get the first joystick
    joystick_count = pygame.joystick.get_count()
    if joystick_count > 0:
        joystick = pygame.joystick.Joystick(0)
        joystick.init()
        executehandle(pub, robotIndex,joystick)
    else:
        print("No joystick detected")
        pygame.quit()
        sys.exit()
