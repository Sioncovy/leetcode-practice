/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 * 
 * 本题的关键是理解到能够盛更多水的本质原理是什么
 * 我刚开始的时候想到的是两边都需要找比自己当前更高的，因为朴素的思想是两边越高，上限就越高
 * 但是这种思路没有考虑到某一边可能当前就是最优解，不需要继续移动了
 * 
 * 所以正确思路应该是，两边当前的高度比较，谁小移动谁，而不是都移动
 * 
 * 逻辑：
 *  移动更高的一边，受限于更低的一边，即使移动后找到更高的，也不能提升面积
 *  移动更低的一边，如果找到更低的，没有影响，如果找到更高的，那可能就能找到更大的面积
 */

// @lc code=start
function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1
  let area = Math.min(height[right], height[left]) * (right - left)

  while (left < right) {
    if (height[left] < height[right]) {
      left++
    }
    area = Math.max(Math.min(height[right], height[left]) * (right - left), area)
    if (height[left] >= height[right]) {
      right--
    }
    area = Math.max(Math.min(height[right], height[left]) * (right - left), area)
  }

  return area
}
// @lc code=end

console.log(maxArea([8, 7, 2, 1]))
