function solution(park, routes) {
  let parkMap = [];
  let cp = [0, 0];

  for (i in park) {
    parkMap[i] = [];
    for (let j in park[i]) {
      parkMap[i].push(park[i][j]);
      if (park[i][j] === "S") {
        cp = [parseInt(i), parseInt(j)];
      }
    }
  }

  function movePosition(route) {
    const [op, n] = route.split(" ");
    const [x, y] = [1, 0];
    let tmp = [...cp];
    let i;

    switch (op) {
      case "E":
        tmp[x] += parseInt(n);
        if (tmp[x] < parkMap[0].length) {
          for (i = cp[x] + 1; i <= tmp[x]; i++) {
            if (parkMap[cp[y]][i] === "X") {
              break;
            }
          }
          cp = i - 1 === tmp[x] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "W":
        tmp[x] -= parseInt(n);
        if (tmp[x] >= 0) {
          for (i = cp[x] - 1; i >= tmp[x]; i--) {
            if (parkMap[cp[y]][i] === "X") {
              break;
            }
          }
          cp = i + 1 === tmp[x] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "S":
        tmp[y] += parseInt(n);
        if (tmp[y] < parkMap.length) {
          for (i = cp[y] + 1; i <= tmp[y]; i++) {
            if (parkMap[i][cp[x]] === "X") {
              break;
            }
          }
          cp = i - 1 === tmp[y] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
      case "N":
        tmp[y] -= parseInt(n);
        if (tmp[y] >= 0) {
          for (i = cp[y] - 1; i >= tmp[y]; i--) {
            if (parkMap[i][cp[x]] === "X") {
              break;
            }
          }
          cp = i + 1 === tmp[y] ? [...tmp] : cp;
          break;
        } else {
          break;
        }
    }
  }

  for (let r of routes) {
    movePosition(r);
  }
  return cp;
}
