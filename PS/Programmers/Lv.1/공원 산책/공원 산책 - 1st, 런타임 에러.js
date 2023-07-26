/*
1. 목적지에 장애물이 없더라도, 가는 길에 장애물이 있다면 갈 수 없음
2. tmp = cp 와 같은 얕은 복사는 tmp[0] += 2하면 cp[0] 도 +=2 되는 결과 초래 
3. switch 내 for에서 break는 case break는 아님
4. 시작 지점도 정해져 있음
5. To avoid runtime errors, it's essential to declare variables using the let, const, or var keywords to ensure proper scoping.
- When you don't explicitly declare variables using let, const, or var keywords, JavaScript will automatically create a global variable if the variable name is not found in the current function's scope. This behavior is specific to the "sloppy mode" of JavaScript, which allows more lenient rules for variable declaration.
6. park가 3x3일 때 parkMap[-3][1]같은 건 cannot read properties of undefined 의 typeError 초래. 그래서 if(parkMap[y][x])는 조건으로 충분하지 않음.
*/

function solution(park, routes) {
  parkMap = [];
  let cp = [0, 0];
  for (i in park) {
    parkMap[i] = [];
    for (j in park[i]) {
      parkMap[i].push(park[i][j]);
      if (park[i][j] == "S") {
        cp = [parseInt(i), parseInt(j)];
      }
    }
  }

  function movePosition(route) {
    const [op, n] = route.split(" ");
    const [x, y] = [1, 0];
    tmp = [...cp];
    let flag = false;

    switch (op) {
      case "E":
        tmp[x] += parseInt(n);
        if (parkMap[tmp[y]][tmp[x]]) {
          for (i = cp[x] + 1; i < tmp[x]; i++) {
            if (parkMap[cp[y]][i] == "X") {
              break;
            }
          }
          cp = i == tmp[x] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "W":
        tmp[x] -= parseInt(n);
        if (parkMap[tmp[y]][tmp[x]]) {
          for (i = cp[x] - 1; i > tmp[x]; i--) {
            if (parkMap[cp[y]][i] == "X") {
              break;
            }
          }
          cp = i == tmp[x] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "S":
        tmp[y] += parseInt(n);
        if (parkMap[tmp[y]][tmp[x]]) {
          for (i = cp[y] + 1; i < tmp[y]; i++) {
            if (parkMap[i][cp[x]] == "X") {
              break;
            }
          }
          cp = i == tmp[y] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "N":
        tmp[y] -= parseInt(n);
        if (parkMap[tmp[y]][tmp[x]]) {
          for (i = cp[y] - 1; i > tmp[y]; i--) {
            if (parkMap[i][cp[x]] == "X") {
              break;
            }
          }
          cp = i == tmp[y] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
    }
  }

  for (r of routes) {
    movePosition(r);
  }
  return cp;
}
