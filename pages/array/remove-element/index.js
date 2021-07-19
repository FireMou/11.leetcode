// pages/remove-element/index.js

// https://leetcode-cn.com/problems/remove-element/
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
    给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

     

    说明:

    为什么返回数值是整数，但输出的答案是数组呢?

    请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

    你可以想象内部操作如下:

    // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
    int len = removeElement(nums, val);

    // 在函数里修改输入数组对于调用者是可见的。
    // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
    for (int i = 0; i < len; i++) {
        print(nums[i]);
    }
     

    示例 1：

    输入：nums = [3,2,2,3], val = 3
    输出：2, nums = [2,2]
    解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
    示例 2：

    输入：nums = [0,1,2,2,3,0,4,2], val = 2
    输出：5, nums = [0,1,4,0,3]
    解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
     

    提示：

    0 <= nums.length <= 100
    0 <= nums[i] <= 50
    0 <= val <= 100
   */
  onLoad: function(options) {

    // let nums = [3, 7, 2, 2, 0, 6, 5, 9, 7, 7, 3, 5, 2];
    // let val = 2;

    let nums = [4, 5];
    let val = 5;
    let length = this.removeElement(nums, val);
    console.log(length);
    for (let i = 0; i < length; i++) {
      console.log(nums[i]);
    }
  },

  /**
    根据题意，我们可以将数组分成「前后」两段：
    
    前半段是有效部分，存储的是不等于 val 的元素。
    后半段是无效部分，存储的是等于 val 的元素。
    最终答案返回有效部分的结尾下标。
   */
  removeElement: function(nums, val) {
    let right = nums.length - 1;
    for (let left = 0; left <= right; left++) {
      if (nums[left] === val) {
        let tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
        left--;
        right--;
      }
    }
    return right + 1;
  },
  /**
    先设定变量 idx，指向待插入位置。idx 初始值为 0

    然后从题目的「要求/保留逻辑」出发，来决定当遍历到任意元素 x 时，应该做何种决策：

    如果当前元素 x 与移除元素 val 相同，那么跳过该元素。
    如果当前元素 x 与移除元素 val 不同，那么我们将其放到下标 idx 的位置，并让 idx 自增右移。
    最终得到的 idx 即是答案。
   */
  removeElement2: function(nums, val) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[idx++] = nums[i];
        // nums[idx] = nums[i];
        // idx++;
      }
    }
    return idx;
  }
})