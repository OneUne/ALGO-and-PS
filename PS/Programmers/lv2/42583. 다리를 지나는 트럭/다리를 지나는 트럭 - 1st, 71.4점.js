// 1초에 한 대씩 진입 가능함이 전제
// 46분. 71.4. 반례 [5, 5, [2,2,2,2,1,1,1,1,1,1]] should be 19 not 18
// 1초에 2 진입
// 2초에 2 진입
// 3초에 진입 불가 [2, 2]
// 6초에 세번째 2 진입 [2,2]
// 7초에 네번째 2 진입 [2,2]
// 8초에 1 진입 [2, 2, 1]
// 11초에 1 진입 [2, 1, 1]
// 12초에 1 진입 [1, 1, 1] --> 이 코드로 하면 여기서 2가 안빠짐. if, else라서 들어오는 동시에 나가는 경우가 관리가 안 되어 있고
// 시간 관리가 뭔가 잘못되고 있다.
// 13초에 1 진입 [1, 1, 1, 1]
// 14초에 1 진입 [1, 1, 1, 1, 1]

function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  var truck_time = truck_weights.map((w, i) => ({ w, time: bridge_length }));
  var [cur_w, cur_l] = [0, 0];
  var on_bridge = [];

  while (truck_time.length > 0) {
    var cur_t = truck_time[0];
    if (cur_w + cur_t.w <= weight && cur_l + 1 <= bridge_length) {
      cur_w += cur_t.w;
      cur_l++;
      cur_t.time += answer;
      on_bridge.push(truck_time.shift());
      answer++;
    } else {
      var firstTruck = on_bridge.shift();
      answer = firstTruck.time;
      cur_w -= firstTruck.w;
      cur_l--;
    }
  }

  return on_bridge[on_bridge.length - 1].time;
}
