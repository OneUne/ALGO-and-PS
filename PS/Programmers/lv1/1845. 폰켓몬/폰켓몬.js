function solution(nums) {
    var maxSize = nums.length / 2
    var setNums = new Set(nums)
    return setNums.size > maxSize ? maxSize : setNums.size
}