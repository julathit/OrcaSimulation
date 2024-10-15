import math
# Blue Area
# [-2000, 1000] -------------------- [-1000, 1000]
# |                                     |
# |                                     |
# |                                     |
# |                                     |
# [-2000, -1000] ------------------- [-1000, -1000]


def InArea(positionX, positionY):
    # If the position is inside the area, return True
    # If the position is outside the area, return False
    if positionX > -2000 and positionX < -1000:
        if positionY > -1000 and positionY < 1000:
            return True
        else:
            return False
    else:
        return False


def InDefensePosition(positionX, positionY, positionField):
    if (positionField == "right"):
        if positionX > -2000 and positionX < -1000:
            if positionY > -2000 and positionY < -1000:
                return True
            else:
                return False
        else:
            return False
    else:
        if positionX > -2000 and positionX < -1000:
            if positionY > 1000 and positionY < 2000:
                return True
            else:
                return False
        else:
            return False
# Field size
# [-2000, 2000]----------------[0, 2000]--------------------[2000, 2000]
# |                               |                              |
# |                               |                              |
# |                               |                              |
# |                               |                              |
# |-----------------------------[0,0]----------------------------|
# |                               |                              |
# |                               |                              |
# |                               |                              |
# |                               |                              |
# [-2000, -2000]------------------[0,-2000]------------------[2000, -2000]


def defensePosition(positionX, positionY):
    if positionX > -2000 and positionX < 0:
        if positionY > -2000 and positionY < 2000:
            return False
        else:
            return True
    else:
        return True


def angleToGoal(x, y):
    xGoal = -2000
    yGoal = 0
    return math.atan2(yGoal - y, xGoal - x)


def angleToCenter(x, y):
    xGoal = 0
    yGoal = 0
    return math.atan2(yGoal - y, xGoal - x)


def angleToDefense(x, y, positionInField):
    if (positionInField == "right"):
        xGoal = -1500
        yGoal = -1500
        return math.atan2(yGoal - y, xGoal - x)
    else:
        xGoal = -1500
        yGoal = 1500
        return math.atan2(yGoal - y, xGoal - x)
