/*
@Taemin Jang
"#....#"이라면 [...v]는 ['#', '.', '.', '.', '.', '#'] 배열로 변환
[0,1,2,3] 이런 배열도 Math.min(left)하면 NaN. ...left 해야 함
*/

function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
