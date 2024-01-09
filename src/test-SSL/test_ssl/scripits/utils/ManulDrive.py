import pygame
import sys

from skills import sKillNode

pygame.init()

# Set up the display
width, height = 50, 7
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Keyboard Input")

# Set up the clock
clock = pygame.time.Clock()

# Variables to track if a key is currently pressed
keys_pressed = set()

moveSpeed = 50
rotationalSpeed = 5

def execute(pub,robotIndex):
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
                print(f"Key pressed: {pygame.key.name(event.key)}")
            if event.key == pygame.K_SPACE:
                print('spaced')
                sKillNode.sendCommand(pub,robotIndex,0,0,0,True)
        elif event.type == pygame.KEYUP:
            # Check if the released key was being tracked
            if event.key in keys_pressed:
                keys_pressed.remove(event.key)
                print(f"Key released: {pygame.key.name(event.key)}",'stop')
                sKillNode.sendCommand(pub,robotIndex,0,0,0,False)

    # Check if the 'W' key is currently pressed
    if pygame.K_w in keys_pressed:
        print("W", end="", flush = True)
        sKillNode.sendCommand(pub,robotIndex,moveSpeed,0,0,False)
    if pygame.K_a in keys_pressed:
        print("A", end="", flush=True)
        sKillNode.sendCommand(pub,robotIndex,0,moveSpeed,0,False)  
    if pygame.K_s in keys_pressed:
        print("S", end="" , flush=True)
        sKillNode.sendCommand(pub,robotIndex,-moveSpeed,0,0,False)  
    if pygame.K_d in keys_pressed:
        print("D", end="", flush=True)    
        sKillNode.sendCommand(pub,robotIndex,0,-moveSpeed,0,False)
    if pygame.K_k in keys_pressed:
        print("k", end="", flush=True)    
        sKillNode.sendCommand(pub,robotIndex,0,0,rotationalSpeed,False)
    if pygame.K_l in keys_pressed:
        print("l", end="", flush=True)    
        sKillNode.sendCommand(pub,robotIndex,0,0,-rotationalSpeed,False)

    # Update the display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)
