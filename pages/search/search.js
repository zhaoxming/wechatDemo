// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    searchRecords: ["纽约", "利物浦", "纽约", "利物浦"],
    cityHotColleges: ["东北大学","纽约斯坦福大学坦福大学","北京大学"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.request({
     url: "https://47.96.20.38:8080/user/wechat/getAuthToken",
     data: {
       
     },
     header: {
       'content-type': 'application/json',
       
     },
     method: "GET",
     success: function (res) {
       console.log("accessToken" + res.data)
     }
   })
  
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
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  deleteSearchRecords:function(){
    this.setData({
      searchRecords:[],
      cityHotColleges:[]
    });
  }
})