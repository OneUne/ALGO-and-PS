fees,records,result = [180, 5000, 10, 600],["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"],[14600, 34400, 5000]
# fees,records,result = [120, 0, 60, 591],["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"],[0, 591]
# fees,records,result = [1, 461, 1, 10],["00:00 1234 IN"],[14841]

def solution(fees, records):
    feebycar = {}
    answer = []
    
    for i in records:
        time, carnum, io = i.split(' ')
        time=time.split(':')
        time=int(time[0])*60+int(time[1])
        
        if carnum in feebycar:
            feebycar[carnum].append(time)
        else:
            feebycar[carnum] = [time]
    feebycar = sorted(feebycar.items())
    
    for i in feebycar:
        tmptime,tmpfee = 0,0
        if len(i[1]) %2 != 0:
            i[1].append(23*60+59)
        for j in range(1,len(i[1]),2):
            tmptime += i[1][j]-i[1][j-1]
        if tmptime <= fees[0]:
            tmpfee+=fees[1]
        else:
            tmpfee+=fees[1]
            tmptime -= fees[0]
            if tmptime % fees[2] == 0:
                tmptime = tmptime//fees[2]
            else:
                tmptime = tmptime//fees[2]+1
            tmpfee+=tmptime*fees[3]
        answer.append(tmpfee)
        
    return answer

print(solution(fees,records))