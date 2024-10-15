from . import sKillNode

def execute(pub,robotIndex):
    sKillNode.sendCommand(pub,robotIndex,0,0,0,True)