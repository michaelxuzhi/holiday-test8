const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    days: "一",
    daystx: "Today is Monday",
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
   
    dates1: [
      {
        'cnum': '一',
        'cname': '软件工程',
        'tname': "陈伟莲",
        'peroid': " 42-706",
        'name': 1
      },
      {
        'cnum': '二',
        'cname': '无',
        'tname': " ",
        'peroid': " ",
        'name': 2
      },

      {
        'cnum': '三',
        'cname': '网络管理',
        'tname': "刘建友",
        'peroid': " 42-706",
        'name': 3
      },
      {
        'cnum': '四',
        'cname': '计算机系统结构/人机交互',
        'tname': "陈权 1-8周 42-805\n",
        'peroid': "周锡玲 9-16周 42-611",
        'name': 4
      },
      {
        'cnum': '五',
        'cname': '无',
        'tname': " ",
        'peroid': " ",
        'name': 5
      },
    ],

    activeNames: ['0']
  },



  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },




  bindDateChange: function (e) {
    this.setData({
      dates: e.detail.value,
    })
  },






  // bindDateChange1: function (e) {
  //   this.setData({
  //     dates1: e.detail.value,
  //   })
  //   var that = this;
  //   var t3 = this.data.dates1;
  //   var t6 = new Date(t3.replace(/-/g, '/')).getTime();
  //   //var t7 = '2017-1-1';
  //   //var d = new Date(t7).getTime();
  //   var t4 = new Date().getTime();
  //   var t7 = new Date(t4 - t6);
  //   var cha1 = parseInt(t7.getTime() / 1000 / 3600 / 24);
  //   // console.log(t3);
  //   // console.log(t4);
  //   // console.log(t6);
  //   // console.log(cha);
  //   that.setData({
  //     cha1: parseInt(t7.getTime() / 1000 / 3600 / 24),
  //   })
  // },

  // click1: function() {
  //   var that = this;
  //   var t3 = this.data.dates;
  //   var t6 = new Date(t3.replace(/-/g, '/')).getTime();
  //   //var t7 = '2017-1-1';
  //   //var d = new Date(t7).getTime();
  //   var t4 = new Date().getTime();
  //   var t7 = new Date(t4 - t6);
  //   var cha = parseInt(t7.getTime() / 1000 / 3600 / 24);
  //   // console.log(t3);
  //   // console.log(t4);
  //   // console.log(t6);
  //   // console.log(cha);
  //   that.setData({
  //   cha : parseInt(t7.getTime() / 1000 / 3600 / 24),
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/81/26/3400124396.mp3',
    })
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)

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
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
    })
  },

})