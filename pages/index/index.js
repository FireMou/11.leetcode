// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  /**
   * 两数之和
   */
  twoSum: function() {
    wx.navigateTo({
      url: '../array/two-sum/index'
    });
  },
  removeDuplicates: function() {
    wx.navigateTo({
      url: '../array/remove-duplicates/index'
    });
  },
  removeElement: function() {
    wx.navigateTo({
      url: '../array/remove-element/index'
    });
  },
  searchInsert: function() {
    wx.navigateTo({
      url: '../array/search-insert/index'
    });

  },
  maxSubArray: function() {
    wx.navigateTo({
      url: '../array/max-sub-array/index'
    });
  }
})