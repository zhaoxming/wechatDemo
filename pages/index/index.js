//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    inputShowed: false,
    inputVal: "",
    cityGrids: [
      { id: '1', img: 'http://seopic.699pic.com/photo/00005/2396.jpg_wh1200.jpg', cityName: '伦敦' },
      { id: '2', img: 'http://seopic.699pic.com/photo/00002/4091.jpg_wh1200.jpg', cityName: '纽约' },
      { id: '3', img: 'http://seopic.699pic.com/photo/2016/08/09/360173d9-cef2-461c-9375-6a38bb699443.jpg_wh1200.jpg', cityName: '多伦多' },
      { id: '4', img: 'http://seopic.699pic.com/photo/00053/1356.jpg_wh1200.jpg', cityName: '墨尔本' },
      { id: '5', img: 'http://seopic.699pic.com/photo/00041/4547.jpg_wh1200.jpg', cityName: '利物浦' },
      { id: '6', img: 'http://seopic.699pic.com/photo/00016/0578.jpg_wh1200.jpg', cityName: '曼彻斯特' }
    ],
    countryGrids: [
      { id: '1', img: 'http://seopic.699pic.com/photo/00020/2596.jpg_wh1200.jpg', countryName: '美国' },
      { id: '2', img: 'http://seopic.699pic.com/photo/50054/7313.jpg_wh1200.jpg', countryName: '英国' },
      { id: '3', img: 'http://seopic.699pic.com/photo/00046/5989.jpg_wh1200.jpg', countryName: '澳大利亚' },
      { id: '4', img: 'http://seopic.699pic.com/photo/00016/9754.jpg_wh1200.jpg', countryName: '加拿大' },
      { id: '5', img: 'http://seopic.699pic.com/photo/00023/8640.jpg_wh1200.jpg', countryName: '新西兰' },
      { id: '6', img: 'http://seopic.699pic.com/photo/50045/5902.jpg_wh1200.jpg', countryName: '日本' }
    ],
    imgUrls: [
      { swiperItem: [{ img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },] },
      {
        swiperItem: [{ img: 'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },]
      },
      { swiperItem: [{ img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },] },
      {
        swiperItem: [{ img: 'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },]
      },
      { swiperItem: [{ img: 'http://seopic.699pic.com/photo/50016/1263.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },] },
      {
        swiperItem: [{ img: 'http://seopic.699pic.com/photo/00004/3440.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' }, { img: 'http://seopic.699pic.com/photo/00014/8685.jpg_wh1200.jpg', name: '1号公寓', desc: '每周最低', price: '￥1000' },]
      },

    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };

    this.getHotCity();
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
  toSearchTap: function () {
    wx.navigateTo({
      url: '/pages/search/search',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toSwitchCity: function () {
    wx.navigateTo({
      url: '/pages/switchcity/switchcity',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toApartmentListTap: function (event) {
    wx.navigateTo({
      url: '/pages/apartmentList/apartmentList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
  getHotCity: function () {
     var that = this;
    wx.request({
      url: 'https://api.innwowo.com/house/location/get_hot_city',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          cityGrids: res.data.data,
        });

      }

    })
  }
})
