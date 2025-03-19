/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 * 
 * 重复元素是不需要的再去遍历的，例如如果序列的起始元素重复了 n 次，那么从头遍历的花销就要有 n 次，这样会导致超时
 * 
 * 核心思路：
 *  利用 set 去重，找到不存在比自己小 1 的数字作为一个序列的起始，逐步 +1 获取序列长度
 *  如果存在比自己小 1 的，那么自己 +1 找是不必要的，因为从 -1 开始找，肯定比自己更长一个
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  const st = new Set(nums)

  let maxLength = 1
  for (const num of st) {
    let currentLength = 1
    if (st.has(num - 1)) {
      continue
    }

    for (let i = num + 1; ; i++) {
      if (st.has(i)) {
        currentLength++
      } else {
        break
      }
    }

    maxLength = Math.max(maxLength, currentLength)
  }
  return maxLength
}
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([1, 0, 1, 2]))
