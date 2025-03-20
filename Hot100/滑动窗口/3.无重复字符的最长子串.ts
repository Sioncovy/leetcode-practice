/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

export // @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let start = 0
  let end = 0
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    end = i
    if (i === 0) {
      maxLength = 1
      continue
    }

    for (let j = start; j < end; j++) {
      if (s[j] === s[end]) {
        start = j + 1
        break
      }
    }
    maxLength = Math.max(maxLength, end - start + 1)

    // console.log('haha', start, end, s.substring(start, end + 1), maxLength)
  }

  return maxLength
}
// @lc code=end
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('abcd'))
console.log(lengthOfLongestSubstring('pwwkew'))
