/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?-url&sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./src/less/index.less":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?-url&sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./src/less/index.less ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__header-logo-img {\n  float: left;\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 799px) {\n  .plan {\n    padding-top: calc(15vw + 4px*32);\n    background-position: center 30px;\n  }\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n@media screen and (max-width: 799px) {\n  .plan__description {\n    line-height: 2.5rem;\n    margin-bottom: 8px;\n  }\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto 140px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__title {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: 92px;\n  }\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n  flex-direction: row;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item {\n    flex-direction: column;\n    padding: 48px 16px 16px;\n    margin-bottom: 40px;\n  }\n  .plan__benefits-item:last-child {\n    margin-bottom: 0;\n  }\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n  flex-direction: row-reverse;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse {\n    flex-direction: column;\n  }\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img-wr {\n    width: 130px;\n    height: 290px;\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img-wr {\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-header {\n    font-size: 1.7rem;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-text {\n    line-height: 1.9;\n  }\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n  overflow-x: hidden;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 31.2px;\n  }\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .quote__main {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -1.65rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 1.2rem;\n  left: 0.5rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: 24px;\n}\n@media screen and (max-width: 799px) {\n  .quote__main-text-name {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n@media screen and (max-width: 799px) {\n  .quote__img-wr {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 32px;\n  }\n}\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n@media screen and (max-width: 799px) {\n  .quote__img {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 64px 0 88px;\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 56px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-button {\n    padding: 8px 20px;\n  }\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-title {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: 8px;\n  }\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.9;\n    margin-top: 16px;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    padding: 12px 8px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n    width: 140px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n", "",{"version":3,"sources":["/home/kreez/Projects/landingplate/src/less/variables.less","index.less","/home/kreez/Projects/landingplate/src/less/main.less","/home/kreez/Projects/landingplate/src/less/disasters.less","/home/kreez/Projects/landingplate/src/less/plan.less","/home/kreez/Projects/landingplate/src/less/quote.less","/home/kreez/Projects/landingplate/src/less/contacts.less","/home/kreez/Projects/landingplate/src/less/footer.less","/home/kreez/Projects/landingplate/src/less/index.less"],"names":[],"mappings":"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","file":"index.less","sourcesContent":["\n@pad: 4px;\n@primary: #1CCDD3;\n@gray: #7B8B9A;\n@dark: #171E28;\n\n@desktop-min: 800px;\n\n@tablet-max: @desktop-min - 1px;\n@tablet-min: 600px;\n\n@mobile-max: @tablet-min - 1px;\n@mobile-min: 320px;\n\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 @pad*12.5;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: 0 @pad*4;\n  }\n}\n\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n\n.borderGradient {\n  position: relative;\n  border-radius: @pad*2;\n  background-clip: padding-box;\n  display: inline-block;\n  border: @pad/2 solid transparent;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    margin: -@pad/2;\n    border-radius: inherit;\n    background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  }\n}\n",".layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__header-logo-img {\n  float: left;\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 799px) {\n  .plan {\n    padding-top: calc(15vw + 4px*32);\n    background-position: center 30px;\n  }\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n@media screen and (max-width: 799px) {\n  .plan__description {\n    line-height: 2.5rem;\n    margin-bottom: 8px;\n  }\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto 140px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__title {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: 92px;\n  }\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n  flex-direction: row;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item {\n    flex-direction: column;\n    padding: 48px 16px 16px;\n    margin-bottom: 40px;\n  }\n  .plan__benefits-item:last-child {\n    margin-bottom: 0;\n  }\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n  flex-direction: row-reverse;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse {\n    flex-direction: column;\n  }\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img-wr {\n    width: 130px;\n    height: 290px;\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img-wr {\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-header {\n    font-size: 1.7rem;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-text {\n    line-height: 1.9;\n  }\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n  overflow-x: hidden;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 31.2px;\n  }\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .quote__main {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -1.65rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 1.2rem;\n  left: 0.5rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: 24px;\n}\n@media screen and (max-width: 799px) {\n  .quote__main-text-name {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n@media screen and (max-width: 799px) {\n  .quote__img-wr {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 32px;\n  }\n}\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n@media screen and (max-width: 799px) {\n  .quote__img {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 64px 0 88px;\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 56px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-button {\n    padding: 8px 20px;\n  }\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-title {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: 8px;\n  }\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.9;\n    margin-top: 16px;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    padding: 12px 8px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n    width: 140px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n","@import \"variables\";\n\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: @pad*11.5 0 calc(15vw - @pad*6); // NOTE: (x)vw - overlap by disaster block\n  position: relative;\n  overflow-x: hidden;\n}\n\n.main__layout {\n  .layout();\n  position: relative;\n  z-index: 2;\n}\n\n.main__header {\n  font-size: 1rem;\n  height: @pad*11.5;\n  max-height: @pad*11.5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n\n.main__header-logo-img {\n  float: left;\n}\n\n.main__header-logo-company {\n  color: @gray;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n}\n\n.main__menu-wr {\n}\n\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: @pad*12;\n}\n\n.main__menu-item {\n  margin: 0 @pad*7;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: @primary;\n  }\n}\n\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.main__content {\n  max-width: 70%;\n}\n\n.main__content-header {\n  font-size: 3.8rem;\n  margin: @pad*20 0 @pad*12;\n  line-height: 1.15;\n}\n\n.main__content-description {\n  color: @gray;\n  width: 70%;\n  line-height: 1.6;\n}\n\n.main__content-info {\n  font-weight: bold;\n  margin-top: @pad*8;\n  color: @primary;\n  font-size: 1.1rem;\n}\n\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: @pad*23;\n  height: 60px;\n}\n\n.main__apps {\n  .borderGradientParent();\n}\n\n.main__app {\n  color: @dark;\n  border-radius: @pad*2;\n  display: inline-block;\n  padding: @pad @pad*5;\n  text-decoration: none;\n  margin-right: @pad*7.5;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n}\n\n.main__app--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_big_inverse.svg\");\n  }\n}\n\n.main__app--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_big_inverse.svg\");\n  }\n}\n\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n","@import \"variables\";\n\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/4_Photo.png\");\n  background-position: center center; // NOTE: (x)vw - for disaster block\n  background-size: 100% 100%;\n}\n\n.disasters__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n}\n\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n","@import \"variables\";\n\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + @pad*48);\n  padding-bottom: @pad*25;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: calc(15vw + @pad*32);\n    background-position: center 30px;\n  }\n}\n\n.plan__layout {\n  .layout();\n}\n\n.plan__description {\n  color: @gray;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: @pad*5.5;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 2.5rem;\n    margin-bottom: @pad*2;\n  }\n}\n\n.plan__title {\n  text-align: center;\n  color: @dark;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto @pad*35;\n  font-weight: bold;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: @pad*23;\n  }\n}\n\n.plan__benefits {\n}\n\n.plan__benefits-list {\n  width: 100%;\n}\n\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: @pad*2;\n  display: flex;\n  justify-content: space-between;\n  padding: @pad*12 @pad*15;\n  box-sizing: border-box;\n  margin-bottom: @pad*25;\n  min-height: 340px;\n  flex-direction: row;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n    padding: @pad*12 @pad*4 @pad*4;\n    margin-bottom: @pad*10;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n\n.plan__benefits-item--inverse {\n  background-color: @dark;\n  flex-direction: row-reverse;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n  }\n}\n\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 130px;\n    height: 290px;\n    margin: 0 auto;\n  }\n\n  .plan__benefits-item--inverse & {\n    margin-left: 13%;\n    margin-right: 0;\n\n    @media screen and (max-width: @tablet-max) {\n      margin: 0 auto;\n    }\n  }\n}\n\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(@pad*8, -50%);\n\n  .plan__benefits-item--inverse & {\n    transform: translate(-@pad*8, -50%);\n\n    @media screen and (max-width: @tablet-max) {\n      transform: translate(0, -23%);\n    }\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    transform: translate(0, -23%);\n  }\n}\n\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: @pad*4;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n\n.plan__benefits-item-content-header {\n  color: @dark;\n  font-size: 2.1rem;\n  margin-bottom: @pad*3.5;\n  font-weight: bold;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 1.7rem;\n  }\n\n  .plan__benefits-item--inverse & {\n    color: #ffffff;\n  }\n}\n\n.plan__benefits-item-content-text {\n  color: @gray;\n  line-height: 1.45;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.9;\n  }\n}\n","@import \"variables\";\n\n.quote {\n  background-color: #EBEFEF;\n  padding-top: @pad*20;\n  overflow-x: hidden;\n}\n\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n\n.quote__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n  padding-bottom: @pad*20;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: 0 @pad*7.8;\n  }\n}\n\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n\n.quote__main-quote {\n  margin-top: @pad*25;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: -1.65rem;\n    width: 0.5rem;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 1.2;\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  &:after {\n    position: relative;\n    display: inline-block;\n    top: 1.2rem;\n    left: 0.5rem;\n    width: 0.5rem;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 0;\n    font-weight: bold;\n    font-style: normal;\n  }\n}\n\n.quote__main-text {\n}\n\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: @pad*6;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: @pad*8;\n  }\n}\n\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n","@import \"variables\";\n\n.contacts {\n  padding: @pad*37.5 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*16 0 @pad*22;\n  }\n}\n\n.contacts__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column-reverse;\n  }\n}\n\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n\n  @media screen and (max-width: @tablet-max) {\n    float: none;\n    width: 100%;\n    margin-top: @pad*14;\n  }\n}\n\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    margin: 0 auto;\n  }\n}\n\n.contacts__form-control {\n  .borderGradientParent();\n  width: 100%;\n}\n\n.contacts__form-control-label {\n  .borderGradient();\n  width: 100%;\n  margin-bottom: @pad*2.5;\n\n  .contacts__form-control--message & {\n    margin-bottom: 0;\n  }\n\n  .contacts__form-control--message &:before {\n    margin-bottom: 4px;\n  }\n}\n\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: @pad*2.5 @pad*4;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n\n  &::placeholder {\n    color: @dark;\n    font-size: 0.95rem;\n    font-family: 'Titillium Web', 'monospace', 'sans-serif';\n    vertical-align: bottom;\n    letter-spacing: 0.5px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 14px 2px #07C7CA;\n  }\n}\n\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: @pad*3.5;\n}\n\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*2 @pad*5;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -@pad*3;\n\n  @media screen and (max-width: @tablet-max) {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n\n.contacts__info-in {\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: @pad*2;\n  }\n}\n\n.contacts__info-description {\n  color: @gray;\n  margin-top: @pad*7;\n  line-height: 1.5;\n  font-size: 1rem;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.9;\n    margin-top: @pad*4;\n  }\n}\n","@import \"variables\";\n\n.footer {\n  background-color: @dark;\n  padding: @pad*7 0;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: @pad*6;\n  }\n}\n\n.footer__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: @gray;\n  font-size: 0.75rem;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n\n.footer__copy {\n  text-transform: uppercase;\n}\n\n.footer__buttons {\n  display: flex;\n  .borderGradientParent();\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*3 @pad*2;\n  }\n}\n\n.footer__button {\n  color: @dark;\n  padding: 0 @pad;\n  margin: @pad @pad*3;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    margin: @pad;\n    width: 140px;\n  }\n}\n\n.footer__button--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n\n.footer__gdpr {\n  text-transform: uppercase;\n}\n\n.footer__gdpr-item {\n  margin-right: @pad*12;\n  color: @gray;\n  text-decoration: none;\n  display: inline-block;\n\n  &:hover,\n  &:active {\n    text-decoration: underline;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n}\n","@import \"main\";\n@import \"disasters\";\n@import \"plan\";\n@import \"quote\";\n@import \"contacts\";\n@import \"footer\";\n\n\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 12px;\n  }\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na, button, input, textarea {\n  &:focus {\n    outline: none;\n  }\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0;\n}\n\n.titled {\n  color: @primary;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/index.less */ "./src/less/index.less");
/* harmony import */ var _less_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_index_less__WEBPACK_IMPORTED_MODULE_0__);


console.log('TEST!!!');


/***/ }),

/***/ "./src/less/index.less":
/*!*****************************!*\
  !*** ./src/less/index.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!../../node_modules/less-loader/dist/cjs.js?sourceMap!./index.less */ "./node_modules/css-loader/dist/cjs.js?-url&sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./src/less/index.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map