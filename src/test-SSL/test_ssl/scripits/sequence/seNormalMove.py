from skills import *


PointLogic = {f'Point{i}': False for i in range(2)}
PointLogic['Point0'] = True


def execute(robotIndex):
    point = [(-2500,-3000),(0,-3000)]
    print(PointLogic)
    if PointLogic['Point0'] == True:
        sMoveToPoint.execute(robotIndex,point[0])
        if sMoveToPoint.distanceToPoint(robotIndex,point[0]) < 144 :
            PointLogic['Point1'] = True
            PointLogic['Point0'] = False
    else:
        sMoveToPoint.execute(robotIndex,point[1])
        if sMoveToPoint.distanceToPoint(robotIndex,point[1]) < 144 :
            PointLogic['Point1'] = False
            PointLogic['Point0'] = True