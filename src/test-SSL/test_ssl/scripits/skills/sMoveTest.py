# skills/sMovetest.py

from . import sKillNode

def execute(pub,robotIndex):
    sKillNode.sendCommand(pub,robotIndex,0.1,0,1,True)
