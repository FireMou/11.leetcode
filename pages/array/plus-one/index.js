// pages/array/plus-one/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
    给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

    你可以假设除了整数 0 之外，这个整数不会以零开头。

     

    示例 1：

    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。
    示例 2：

    输入：digits = [4,3,2,1]
    输出：[4,3,2,2]
    解释：输入数组表示数字 4321。
    示例 3：

    输入：digits = [0]
    输出：[1]
     

    提示：

    1 <= digits.length <= 100
    0 <= digits[i] <= 9


    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/plus-one
   */
  onLoad: function(options) {
    let nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
    let nums1 = this.plusOne2(nums);
    console.log(nums1);
  },
  /**
   * 1、push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
   * 2、unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
   * 3、splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
   */
  plusOne: function(nums) {
    let length = nums.length - 1;
    for (let index in nums.reverse()) {
      // let num = nums[index];
      // num++;
      nums[index]++;
      if (nums[index] > 9) {
        nums[index] = 0;
        if (index.toString() === length.toString()) {
          nums.push(1);
          break;
        }
      } else {
        break;
      }
    }
    return nums.reverse();
  },

  /**
   
    ... 在JavaScript中是展开语法
    展开语法(Spread syntax)
    可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；
    还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。
    (译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

    示例
    在函数调用时使用展开语法

    等价于apply的方式

    如果想将数组元素迭代为函数参数，一般使用`Function.prototype.apply` 的方式进行调用。

    function myFunction(x, y, z) { }
    var args = [0, 1, 2];
    myFunction.apply(null, args);

    有了展开语法，可以这样写：
    function myFunction(x, y, z) { }
    var args = [0, 1, 2];
    myFunction(...args);

    所有参数都可以通过展开语法来传值，也不限制多次使用展开语法。

    function myFunction(v, w, x, y, z) { }
    var args = [0, 1];
    myFunction(-1, ...args, 2, ...[3]);


    let nums1 = [...Array(4)].map(_ => 0); // output [0, 0, 0, 0];
    let nums1 = [new Array(4)].map(_ => 0); // output [0]

    参考：https://blog.csdn.net/hyl999/article/details/97035381
  */


  /**
   * 
   * @param {传入的数字数组} nums 
   */
  plusOne1: function(nums) {
    let length = nums.length;
    for (let i = length - 1; i >= 0; i--) {
      // +1
      nums[i]++;
      // 是否到10了  不足10的话  取余为本身数值
      nums[i] %= 10;
      if (nums[i] != 0) {
        return nums;
      }
    }

    nums = [...Array(length + 1)].map(_ => 0);
    nums[0] = 1;
    return nums;
  },

  /**
   * 在很大的位数时 parseInt 不精准
   * BigInt 在小程序未支持，如若转成字符串，分段计算，Emmm  这个算法就太失败了，用上面的吧
   */
  plusOne2: function(nums) {
    let numStr = '';
    for (const num of nums) {
      numStr += num;
    }
    let addStr = (BigInt(numStr) + 1).toString();
    let rNums = [];
    for (const str of addStr) {
      rNums.push(parseInt(str));
    }
    return rNums;
  }

})