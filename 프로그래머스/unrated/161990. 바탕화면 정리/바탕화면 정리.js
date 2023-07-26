function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [0, 0, 0, 0];
  for (let y = 0; y < wallpaper.length; y++) {
    for (let x = 0; x < wallpaper[0].length; x++) {
      if (wallpaper[y][x] === "#") {
        if (lux === 0 && luy === 0 && rdx === 0 && rdy === 0) {
          [lux, luy, rdx, rdy] = [x, y, x + 1, y + 1];
        } else {
          rdx = rdx < x + 1 ? x + 1 : rdx;
          rdy = y + 1;
          lux = lux > x ? x : lux;
        }
      }
    }
  }
  return [luy, lux, rdy, rdx];
}