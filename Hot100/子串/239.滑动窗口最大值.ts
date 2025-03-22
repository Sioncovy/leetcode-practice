/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 * 
 * 区间最大值的题，本质就是维护一个可以方便获取当前区间最大值的数据结构
 * 1. 优先队列（大顶堆），窗口移动后，当前堆内增删数字，堆顶永远是已有数字最大的那个
 * 2. 单调队列，维护一个单调递减队列，根据入队出队的规则，队列内只保留大的数字
 *    2.1 对新加入的判断：如果新来的比已有的大，那已有的没必要保留，没有任何意义，可以被删除
 *    2.2 对出界的判断：如果队头的下标已经不在当前窗口范围内了，则移除队头。由于单调递减，新的队头就是当前窗口范围内最大的
 *    2.3 将处理后的队头添加进答案的数组中
 */

export // @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const list: number[] = []
  const result: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (list[0] <= i - k) {
      list.shift()
    }
    while (list.length > 0 && nums[list[list.length - 1]] < nums[i]) {
      list.pop()
    }
    list.push(i)
    if (i < k - 1) {
      continue
    }

    result.push(nums[list[0]])
  }

  return result
}
// @lc code=end
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
