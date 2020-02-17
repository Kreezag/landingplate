import './less/index.less'

const menuOpenerEl = window.document.getElementById('page-mobile-menu-opener');
const bodyElement = window.document.querySelector('body');

menuOpenerEl.onclick = (() => {
  bodyElement.classList.toggle('page-mobile-menu-open');
})

const menuElements = window.document.getElementsByClassName('main__menu-item-link')

for (let i = 0; i < menuElements.length; i ++) {
  menuElements[i].onclick = () => {
    bodyElement.classList.remove('page-mobile-menu-open');
  }
}

window.document.getElementById('page-mobile-menu-button-request').onclick = () => {
  bodyElement.classList.remove('page-mobile-menu-open');
}
