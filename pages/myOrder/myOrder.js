// pages/myOrder/myOrder.js
var base64 = require("../images/base64");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      { name:'1号房间',img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', dateStart: '2017-12-20', dateEnd: '2017-12-29', price: '$590' },
      { name: '2号房间',img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', dateStart: '2017-12-20', dateEnd: '2017-12-29', price: '$620' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})