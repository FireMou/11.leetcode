// pages/two-sum/index.js
const md = require('./two-sum.md');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    md: md
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let nums = [2, 7, 11, 15];
    let target = 9;
    let indexArr = this.twoSum(nums, target);
    if (indexArr === null) {
      console.log('不存在索引');
    } else {
      console.log(indexArr);
    }
  },
  /**
   * 
   * @param {数字数组} nums 
   * @param {目标数值} target 
   */
  twoSum: function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let minus = target - num;
      if (map.hasOwnProperty(minus.toString())) {
        return [map[minus.toString()], i];
      } else {
        map[num.toString()] = i;
      }
    }
    return null;
  }
})