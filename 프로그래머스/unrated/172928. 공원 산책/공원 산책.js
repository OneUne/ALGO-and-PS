function solution(park, routes) {
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
    // 동서남북의 경우 이런식으로 쓰는게 가독성 ㅇㅇ
    let [x, y] = [0, 0];
    for (let i = 0; i < park.length; i++) {
      if (park[i].includes('S')) {
        [x, y] = [i, park[i].indexOf('S')];
        // park는 최대 50x50이므로 이정도는 괜찮은듯
        break;
      }
    }

    routes.forEach((route) => {
      const [r, n] = route.split(' ');
      let [nx, ny] = [x, y];
      let cnt = 0;
      while (cnt < n) {
        [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
        if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
        cnt++;
      }
      if (cnt == n) [x, y] = [nx, ny];
    });
    return [x, y];
  }
