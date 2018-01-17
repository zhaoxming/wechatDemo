// pages/apartmentList/apartmentList.js
var mapbox = 'https://api.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
   apartmentList:[
     { img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', price: 138, name: '1号房源', label:'可短租',starNum:4},
     { img: 'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg', price: 238, name: '2号房源', label: '可长租', starNum: 2},
     { img: 'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg', price: 168, name: '3号房源', label: '可短租', starNum: 5}
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  toApartmentDetailTap:function(event){
    wx.navigateTo({
      url: '/pages/apartmentDetail/apartmentDetail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toSetStarNumTap:function(e){

  }

})