/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 *
 * 在暴力前缀和中，我们需要手动遍历 0 ~ i-1，来找到需要的所有组合
 * 但是我们知道了 nums[i]，需要的数字是固定的。所以我们可以优化一下
 * 不同组合得到相同数字的统计聚合起来，这样直接 map 就能快速找到所有组合的数量
 *
 * 特点：当前只和之前已经找过的地方有关联，类似动态规划的感觉，新值可以通过上一个加当前的来获得
 */

export // @lc code=start
function subarraySum(nums: number[], k: number): number {
  let mp = new Map()
  const len = nums.length
  let pre = 0
  let result = 0

  mp.set(0, 1)

  for (let i = 0; i < len; i++) {
    pre += nums[i]
    // console.log('pre', pre)

    if (mp.has(pre - k)) {
      result += mp.get(pre - k)
    }

    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }

  return result
}
// @lc code=end
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, 1, 1], 2))
