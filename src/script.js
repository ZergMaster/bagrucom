console.log('hi');

const parall = document.getElementById('parall');

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
     console.log(scrolled + 'px');

    parall.setAttribute("style", 'background-position-y: -'+(scrolled+100)+'px;');
  }