window.onload = function() {
  const close = document.getElementsByClassName("close")[0];
  const promotionalTop = document.getElementsByClassName("promotional-top")[0];
  const header = document.getElementsByClassName("header")[0];
  const logo = header.firstElementChild;
  const promotionalLogo = header.lastElementChild;
  
  close.onclick = function(e) {
    e.preventDefault();
    addClass(promotionalTop, "hide");
  }

  header.onmouseover = function(e) {
    if(hasClass(logo, "hide")){
      return
    }
    else{
      addClass(logo, "hide");
      addClass(promotionalLogo, "block");
    }
  }
}

/* 防抖 */
function debounce(func, delay=50) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("执行了1")
      func.apply(this, args);
    }, delay);
  };
}

/* 添加类 */
function addClass(obj, n) {
  obj.className += " "+n;
}

/* 移除类 */
function removeClass(obj, cn) {
  let pattern = new RegExp("\\b"+cn+"\\b");
  obj.className = obj.className.replace(pattern, '');
  obj.className = obj.className.trim()
}

/* 检测类 */
function hasClass(obj, n) {
  let pattern = new RegExp("\\b"+n+"\\b");
  return pattern.test(obj.className);
}