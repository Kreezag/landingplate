import './less/index.less'

const menuOpenerEl = window.document.getElementById('mobile-menu-opener');

menuOpenerEl.onclick = ((e) => {
  menuOpenerEl.classList.toggle('mobile-menu-opener--open');
})
