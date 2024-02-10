from skills import *


PointLogic = {f'Point{i}': False for i in range(5)}
PointLogic['Point0'] = True
point = [(-3000,-3000),(-2500,-2500),(-1000,-3500),(-500,-3000),(-500,-3000)]

def MoveTo(pub,robotIndex,pindex,Topindex):
    global PointLogic
    if PointLogic[f'Point{pindex}'] == True:
        sMoveToPoint.execute(pub,robotIndex,point[pindex])
        print(sMoveToPoint.distanceToPoint(robotIndex,point[pindex]))
        if sMoveToPoint.distanceToPoint(robotIndex,point[pindex]) < 144 :
            PointLogic = {f'Point{i}': False for i in range(len(point))}
            print(PointLogic)
            PointLogic[f'Point{Topindex}'] = True

def StopMove(pub,robotIndex,pindex):
    if PointLogic[f'Point{pindex}'] == True:
        sStop.execute(pub,robotIndex)
        print(sMoveToPoint.distanceToPoint(robotIndex,point[pindex]))
        
def execute(pub,robotIndex):
    
    # if PointLogic['Point0'] == True:
    #     sMoveToPoint.execute(pub,robotIndex,point[0])
    #     if sMoveToPoint.distanceToPoint(robotIndex,point[0]) < 144 :
    #         PointLogic = {f'Point{i}': False for i in range(4)}
    #         PointLogic['Point1'] = True
            
    # elif PointLogic['Point1'] == True:
    #     sMoveToPoint.execute(pub,robotIndex,point[1])
    #     if sMoveToPoint.distanceToPoint(robotIndex,point[1]) < 144 :
    #         PointLogic = {f'Point{i}': False for i in range(4)}
    #         PointLogic['Point1'] = True
    print(PointLogic)
    MoveTo(pub,robotIndex,0,1)
    MoveTo(pub,robotIndex,1,2)
    MoveTo(pub,robotIndex,2,3)
    MoveTo(pub,robotIndex,3,4)
    StopMove(pub,robotIndex,4)
    # if PointLogic[f'Point{4}'] == True:
    #     sStop.execute(pub,robotIndex)
    #     print(sMoveToPoint.distanceToPoint(robotIndex,point[3]))
        