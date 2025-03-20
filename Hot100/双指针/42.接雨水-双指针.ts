/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 * 
 * 双指针解法，这个解法的巧妙之处在于对动态规划的优化解法。因为对于每个地方，只会出现一次，且固定由最左到最右，动态规划最大的优势是得出通解后对任何内容都可以快速得到答案
 * 鉴于要查询的值非常规律，可以优化得出：对于每个位置，我们只关心某个点左边最大是多少，右边最大是多少，再根据自己高度就能知道当前位置可以存储多少水
 * 
 * 所以可以使用双指针，一个指向头、一个指向尾，相互逼近。在过程中只需要记录左右指针到过的位置中，最大高度是多少。在向中间逼近的过程中，就能计算出全部的。
 */

export // @lc code=start
function trap(height: number[]): number {
  let left = 0
  let leftMax = height[left]
  let right = height.length - 1
  let rightMax = height[right]
  let sum = 0

  while (left < right) {
    if (height[left] >= leftMax) {
      leftMax = height[left]
    }
    if (height[right] >= rightMax) {
      rightMax = height[right]
    }

    if (height[left] < height[right]) {
      sum = sum + (leftMax - height[left])
      left++
    } else {
      sum = sum + (rightMax - height[right])
      right--
    }
  }
  return sum
}
// @lc code=end
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
