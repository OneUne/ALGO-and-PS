function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    var truck_time = truck_weights.map((w, i) => ({ w, time: 0 }));
    var [cur_w, cur_l] = [0, 0];
    var on_bridge = [];

    while (on_bridge.length > 0 || truck_time.length > 0) {
        if (
            truck_time.length > 0 &&
            cur_w + truck_time[0].w <= weight &&
            cur_l + 1 <= bridge_length
        ) {
            cur_w += truck_time[0].w;
            cur_l++;
            on_bridge.push(truck_time.shift());
        }

        for (let i = 0; i < on_bridge.length; i++) {
            on_bridge[i].time++;
        }

        if (on_bridge.length > 0 && on_bridge[0].time >= bridge_length) {
            cur_w -= on_bridge[0].w;
            cur_l--;
            on_bridge.shift();
        }

        answer++;
    }

    return answer;
    }