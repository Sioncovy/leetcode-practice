/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 * 
 * 评价是不要想太多，别觉得哈希表就很占空间之类的，先实现，再优化
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const mp: Record<number, number> = {}
  nums.forEach((num, index) => (mp[num] = index))
  for (let i = 0; i < nums.length; i++) {
    const targetNumIndex = mp[target - nums[i]]
    if (Number.isInteger(targetNumIndex) && targetNumIndex !== i) {
      return targetNumIndex > i ? [i, targetNumIndex] : [targetNumIndex, i]
    }
  }

  return []
}
// @lc code=end
