(function(){
  "use strict";
  var top=document.querySelector('.av-top'), btn=document.getElementById('av-burger');
  if(!btn||!top) return;
  function set(open){
    top.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.querySelector('.av-bt').textContent=open?'Close':'Menu';
  }
  btn.addEventListener('click',function(){ set(!top.classList.contains('open')); });
  top.querySelectorAll('.av-nav a').forEach(function(a){ a.addEventListener('click',function(){ set(false); }); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') set(false); });
})();
