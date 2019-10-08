

Page({
  data: {
    answers: [
      "确定无疑",
      "注定如此",
      "可以相信",
      "绝对没错",
      "我想是的",
      "极有可能",
      "前景乐观",
      "应该没错",
      "有此迹象",

      "确实不可靠",
      "根本不可能",
      "基本不可能",
      "我想不可能",
      "前景不可观",

      "不确定，再试试",
      "现在不便告知",
      "请再试一次",
      "现在无法预测",
      "集中精力再问"
    ],
    answerIsShown: false,
    answerIndex: null,
    isTurn: false,
  },
  // 事件处理函数
  getAnswer: function(){
    if(this.data.answerIsShown){
      return
    }
    this.setData({
      answerIndex: Math.floor(Math.random() * 19),
      isTurn: true,
    })
    setTimeout(()=>{
      this.setData({
        answerIsShown: true,
      })
    }, 3000)
  },

  tryAgain: function(){
    this.setData({
      answerIsShown: false,
      isTurn: false,
    })
  },

  logout: function(){
    wx.navigateBack({
      delta: 1,
      success: ()=>{
        console.log("logout")
      }
    })
  }
})
