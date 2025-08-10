var posts=["2025/05/12/CS通过frp实现内网穿透教程及原理分析/","2025/04/23/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };