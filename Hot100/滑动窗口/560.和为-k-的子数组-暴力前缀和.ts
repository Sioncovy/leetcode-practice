/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

export // @lc code=start
function subarraySum(nums: number[], k: number): number {
  const sum: number[] = [0]
  let result = 0

  for (let i = 1; i <= nums.length; i++) {
    sum[i] = nums[i - 1] + sum[i - 1]
  }

  const len = nums.length
  for (let i = len; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (sum[i] - sum[j] === k) {
        result++
      }
    }
  }

  return result
}
// @lc code=end
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, 1, 1], 2))
