/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 *
 * 单调栈的思路很有意思，栈里的存储是单调递减的，也就是说可以记录到最长连续可以存储水的可能性区块
 * 当碰到一个升高的时候，就去尝试填满当前能填满的所有空格，形象一点，由于是从左往右单调递减，最右就是最深的坑，往里面倒水，一层一层填满
 * 最大上限就是当前碰到升高的有多高，超过的部分就不管，等后面碰到更高的再继续填
 * 
 * 代码实现上：每个元素都要 push 到栈里，且保持栈的单调递减，碰到比栈顶大的数字，就要清理栈的内容了，直到添加进当前的高度也满足单调栈
 */

export // @lc code=start
function trap(height: number[]): number {
  const stack: number[] = []
  stack.push(0)
  let sum = 0

  for (let i = 1; i < height.length; i++) {
    const top = height[stack[stack.length - 1]]
    if (height[i] <= top) {
      stack.push(i)
    }

    if (height[i] > top) {
      while (stack.length > 0 && height[stack[stack.length - 1]] <= height[i]) {
        const t = stack.pop()!
        if (stack.length === 0) {
          break
        }
        const left = stack[stack.length - 1]
        sum = sum + (Math.min(height[i], height[left]) - height[t]) * (i - left - 1)
      }
      stack.push(i)
    }
    // console.log('stack', stack)
    // console.log('sum', sum)
  }

  return sum
}
// @lc code=end
// console.log(trap([4, 2, 0, 3, 2, 5]))
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]))
