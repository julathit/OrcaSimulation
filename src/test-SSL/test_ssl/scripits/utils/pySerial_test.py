import time

def HoloDrive_dict_extract(kwargs):
    print(kwargs)
    
def sendToLow(robotIndex: int, x: float, y: float, z: float, kickPower: bool):
    orca_dict = {0: [0, 0, 0, 0],
                 1: [0, 0, 0, 0],
                 2: [0, 0, 0, 0],
                 3: [0, 0, 0, 0],
                 4: [0, 0, 0, 0],
                 5: [0, 0, 0, 0]}
    for key, value in orca_dict.items():
        currentTime = time.time()*10**9
        delay = 2
        if kickPower == True:
            orca_dict[robotIndex] = [x,y,z,1]
        elif kickPower == False and orca_dict[robotIndex][3] == False:
            orca_dict[robotIndex] = [x,y,z,0]
            
        print(currentTime,currentTime % delay,'time')
        if int(currentTime % delay) == 0:
            V_x = value[0]
            V_y = value[1]
            V_ang = value[2]
            Kick_1 = value[3]
            print(key,V_x,V_y,V_ang,Kick_1)
            HoloDrive_dict_extract(orca_dict)
            orca_dict[robotIndex] = [x,y,z,0]
