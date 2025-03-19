/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

/**
 * 真正的双指针法
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const length = nums.length
  let p0 = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[p0]] = [nums[p0], nums[i]]
      p0++
    }
  }
}
// @lc code=end
