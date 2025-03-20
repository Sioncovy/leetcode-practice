/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
export function trap(height: number[]): number {
  const tl: number[] = []
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      tl[i] = height[i]
    } else {
      tl[i] = Math.max(height[i], tl[i - 1])
    }
  }
  const tr: number[] = []
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      tr[i] = height[i]
    } else {
      tr[i] = Math.max(height[i], tr[i + 1])
    }
  }
  // console.log('tl', tl)
  // console.log('tr', tr)

  let sum = 0
  for (let i = 0; i < height.length; i++) {
    sum += Math.max(Math.min(tl[i], tr[i]) - height[i], 0)
  }
  return sum
}
// @lc code=end
console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
