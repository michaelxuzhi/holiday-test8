Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: "0000-00-00",
    nian: " ",
    yue: ' ',
    ri: " ",
    xin1: " ",
    xin2:" ",
    show: 'none',
    t5: " ",
  },

  bindDateChange: function (e) {
    this.setData({
      dates: e.detail.value,
    })
    // console.log(this.data.dates);
    var t6 = new Date(this.data.dates.replace(/-/g, '/')).getDay();
    switch (t6) {
      case 0: { t6 = "星期日";  this.setData({ show: 'inline-block', t5: 0 });break; };
      case 1: { t6 = "星期一"; this.setData({ show: 'inline-block', t5: 1 }); break; };
      case 2: { t6 = "星期二"; this.setData({ show: 'inline-block', t5: 2 });break; };
      case 3: { t6 = "星期三"; this.setData({ show: 'inline-block', t5: 3 });break; };
      case 4: { t6 = "星期四"; this.setData({ show: 'inline-block', t5: 4 });break; };
      case 5: { t6 = "星期五"; this.setData({ show: 'inline-block', t5: 5 });break; };
      case 6: { t6 = "星期六"; this.setData({ show: 'inline-block', t5: 6 });break; };
    };
    console.log(t6);
    console.log(this.data.t5);
    this.setData({
      xin2: t6,
    })
  },

click(){
  switch (this.data.t5) {
    case 0: { wx.navigateTo({
      url: '../one/one',
    }); break; };
    case 1: {
      wx.navigateTo({
        url: '../Mon/Mon',
      }); break; };
    case 2: {
      wx.navigateTo({
        url: '../Turs/Turs',
      }); break; };
    case 3: {
      wx.navigateTo({
        url: '../Weds/Weds',
      }); break; };
    case 4: {
      wx.navigateTo({
        url: '../Thurs/Thurs',
      }); break; };
    case 5: {
      wx.navigateTo({
        url: '../Fri/Fri',
      }); break; };
    case 6: {
      wx.navigateTo({
        url: '../one/one',
      }); break; };
  }
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t1 = new Date().getFullYear();
    var t2 = new Date().getMonth()+1;
    var t3 = new Date().getDate();
    var t4 = new Date().getDay();
    // console.log(parseFloat(t1)+parseFloat(t2)+1+parseFloat(t3));
    switch (t4) {
      case 0: { t4= "星期日"; break; };
      case 1: { t4= "星期一"; break; };
      case 2: { t4= "星期二"; break; };
      case 3: { t4= "星期三"; break; };
      case 4: { t4= "星期四"; break; };
      case 5: { t4= "星期五"; break; };
      case 6: { t4= "星期六"; break; };
    }
    this.setData({
      nian: t1,
      yue: t2,
      ri: t3,
      xin1: t4,
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
    
  }
})