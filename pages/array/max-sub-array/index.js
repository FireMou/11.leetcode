// pages/array/max-sub-array/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

    示例 1：

    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
    示例 2：

    输入：nums = [1]
    输出：1
    示例 3：

    输入：nums = [0]
    输出：0
    示例 4：

    输入：nums = [-1]
    输出：-1
    示例 5：

    输入：nums = [-100000]
    输出：-100000
     

    提示：

    1 <= nums.length <= 3 * 104
    -105 <= nums[i] <= 105

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/maximum-subarray
   */

  onLoad: function(options) {
    let nums = [-1, -1, 3, -2, 3, -3, 6];
    let target = this.maxSubArray(nums);
    console.log(target);
  },
  maxSubArray: function(nums) {
    let sum = 0;
    let target = nums[0];
    for (let i = 0; i <= nums.length - 1; i++) {
      let num = nums[i];
      if (sum > 0) {
        sum += num;
      } else {
        sum = num;
      }
      target = sum > target ? sum : target;
    }
    return target;
  }
})