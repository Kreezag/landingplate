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
exports.push([module.i, ".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__header-logo-img {\n  float: left;\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n  overflow-x: hidden;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -30px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 20px;\n  left: 10px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text {\n  margin-top: 24px;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 68px 0;\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 60px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.8;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    padding: 12px 8px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n", "",{"version":3,"sources":["/Users/kreezag/Projects/landingplate/src/less/greed.less","index.less","/Users/kreezag/Projects/landingplate/src/less/variables.less","/Users/kreezag/Projects/landingplate/src/less/main.less","/Users/kreezag/Projects/landingplate/src/less/disasters.less","/Users/kreezag/Projects/landingplate/src/less/plan.less","/Users/kreezag/Projects/landingplate/src/less/quote.less","/Users/kreezag/Projects/landingplate/src/less/contacts.less","/Users/kreezag/Projects/landingplate/src/less/footer.less","/Users/kreezag/Projects/landingplate/src/less/index.less"],"names":[],"mappings":"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","file":"index.less","sourcesContent":["\n.row {\n  margin: 0 -10px\n}\n\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n",".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__header-logo-img {\n  float: left;\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n  overflow-x: hidden;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -30px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 20px;\n  left: 10px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text {\n  margin-top: 24px;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 68px 0;\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 60px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.8;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    padding: 12px 8px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n","\n@pad: 4px;\n@primary: #1CCDD3;\n@gray: #7B8B9A;\n@dark: #171E28;\n\n@desktop-min: 800px;\n\n@tablet-max: @desktop-min - 1px;\n@tablet-min: 600px;\n\n@mobile-max: @tablet-max - 1px;\n@mobile-min: 320px;\n\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 @pad*12.5;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: 0 @pad*4;\n  }\n}\n\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n\n.borderGradient {\n  position: relative;\n  border-radius: @pad*2;\n  background-clip: padding-box;\n  display: inline-block;\n  border: @pad/2 solid transparent;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    margin: -@pad/2;\n    border-radius: inherit;\n    background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  }\n}\n","@import \"variables\";\n\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: @pad*11.5 0 calc(15vw - @pad*6); // NOTE: (x)vw - overlap by disaster block\n  position: relative;\n  overflow-x: hidden;\n}\n\n.main__layout {\n  .layout();\n  position: relative;\n  z-index: 2;\n}\n\n.main__header {\n  font-size: 1rem;\n  height: @pad*11.5;\n  max-height: @pad*11.5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n\n.main__header-logo-img {\n  float: left;\n}\n\n.main__header-logo-company {\n  color: @gray;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n}\n\n.main__menu-wr {\n}\n\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: @pad*12;\n}\n\n.main__menu-item {\n  margin: 0 @pad*7;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: @primary;\n  }\n}\n\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.main__content {\n  max-width: 70%;\n}\n\n.main__content-header {\n  font-size: 3.8rem;\n  margin: @pad*20 0 @pad*12;\n  line-height: 1.15;\n}\n\n.main__content-description {\n  color: @gray;\n  width: 70%;\n  line-height: 1.6;\n}\n\n.main__content-info {\n  font-weight: bold;\n  margin-top: @pad*8;\n  color: @primary;\n  font-size: 1.1rem;\n}\n\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: @pad*23;\n  height: 60px;\n}\n\n.main__apps {\n  .borderGradientParent();\n}\n\n.main__app {\n  color: @dark;\n  border-radius: @pad*2;\n  display: inline-block;\n  padding: @pad @pad*5;\n  text-decoration: none;\n  margin-right: @pad*7.5;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n}\n\n.main__app--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_big_inverse.svg\");\n  }\n}\n\n.main__app--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_big_inverse.svg\");\n  }\n}\n\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n","@import \"variables\";\n\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/4_Photo.png\");\n  background-position: center center; // NOTE: (x)vw - for disaster block\n  background-size: 100% 100%;\n}\n\n.disasters__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n}\n\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n","@import \"variables\";\n\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + @pad*48); //\n  padding-bottom: @pad*25;\n}\n\n.plan__layout {\n  .layout();\n}\n\n.plan__description {\n  color: @gray;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: @pad*5.5;\n}\n\n.plan__title {\n  text-align: center;\n  color: @dark;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n.plan__benefits {\n  margin-top: @pad*35;\n}\n\n.plan__benefits-list {\n  width: 100%;\n}\n\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: @pad*2;\n  display: flex;\n  justify-content: space-between;\n  padding: @pad*12 @pad*15;\n  box-sizing: border-box;\n  margin-bottom: @pad*25;\n  min-height: 340px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.plan__benefits-item--inverse {\n  background-color: @dark;\n}\n\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n\n  .plan__benefits-item--inverse & {\n    margin-left: 13%;\n    margin-right: 0;\n  }\n}\n\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(@pad*8, -50%);\n\n  .plan__benefits-item--inverse & {\n    transform: translate(-@pad*8, -50%);\n  }\n}\n\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: @pad*4;\n}\n\n.plan__benefits-item-content-header {\n  color: @dark;\n  font-size: 2.1rem;\n  margin-bottom: @pad*3.5;\n  font-weight: bold;\n\n  .plan__benefits-item--inverse & {\n    color: #ffffff;\n  }\n}\n\n.plan__benefits-item-content-text {\n  color: @gray;\n  line-height: 1.45;\n}\n","@import \"variables\";\n\n.quote {\n  background-color: #EBEFEF;\n  padding-top: @pad*20;\n  overflow-x: hidden;\n}\n\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n\n.quote__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n  padding-bottom: @pad*20;\n}\n\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n\n.quote__main-quote {\n  margin-top: @pad*25;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: -30px;\n    width: 10px;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 1.2;\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  &:after {\n    position: relative;\n    display: inline-block;\n    top: 20px;\n    left: 10px;\n    width: 10px;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 0;\n    font-weight: bold;\n    font-style: normal;\n  }\n}\n\n.quote__main-text {\n  margin-top: @pad*6;\n}\n\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n\n.quote__img-wr {\n  width: 55%; //TODO:\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n","@import \"variables\";\n\n.contacts {\n  padding: @pad*37.5 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*17 0;\n  }\n}\n\n.contacts__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column-reverse;\n  }\n}\n\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n\n  @media screen and (max-width: @tablet-max) {\n    float: none;\n    width: 100%;\n    margin-top: @pad*15;\n  }\n}\n\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    margin: 0 auto;\n  }\n}\n\n.contacts__form-control {\n  .borderGradientParent();\n  width: 100%;\n}\n\n.contacts__form-control-label {\n  .borderGradient();\n  width: 100%;\n  margin-bottom: @pad*2.5; //TODO: 1px design hardcode\n\n  .contacts__form-control--message & {\n    margin-bottom: 0;\n  }\n\n  .contacts__form-control--message &:before {\n    margin-bottom: 4px;\n  }\n}\n\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: @pad*2.5 @pad*4;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n\n  &::placeholder {\n    color: @dark;\n    font-size: 0.95rem;\n    font-family: 'Titillium Web', 'monospace', 'sans-serif';\n    vertical-align: bottom;\n    letter-spacing: 0.5px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 14px 2px #07C7CA;\n  }\n}\n\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: @pad*3.5;\n}\n\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -@pad*3;\n\n  @media screen and (max-width: @tablet-max) {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n\n.contacts__info-in {\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n\n.contacts__info-description {\n  color: @gray;\n  margin-top: @pad*7;\n  line-height: 1.5;\n  font-size: 1rem;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.8;\n  }\n}\n","@import \"variables\";\n\n.footer {\n  background-color: @dark;\n  padding: @pad*7 0;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: @pad*6;\n  }\n}\n\n.footer__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: @gray;\n  font-size: 0.75rem;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n\n.footer__copy {\n  text-transform: uppercase;\n}\n\n.footer__buttons {\n  display: flex;\n  .borderGradientParent();\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*3 @pad*2;\n  }\n}\n\n.footer__button {\n  color: @dark;\n  padding: 0 @pad;\n  margin: @pad @pad*3;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    margin: @pad;\n  }\n}\n\n.footer__button--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n\n.footer__gdpr {\n  text-transform: uppercase;\n}\n\n.footer__gdpr-item {\n  margin-right: @pad*12;\n  color: @gray;\n  text-decoration: none;\n  display: inline-block;\n\n  &:hover,\n  &:active {\n    text-decoration: underline;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n}\n","@import \"greed\";\n@import \"main\";\n@import \"disasters\";\n@import \"plan\";\n@import \"quote\";\n@import \"contacts\";\n@import \"footer\";\n\n\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 12px;\n  }\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na, button, input, textarea {\n  &:focus {\n    outline: none;\n  }\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0;\n}\n\n.titled {\n  color: @primary;\n}\n"]}]);
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