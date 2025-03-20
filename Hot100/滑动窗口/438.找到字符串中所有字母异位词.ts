/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

export // @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const s_letter = new Array(26).fill(0)
  const p_letter = new Array(26).fill(0)

  const result: number[] = []

  for (let i = 0; i < p.length; i++) {
    p_letter[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    s_letter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  if (s_letter.toString() === p_letter.toString()) {
    result.push(0)
  }

  for (let i = p.length; i < s.length; i++) {
    s_letter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    s_letter[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--
    // console.log('s_letter', s_letter.toString())

    if (s_letter.toString() === p_letter.toString()) {
      result.push(i - p.length + 1)
    }
  }

  return result
}
// @lc code=end
console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))
