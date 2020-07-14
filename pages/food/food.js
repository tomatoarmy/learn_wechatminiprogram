// pages/food/food.js
Page({
  data:{
    caixi:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var caixi = this.initData();
    this.setData({caixi:caixi});
  },
  initData: function(){
    var caixi = [];
    var object1 = new Object();
    object1.id = '1';
    object1.img = '../images/caixi/1.jpg'
    object1.title = '虾';
    caixi[0] = object1;

    var object2 = new Object();
    object2.id = '2';
    object2.img = '../images/caixi/2.jpg'
    object2.title = '清蒸鱼';
    caixi[1] = object2;

    var object3 = new Object();
    object3.id = '3';
    object3.img = '../images/caixi/3.jpg'
    object3.title = '面条';
    caixi[2] = object3;

    var object4 = new Object();
    object4.id = '4';
    object4.img = '../images/caixi/4.jpg'
    object4.title = '火锅';
    caixi[3] = object4;

    return caixi;
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})