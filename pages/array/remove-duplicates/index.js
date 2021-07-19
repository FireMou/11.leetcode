// pages/remove-duplicates/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let nums = [0, 0, 1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7];
    let length = this.removeDuplicates(nums);
    console.log(length);
    for (let i = 0; i < length; i++) {
      console.log(nums[i]);
    }
  },
  /**
   * 
   * @param {数字数组} nums 
   */
  removeDuplicates: function(nums) {
    if (nums === null || nums.length === 0) {
      return 0;
    }
    let p = 0;
    let q = 1;
    while (q < nums.length) {
      if (nums[p] !== nums[q]) {
        nums[p + 1] = nums[q];
        p++;
      }
      q++;
    }
    return p + 1;
  }

  /**
    解法： 双指针

    首先注意数组是有序的，那么重复的元素一定会相邻。

    要求删除重复元素，实际上就是将不重复的元素移到数组的左侧。

    考虑用 2 个指针，一个在前记作 p，一个在后记作 q，算法流程如下：

    1.比较 p 和 q 位置的元素是否相等。

    如果相等，q 后移 1 位
    如果不相等，将 q 位置的元素复制到 p+1 位置上，p 后移一位，q 后移 1 位
    重复上述过程，直到 q 等于数组长度。

    返回 p + 1，即为新数组长度。

   */

})