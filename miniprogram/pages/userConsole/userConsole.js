// pages/userConsole/userConsole.js

var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
Page({
  data: {
   
    openid: ''
  },
  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: getApp().globalData.openid,
      image: '',
      width: 150,
      height: 150,
      colorDark: "black",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },
  
})