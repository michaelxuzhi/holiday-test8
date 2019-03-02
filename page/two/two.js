const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    color: 'red',
  },
bind(){
  var that = new Date();
  var d = that.getDay();
  switch(d){
    case 0:wx.navigateTo({
      url: '../one/one',
    });break;
    case 1: wx.navigateTo({
      url: '../Mon/Mon',
    }); break;
    case 2: wx.navigateTo({
      url: '../Turs/Turs',
    }); break;
    case 3: wx.navigateTo({
      url: '../Weds/Weds',
    }); break;
    case 4: wx.navigateTo({
      url: '../Thurs/Thurs',
    }); break;
    case 5: wx.navigateTo({
      url: '../Fri/Fri',
    }); break;
    case 6: wx.navigateTo({
      url: '../one/one',
    }); break;

  }
},

  // getRndNum(max,min){
  //   var rn1 = parseInt(Math.random() * (max - min) + min);
  //   console.log(rn1);
  // },

  onLoad() {
    this.bind();
    // this.getRndNum(1,5);
    
    // let that = this;
    // setTimeout(function () {
    //   that.setData({
    //     loading: true
    //   })
    // }, 500)


    // var that = new Date();
    // var d = that.getDay();
    // switch (d) {
    //   case 0: wx.navigateTo({
    //     url: '../one/one',
    //   }); break;
    //   case 1: wx.navigateTo({
    //     url: '../Mon/Mon',
    //   }); break;
    //   case 2: wx.navigateTo({
    //     url: '../Turs/Turs',
    //   }); break;
    //   case 3: wx.navigateTo({
    //     url: '../Weds/Weds',
    //   }); break;
    //   case 4: wx.navigateTo({
    //     url: '../Thurs/Thurs',
    //   }); break;
    //   case 5: wx.navigateTo({
    //     url: '../Fri/Fri',
    //   }); break;
    //   case 6: wx.navigateTo({
    //     url: '../one/one',
    //   }); break;

    // }
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
});