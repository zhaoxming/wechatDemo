
var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apartmentDetailInfo: {
      name:'伦敦大学公寓',
      imgUrls: [
        'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg',
        'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg',
        'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg',
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      roomList:[
      
        { roomId: 1, name: '标准间', checkDate: '2017-09-29', price: '$138', desc: '独立卫浴，共享厨房，10-15平', img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', },
        {
          roomId: 2, name: '标准间', checkDate: '2017-10-29', price: '$138', desc: '独立卫浴，共享厨房，10-15平', img: 'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg',
        },
        {
          roomId: 3, name: '标准间', checkDate: '2017-11-11', price:'$138', desc: '独立卫浴，共享厨房，10-15平', img: 'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg',
        }
      ],
      detailInfo: {
        apartmentId: 'S00337955',
        postCode:'M5T 1R5',
        address:{
          latitude: 51.5634123287,
          longitude: 8.0859375000,
          name:'中央大大澳'
        }
      }
    },

    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    tabs: ["预定","详情", "评论"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    tabNum:1,
    actionSheetHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
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

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  toOpenLocationTap:function(event){
    var latitude = event.target.dataset.address.latitude;
    var longitude = event.target.dataset.address.longitude;
    console.log("地址：" + latitude + "======" + longitude);
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28
    }) 
  },
  toOrderRoomTap:function(e){

    wx.navigateTo({
      url: '/pages/preOrder/preOrder',
    })

  },
  toCommentActionSheetTap:function(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  }
})