var backToTop = {};


backToTop.run = function() {
  var head = content.document.getElementsByTagName("head")[0],
      style = content.document.getElementById("back-to-top-style");
      

  if(!style) {
    style = content.document.createElement("link");
		style.id = "back-to-top-style";
		style.type = "text/css";
		style.rel = "stylesheet";
		style.href = "chrome://backtotop/skin/skin.css";
		head.appendChild(style);
  }
  
  content.scroll(0,0);
}

