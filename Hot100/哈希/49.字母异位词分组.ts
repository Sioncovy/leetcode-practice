/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  // 最糙的思路：每个单词排序一下保持一致，记录 map
  const mp: Record<string, string[]> = {}
  strs.forEach((str) => {
    const s = str.split('').sort().join('')
    mp[s] = mp[s] ? [...mp[s], str] : [str]
  })
  return Object.values(mp)
}
// @lc code=end
