var posts=["2025/05/12/CS通过frp实现内网穿透教程及原理分析/","2026/02/28/手把手教你破解WiFi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };