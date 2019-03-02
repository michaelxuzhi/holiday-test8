// page/three/three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: "0000-00-00",
    cha: "0",
    dat: "0",
    dat1: "0",
    dat2: "0",
    // tempFilePaths: "../../image/5.png"
  },

  //pcicker标签的点击函数，将初始数据中的dates改变成用户自行选择的日期
  bindDateChange: function(e) {
    this.setData({
      dates: e.detail.value,
    })
    var that = this;
    var t3 = this.data.dates;
    var t6 = new Date(t3.replace(/-/g, '/')).getTime();
    //var t7 = '2017-1-1';
    //var d = new Date(t7).getTime();
    var t4 = new Date().getTime();
    var t7 = new Date(t4 - t6);
    var cha = parseFloat(t7.getTime() / 1000 / 3600 / 24).toFixed(2);


    //打印 通过picker设置的时间t3；打印当前获取的时间t4的毫秒形式；打印将t3的“-”替换成“/”t6，并将t6转换成毫秒形式；打印两个时间毫秒t4-t6的差值t7，t7通过.getTime()转换成日的形式，精确到两位小数
    // console.log(t3);
    // console.log(t4);
    // console.log(t6);
    // console.log(cha);

    that.setData({
      cha: parseFloat(t7.getTime() / 1000 / 3600 / 24).toFixed(2),
    })


    var t8 = this.data.cha;
    //打印日期差值t8，其实是将本页中的cha赋值给t8
    // console.log(t8);
    if (t8 <= 520 && t8 >= 0) {
      var t9 = parseFloat(520 - t8).toFixed(2);
      var t10 = parseFloat(1000 - t8).toFixed(2);
      var t11 = parseFloat(1314 - t8).toFixed(2);
      that.setData({
        dat1: t9,
        dat: t10,
        dat2: t11,
      })
    } else if (t8 <= 1000 && t8 > 520) {
      var t9 = parseFloat(1000 - t8).toFixed(2);
      var t10 = parseFloat(520 - t8).toFixed(2);
      var t11 = parseFloat(1314 - t8).toFixed(2);
      that.setData({
        dat: t9,
        dat1: t10,
        dat2: t11,
      })
    } else if (t8 <= 1314 && t8 >= 1000) {
      var t9 = parseFloat(1314 - t8).toFixed(2);
      var t10 = parseFloat(520 - t8).toFixed(2);
      var t11 = parseFloat(1000 - t8).toFixed(2);
      that.setData({
        dat2: t9,
        dat1: t10,
        dat: t11,
      })
    } else if (t8 > 1314) {
      wx.showModal({
        title: '提示',
        content: '已经超过1314天了!',
      })
      var t9 = parseFloat(1314 - t8).toFixed(2);
      var t10 = parseFloat(520 - t8).toFixed(2);
      var t11 = parseFloat(1000 - t8).toFixed(2);
      that.setData({
        dat2: t9,
        dat1: t10,
        dat: t11,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '这个日期设置错了！',
      })
      var t9 = "，你自己看看你是不是写错多少";
      that.setData({
        dat: t9,
        dat1: t9,
        dat2: t9,
      })
    }
  },

  //按钮“计算日期”的点击函数，计算多个数值
  // click1: function() {
    
  // },


  // chooseimage: function () {
  //   var _this = this;
  //   wx.chooseImage({
  //     count: 1, // 默认9 
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
  //       _this.setData({
  //         tempFilePaths: res.tempFilePaths
  //       })
  //     }
  //   })
  // },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
  
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //当页面显示时，打印“page onShow”
    //console.log("page onShow");
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    //当页面隐藏时，打印“page onHide”
    //console.log("page onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showModal({
      title: '上拉',
      content: '上拉！',
    })
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})