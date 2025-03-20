/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 * 
 * !!!!!!!!!该死的，js 的 sort 不写判断函数的话，会默认转成字符串，字典序排序，导致数字数组排序不对
 * 思路：
 *    排序后方便跳过重复元素组合，从 0 到 n-1 不重复地枚举数字，从当前位置后面的头和尾，用双指针的方法找到三数总和为 0 的两个数字
 *    要点：判重是当前和上一个比较，所以第一个的时候直接跳过不用判断就好了
 *    如果总和偏大，说明加多了，所以右指针左移；偏小则左指针右移。对于枚举到的数字，注意在双指针找数字的时候，不一定只存在找到一个的，可能对于 numss[i]，能找到多个不重复的组合
 */

// @lc code=start
export function threeSum(nums: number[]): number[][] {
  const numss = nums.sort((a, b) => a - b)
  const result: number[][] = []
  for (let i = 0; i < numss.length; i++) {
    if (i > 0 && numss[i - 1] === numss[i]) {
      continue
    }

    let pl = i + 1
    let pr = numss.length - 1
    while (pl < pr) {
      const nl = numss[pl],
        nr = numss[pr]

      const sum = numss[i] + numss[pl] + numss[pr]

      if (sum === 0) {
        result.push([numss[i], nl, nr])
        pl++
        pr--
        while (pl < pr && numss[pl] === numss[pl - 1]) {
          pl++
        }
        while (pl < pr && numss[pr] === numss[pr + 1]) {
          pr--
        }
      }
      if (sum < 0) {
        pl++
      }
      if (sum > 0) {
        pr--
      }
    }
  }
  return result
}
// @lc code=end
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]))
