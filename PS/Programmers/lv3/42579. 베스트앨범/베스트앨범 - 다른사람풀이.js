// @ 정유성 , 탈퇴한 사용자 , - , - 외 30 명
// map, filter 잘 쓰는 법 sort도 잘 썼네,, 대체로 자료구조 쌈박하게 잘 쓴 거 같음

function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};

  /*
  genres = ["classic", "pop", "classic", "classic", "pop"]
  plays = [500, 600, 150, 800, 2500] 일 때 
  */
  return (
    genres
      .map((t, i) => ({ genre: t, count: plays[i], index: i }))
      /*
    	[
        { genre: 'pop', count: 2500, index: 4 },
        { genre: 'pop', count: 600, index: 1 },
        { genre: 'classic', count: 800, index: 3 },
        { genre: 'classic', count: 500, index: 0 },
        { genre: 'classic', count: 150, index: 2 }
      ]
    */
      .sort((a, b) => {
        if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
        if (a.count !== b.count) return b.count - a.count;
        return a.index - b.index;
      })
      /*
    [
      { genre: 'pop', count: 2500, index: 4 },
      { genre: 'pop', count: 600, index: 1 },
      { genre: 'classic', count: 800, index: 3 },
      { genre: 'classic', count: 500, index: 0 },
      { genre: 'classic', count: 150, index: 2 }
    ]
    */
      .filter((t) => {
        if (dupDic[t.genre] >= 2) return false;
        dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
        return true;
      })
      /*
    [
      { genre: 'pop', count: 2500, index: 4 },
      { genre: 'pop', count: 600, index: 1 },
      { genre: 'classic', count: 800, index: 3 },
      { genre: 'classic', count: 500, index: 0 }
    ]
    */
      .map((t) => t.index)
  );
}
