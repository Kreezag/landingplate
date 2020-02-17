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
exports.push([module.i, ".layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  .main {\n    padding-bottom: 15vw;\n    overflow: inherit;\n    background-size: 100%;\n    background-image: url(\"assets/mobile/1_Main_screen.png\");\n  }\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n@media screen and (max-width: 1180px) {\n  .main__header-logo {\n    display: block;\n  }\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo {\n    display: block;\n  }\n}\n.main__header-logo-img-wr {\n  float: left;\n  margin-right: 18px;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-img-wr {\n    float: none;\n    margin-right: 0;\n  }\n}\n.main__header-logo-img {\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-img {\n    width: 140px;\n  }\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  font-size: 18px;\n  line-height: 1.2;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n  vertical-align: bottom;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-company {\n    margin-top: 4px;\n    float: none;\n  }\n}\n.main__menu-wr {\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__menu-wr {\n    display: none;\n  }\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 76px;\n}\n@media screen and (max-width: 1180px) {\n  .main__menu-list {\n    margin-right: 40px;\n  }\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item:first-child {\n  margin-left: 0;\n}\n.main__menu-item:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1180px) {\n  .main__menu-item {\n    margin: 0 16px;\n  }\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  text-decoration: none;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__title {\n  font-size: 3.8rem;\n  margin: 80px 0 42px;\n  line-height: 1.2;\n  max-width: 1000px;\n}\n@media screen and (max-width: 799px) {\n  .main__title {\n    font-size: 3.2rem;\n    line-height: 1.32;\n    margin-bottom: 22px;\n  }\n}\n.main__content {\n  max-width: 70%;\n}\n@media screen and (max-width: 799px) {\n  .main__content {\n    max-width: 100%;\n  }\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n@media screen and (max-width: 799px) {\n  .main__content-description {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n@media screen and (max-width: 799px) {\n  .main__content-info {\n    margin-top: 26px;\n  }\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  display: block;\n  margin-top: 92px;\n  height: 60px;\n}\n@media screen and (max-width: 799px) {\n  .main__apps-wr {\n    margin-top: 50px;\n  }\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__apps {\n    margin: 0 -4px;\n  }\n}\n.main__app {\n  color: #171E28;\n  display: flex;\n  padding: 4px 20px;\n  text-decoration: none;\n  border: 2px solid #ffffff;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 230px;\n  height: 60px;\n  margin-right: 30px;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .main__app {\n    width: 140px;\n    height: 40px;\n    margin: 4px;\n  }\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n@media screen and (max-width: 799px) {\n  .main__app--android {\n    background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n  }\n  .main__app--android:hover,\n  .main__app--android:focus {\n    background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n@media screen and (max-width: 799px) {\n  .main__app--ios {\n    background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n  }\n  .main__app--ios:hover,\n  .main__app--ios:focus {\n    background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  left: 51%;\n  bottom: 2.5%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\n@media screen and (max-width: 799px) {\n  .main__example {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: auto;\n    margin: 32px -12px 28px;\n  }\n}\n.main__example-img {\n  width: 690px;\n  height: auto;\n}\n@media screen and (max-width: 799px) {\n  .main__example-img {\n    width: 100%;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 600px) {\n  .disasters {\n    height: 440px;\n    margin-top: -16vw;\n    margin-bottom: -16vw;\n  }\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n@media screen and (max-width: 600px) {\n  .disasters__bg {\n    background-image: url(\"assets/mobile/2_Photo.png\");\n  }\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n@media screen and (max-width: 600px) {\n  .disasters__text {\n    line-height: 1.4;\n  }\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 799px) {\n  .plan {\n    padding-top: calc(15vw + 4px*36);\n    background-position: center 80px;\n    background-image: url(\"assets/mobile/3_Graphic.png\");\n    background-size: 100%;\n  }\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n@media screen and (max-width: 799px) {\n  .plan__description {\n    font-size: 1.2rem;\n    line-height: 2.5rem;\n    margin-bottom: 8px;\n  }\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto 140px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__title {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: 92px;\n  }\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n  flex-direction: row;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item {\n    flex-direction: column;\n    padding: 48px 16px 16px;\n    margin-bottom: 40px;\n  }\n  .plan__benefits-item:last-child {\n    margin-bottom: 0;\n  }\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n  flex-direction: row-reverse;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse {\n    flex-direction: column;\n  }\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img-wr {\n    width: 120px;\n    height: 290px;\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img-wr {\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-header {\n    font-size: 1.7rem;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-text {\n    line-height: 1.9;\n  }\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n}\n@media screen and (max-width: 800px) {\n  .quote {\n    padding-top: 0;\n  }\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n  overflow-x: visible;\n}\n@media screen and (min-width: 2000px) {\n  .quote__bg {\n    background-size: 100%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .quote__bg {\n    background-position: top center;\n    background-image: url(\"assets/mobile/4_Background for quote.png\");\n    background-size: 100%;\n  }\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 31.2px;\n  }\n}\n.quote__main {\n  width: 46.5%;\n  display: inline-block;\n  padding-top: 10%;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .quote__main {\n    padding-top: 72px;\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -1.65rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 1.2rem;\n  left: 0.5rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: 24px;\n}\n@media screen and (max-width: 799px) {\n  .quote__main-text-name {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n@media screen and (max-width: 799px) {\n  .quote__img-wr {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 32px;\n  }\n}\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n@media screen and (max-width: 799px) {\n  .quote__img {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 64px 0 88px;\n    background-image: url(\"assets/mobile/5_Background for form.png\");\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 56px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-button {\n    padding: 8px 20px;\n  }\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-title {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: 8px;\n  }\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.9;\n    margin-top: 16px;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    display: block;\n    padding: 12px 0;\n    margin: 0 -6px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n    width: 140px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n", "",{"version":3,"sources":["/home/kreez/Projects/landingplate/src/less/variables.less","index.less","/home/kreez/Projects/landingplate/src/less/main.less","/home/kreez/Projects/landingplate/src/less/disasters.less","/home/kreez/Projects/landingplate/src/less/plan.less","/home/kreez/Projects/landingplate/src/less/quote.less","/home/kreez/Projects/landingplate/src/less/contacts.less","/home/kreez/Projects/landingplate/src/less/footer.less","/home/kreez/Projects/landingplate/src/less/index.less"],"names":[],"mappings":"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","file":"index.less","sourcesContent":["\n@pad: 4px;\n\n@primary: #1CCDD3;\n@gray: #7B8B9A;\n@dark: #171E28;\n\n@desktop-max: 1180px;\n@desktop-min: 800px;\n\n@tablet-max: @desktop-min - 1px;\n@tablet-min: 600px;\n\n@mobile-max: @tablet-min - 1px;\n@mobile-min: 320px;\n\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 @pad*12.5;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: 0 @pad*4;\n  }\n}\n\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n\n.borderGradient {\n  position: relative;\n  border-radius: @pad*2;\n  background-clip: padding-box;\n  display: inline-block;\n  border: @pad/2 solid transparent;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    margin: -@pad/2;\n    border-radius: inherit;\n    background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  }\n}\n",".layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .layout {\n    padding: 0 16px;\n  }\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  .main {\n    padding-bottom: 15vw;\n    overflow: inherit;\n    background-size: 100%;\n    background-image: url(\"assets/mobile/1_Main_screen.png\");\n  }\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .main__layout {\n    padding: 0 16px;\n  }\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n@media screen and (max-width: 1180px) {\n  .main__header-logo {\n    display: block;\n  }\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo {\n    display: block;\n  }\n}\n.main__header-logo-img-wr {\n  float: left;\n  margin-right: 18px;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-img-wr {\n    float: none;\n    margin-right: 0;\n  }\n}\n.main__header-logo-img {\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-img {\n    width: 140px;\n  }\n}\n.main__header-logo-company {\n  color: #7B8B9A;\n  float: left;\n  font-size: 18px;\n  line-height: 1.2;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n  vertical-align: bottom;\n}\n.main__header-logo-company:hover,\n.main__header-logo-company:focus {\n  text-decoration: underline;\n}\n@media screen and (max-width: 799px) {\n  .main__header-logo-company {\n    margin-top: 4px;\n    float: none;\n  }\n}\n.main__menu-wr {\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__menu-wr {\n    display: none;\n  }\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 76px;\n}\n@media screen and (max-width: 1180px) {\n  .main__menu-list {\n    margin-right: 40px;\n  }\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item:first-child {\n  margin-left: 0;\n}\n.main__menu-item:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1180px) {\n  .main__menu-item {\n    margin: 0 16px;\n  }\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover,\n.main__menu-item-link:focus {\n  text-decoration: none;\n  color: #1CCDD3;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  text-decoration: none;\n}\n.main__menu-button:hover,\n.main__menu-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.main__title {\n  font-size: 3.8rem;\n  margin: 80px 0 42px;\n  line-height: 1.2;\n  max-width: 1000px;\n}\n@media screen and (max-width: 799px) {\n  .main__title {\n    font-size: 3.2rem;\n    line-height: 1.32;\n    margin-bottom: 22px;\n  }\n}\n.main__content {\n  max-width: 70%;\n}\n@media screen and (max-width: 799px) {\n  .main__content {\n    max-width: 100%;\n  }\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n@media screen and (max-width: 799px) {\n  .main__content-description {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n@media screen and (max-width: 799px) {\n  .main__content-info {\n    margin-top: 26px;\n  }\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  display: block;\n  margin-top: 92px;\n  height: 60px;\n}\n@media screen and (max-width: 799px) {\n  .main__apps-wr {\n    margin-top: 50px;\n  }\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n  display: flex;\n}\n@media screen and (max-width: 799px) {\n  .main__apps {\n    margin: 0 -4px;\n  }\n}\n.main__app {\n  color: #171E28;\n  display: flex;\n  padding: 4px 20px;\n  text-decoration: none;\n  border: 2px solid #ffffff;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 230px;\n  height: 60px;\n  margin-right: 30px;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover,\n.main__app:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .main__app {\n    width: 140px;\n    height: 40px;\n    margin: 4px;\n  }\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover,\n.main__app--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n@media screen and (max-width: 799px) {\n  .main__app--android {\n    background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n  }\n  .main__app--android:hover,\n  .main__app--android:focus {\n    background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover,\n.main__app--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n@media screen and (max-width: 799px) {\n  .main__app--ios {\n    background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n  }\n  .main__app--ios:hover,\n  .main__app--ios:focus {\n    background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  left: 51%;\n  bottom: 2.5%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\n@media screen and (max-width: 799px) {\n  .main__example {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: auto;\n    margin: 32px -12px 28px;\n  }\n}\n.main__example-img {\n  width: 690px;\n  height: auto;\n}\n@media screen and (max-width: 799px) {\n  .main__example-img {\n    width: 100%;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 600px) {\n  .disasters {\n    height: 440px;\n    margin-top: -16vw;\n    margin-bottom: -16vw;\n  }\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n@media screen and (max-width: 600px) {\n  .disasters__bg {\n    background-image: url(\"assets/mobile/2_Photo.png\");\n  }\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .disasters__layout {\n    padding: 0 16px;\n  }\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n@media screen and (max-width: 600px) {\n  .disasters__text {\n    line-height: 1.4;\n  }\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n@media screen and (max-width: 799px) {\n  .plan {\n    padding-top: calc(15vw + 4px*36);\n    background-position: center 80px;\n    background-image: url(\"assets/mobile/3_Graphic.png\");\n    background-size: 100%;\n  }\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .plan__layout {\n    padding: 0 16px;\n  }\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n@media screen and (max-width: 799px) {\n  .plan__description {\n    font-size: 1.2rem;\n    line-height: 2.5rem;\n    margin-bottom: 8px;\n  }\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto 140px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__title {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: 92px;\n  }\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n  flex-direction: row;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item {\n    flex-direction: column;\n    padding: 48px 16px 16px;\n    margin-bottom: 40px;\n  }\n  .plan__benefits-item:last-child {\n    margin-bottom: 0;\n  }\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n  flex-direction: row-reverse;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse {\n    flex-direction: column;\n  }\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img-wr {\n    width: 120px;\n    height: 290px;\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img-wr {\n    margin: 0 auto;\n  }\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item--inverse .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-img {\n    transform: translate(0, -23%);\n  }\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-header {\n    font-size: 1.7rem;\n  }\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n@media screen and (max-width: 799px) {\n  .plan__benefits-item-content-text {\n    line-height: 1.9;\n  }\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n}\n@media screen and (max-width: 800px) {\n  .quote {\n    padding-top: 0;\n  }\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n  overflow-x: visible;\n}\n@media screen and (min-width: 2000px) {\n  .quote__bg {\n    background-size: 100%;\n  }\n}\n@media screen and (max-width: 800px) {\n  .quote__bg {\n    background-position: top center;\n    background-image: url(\"assets/mobile/4_Background for quote.png\");\n    background-size: 100%;\n  }\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .quote__layout {\n    padding: 0 31.2px;\n  }\n}\n.quote__main {\n  width: 46.5%;\n  display: inline-block;\n  padding-top: 10%;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .quote__main {\n    padding-top: 72px;\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -1.65rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 1.2rem;\n  left: 0.5rem;\n  width: 0.5rem;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: 24px;\n}\n@media screen and (max-width: 799px) {\n  .quote__main-text-name {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n@media screen and (max-width: 799px) {\n  .quote__img-wr {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 32px;\n  }\n}\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n@media screen and (max-width: 799px) {\n  .quote__img {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n}\n@media screen and (max-width: 799px) {\n  .contacts {\n    padding: 64px 0 88px;\n    background-image: url(\"assets/mobile/5_Background for form.png\");\n  }\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .contacts__layout {\n    flex-direction: column-reverse;\n  }\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form {\n    float: none;\n    width: 100%;\n    margin-top: 56px;\n  }\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-in {\n    margin: 0 auto;\n  }\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control--message .contacts__form-control-label:before {\n  margin-bottom: 4px;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-input:hover,\n.contacts__form-control-area:hover,\n.contacts__form-control-input:focus,\n.contacts__form-control-area:focus {\n  box-shadow: 0 0 14px 2px #07C7CA;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 799px) {\n  .contacts__form-button {\n    padding: 8px 20px;\n  }\n}\n.contacts__form-button:hover,\n.contacts__form-button:focus {\n  box-shadow: 4px 4px 14px -4px #07C7CA;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -12px;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.contacts__info-in {\n  width: 100%;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-in {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-title {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: 8px;\n  }\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n  font-size: 1rem;\n}\n@media screen and (max-width: 799px) {\n  .contacts__info-description {\n    line-height: 1.9;\n    margin-top: 16px;\n  }\n}\n.footer {\n  background-color: #171E28;\n  padding: 28px 0;\n}\n@media screen and (max-width: 799px) {\n  .footer {\n    padding-top: 24px;\n  }\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    padding: 0 16px;\n  }\n}\n@media screen and (max-width: 799px) {\n  .footer__layout {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n.footer__copy {\n  text-transform: uppercase;\n}\n.footer__buttons {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-width: 799px) {\n  .footer__buttons {\n    display: block;\n    padding: 12px 0;\n    margin: 0 -6px;\n  }\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 4px 12px;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover,\n.footer__button:focus {\n  background-color: #171E28;\n}\n@media screen and (max-width: 799px) {\n  .footer__button {\n    margin: 4px;\n    width: 140px;\n  }\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover,\n.footer__button--android:focus {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover,\n.footer__button--ios:focus {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-right: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n  display: inline-block;\n}\n.footer__gdpr-item:hover,\n.footer__gdpr-item:active {\n  text-decoration: underline;\n}\n.footer__gdpr-item:last-child {\n  margin-right: 0;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n@media screen and (max-width: 799px) {\n  html {\n    font-size: 12px;\n  }\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n* {\n  box-sizing: border-box;\n}\na:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n","@import \"variables\";\n\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: @pad*11.5 0 calc(15vw - @pad*6); // NOTE: (x)vw - overlap by disaster block\n  position: relative;\n  overflow-x: hidden;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-bottom: 15vw;\n    overflow: inherit;\n    background-size: 100%;\n    background-image: url(\"/../assets/mobile/1_Main_screen.png\");\n  }\n}\n\n.main__layout {\n  .layout();\n  .layout();\n  position: relative;\n  z-index: 2;\n}\n\n.main__header {\n  font-size: 1rem;\n  height: @pad*11.5;\n  max-height: @pad*11.5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n\n  @media screen and (max-width: @desktop-max) {\n    display: block;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    display: block;\n  }\n}\n\n.main__header-logo-img-wr {\n  float: left;\n  margin-right: 18px;\n\n  @media screen and (max-width: @tablet-max) {\n    float: none;\n    margin-right: 0;\n  }\n}\n\n.main__header-logo-img {\n  display: flex;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 140px;\n  }\n}\n\n.main__header-logo-company {\n  color: @gray;\n  float: left;\n  font-size: 18px;\n  line-height: 1.2;\n  display: inline-flex;\n  align-self: flex-end;\n  text-decoration: none;\n  vertical-align: bottom;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    margin-top: @pad;\n    float: none;\n  }\n}\n\n.main__menu-wr {\n  display: flex;\n\n  @media screen and (max-width: @tablet-max) {\n    display: none;\n  }\n}\n\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: @pad*19;\n\n  @media screen and (max-width: @desktop-max) {\n    margin-right: @pad*10;\n  }\n}\n\n.main__menu-item {\n  margin: 0 @pad*7;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  @media screen and (max-width: @desktop-max) {\n    margin: 0 @pad*4;\n  }\n}\n\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: @primary;\n  }\n}\n\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.main__title {\n  font-size: 3.8rem;\n  margin: @pad*20 0 @pad*10.5;\n  line-height: 1.2;\n  max-width: 1000px;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 3.2rem;\n    line-height: 1.32;\n    margin-bottom: @pad*5.5;\n  }\n}\n\n.main__content {\n  max-width: 70%;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 100%;\n  }\n}\n\n.main__content-description {\n  color: @gray;\n  width: 70%;\n  line-height: 1.6;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n\n.main__content-info {\n  font-weight: bold;\n  margin-top: @pad*8;\n  color: @primary;\n  font-size: 1.1rem;\n\n  @media screen and (max-width: @tablet-max) {\n    margin-top: @pad*6.5;\n  }\n}\n\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  display: block;\n  margin-top: @pad*23;\n  height: 60px;\n\n  @media screen and (max-width: @tablet-max) {\n    margin-top: @pad*12.5;\n  }\n}\n\n.main__apps {\n  .borderGradientParent();\n  display: flex;\n\n  @media screen and (max-width: @tablet-max) {\n    margin: 0 -@pad;\n  }\n}\n\n.main__app {\n  color: @dark;\n  border-radius: @pad*2;\n  display: flex;\n  padding: @pad @pad*5;\n  text-decoration: none;\n  border: 2px solid #ffffff;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n  width: 230px;\n  height: 60px;\n  margin-right: @pad*7.5;\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    width: 140px;\n    height: 40px;\n    margin: @pad;\n  }\n}\n\n.main__app--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_big_inverse.svg\");\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    background-image: url(\"/../assets/icons/Google_play_icon_small.svg\");\n\n    &:hover,\n    &:focus {\n      background-image: url(\"/../assets/icons/Google_play_icon_small_inverse.svg\");\n    }\n  }\n}\n\n.main__app--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_big.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_big_inverse.svg\");\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    background-image: url(\"/../assets/icons/APP_Store_icon_small.svg\");\n\n    &:hover,\n    &:focus {\n      background-image: url(\"/../assets/icons/APP_Store_icon_small_inverse.svg\");\n    }\n  }\n}\n\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.main__example {\n  position: absolute;\n  left: 51%;\n  bottom: 2.5%;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n\n  @media screen and (max-width: @tablet-max) {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: auto;\n    margin: @pad*8 -@pad*3 @pad*7;\n  }\n}\n\n.main__example-img {\n  width: 690px;\n  height: auto;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    max-width: 500px;\n    margin: 0 auto;\n  }\n}\n","@import \"variables\";\n\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width: @tablet-min) {\n    height: 440px;\n    margin-top: -16vw;\n    margin-bottom: -16vw;\n  }\n}\n\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/4_Photo.png\");\n  background-position: center center; // NOTE: (x)vw - for disaster block\n  background-size: 100% 100%;\n\n  @media screen and (max-width: @tablet-min) {\n    background-image: url(\"/../assets/mobile/2_Photo.png\");\n  }\n}\n\n.disasters__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n}\n\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n\n  @media screen and (max-width: @tablet-min) {\n    line-height: 1.4;\n  }\n}\n","@import \"variables\";\n\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + @pad*48);\n  padding-bottom: @pad*25;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: calc(15vw + @pad*36);\n    background-position: center 80px;\n    background-image: url(\"/../assets/mobile/3_Graphic.png\");\n    background-size: 100%;\n  }\n}\n\n.plan__layout {\n  .layout();\n}\n\n.plan__description {\n  color: @gray;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: @pad*5.5;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 1.2rem;\n    line-height: 2.5rem;\n    margin-bottom: @pad*2;\n  }\n}\n\n.plan__title {\n  text-align: center;\n  color: @dark;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto @pad*35;\n  font-weight: bold;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 2.1rem;\n    line-height: 1.4;\n    margin-bottom: @pad*23;\n  }\n}\n\n.plan__benefits {\n}\n\n.plan__benefits-list {\n  width: 100%;\n}\n\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: @pad*2;\n  display: flex;\n  justify-content: space-between;\n  padding: @pad*12 @pad*15;\n  box-sizing: border-box;\n  margin-bottom: @pad*25;\n  min-height: 340px;\n  flex-direction: row;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n    padding: @pad*12 @pad*4 @pad*4;\n    margin-bottom: @pad*10;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n\n.plan__benefits-item--inverse {\n  background-color: @dark;\n  flex-direction: row-reverse;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n  }\n}\n\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 120px;\n    height: 290px;\n    margin: 0 auto;\n  }\n\n  .plan__benefits-item--inverse & {\n    margin-left: 13%;\n    margin-right: 0;\n\n    @media screen and (max-width: @tablet-max) {\n      margin: 0 auto;\n    }\n  }\n}\n\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(@pad*8, -50%);\n\n  .plan__benefits-item--inverse & {\n    transform: translate(-@pad*8, -50%);\n\n    @media screen and (max-width: @tablet-max) {\n      transform: translate(0, -23%);\n    }\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    transform: translate(0, -23%);\n  }\n}\n\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: @pad*4;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    padding-bottom: 0;\n  }\n}\n\n.plan__benefits-item-content-header {\n  color: @dark;\n  font-size: 2.1rem;\n  margin-bottom: @pad*3.5;\n  font-weight: bold;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 1.7rem;\n  }\n\n  .plan__benefits-item--inverse & {\n    color: #ffffff;\n  }\n}\n\n.plan__benefits-item-content-text {\n  color: @gray;\n  line-height: 1.45;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.9;\n  }\n}\n","@import \"variables\";\n\n.quote {\n  background-color: #EBEFEF;\n  padding-top: @pad*20;\n\n  @media screen and (max-width: @desktop-min) {\n    padding-top: 0;\n  }\n}\n\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n  overflow-x: visible;\n\n  @media screen and (min-width: 2000px) { //NOTE: hardcoded\n    background-size: 100%;\n  }\n\n  @media screen and (max-width: @desktop-min) {\n    background-position: top center;\n    background-image: url(\"/../assets/mobile/4_Background for quote.png\");\n    background-size: 100%;\n  }\n}\n\n.quote__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n  padding-bottom: @pad*20;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: 0 @pad*7.8;\n  }\n}\n\n.quote__main {\n  width: 46.5%;\n  display: inline-block;\n  padding-top: 10%;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: @pad*18;\n    width: 100%;\n    line-height: 1.9;\n  }\n}\n\n.quote__main-quote {\n  margin-top: @pad*25;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: -1.65rem;\n    width: 0.5rem;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 1.2;\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  &:after {\n    position: relative;\n    display: inline-block;\n    top: 1.2rem;\n    left: 0.5rem;\n    width: 0.5rem;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 0;\n    font-weight: bold;\n    font-style: normal;\n  }\n}\n\n.quote__main-text {\n}\n\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n  margin-top: @pad*6;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.2;\n    font-size: 1.2rem;\n  }\n}\n\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n\n  @media screen and (max-width: @tablet-max) {\n    width: 100%;\n    position: relative;\n    height: auto;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: @pad*8;\n  }\n}\n\n.quote__img {\n  display: inline-flex;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 290px;\n    height: auto;\n    max-height: 400px;\n  }\n}\n","@import \"variables\";\n\n.contacts {\n  padding: @pad*37.5 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/8_Background for form.png\");\n  background-position: 100% bottom;\n  background-size: 100%;\n  position: relative;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*16 0 @pad*22;\n    background-image: url(\"/../assets/mobile/5_Background for form.png\");\n  }\n}\n\n.contacts__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column-reverse;\n  }\n}\n\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n  margin: 0;\n\n  @media screen and (max-width: @tablet-max) {\n    float: none;\n    width: 100%;\n    margin-top: @pad*14;\n  }\n}\n\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    margin: 0 auto;\n  }\n}\n\n.contacts__form-control {\n  .borderGradientParent();\n  width: 100%;\n}\n\n.contacts__form-control-label {\n  .borderGradient();\n  width: 100%;\n  margin-bottom: @pad*2.5;\n\n  .contacts__form-control--message & {\n    margin-bottom: 0;\n  }\n\n  .contacts__form-control--message &:before {\n    margin-bottom: 4px;\n  }\n}\n\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: @pad*2.5 @pad*4;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n\n  &::placeholder {\n    color: @dark;\n    font-size: 0.95rem;\n    font-family: 'Titillium Web', 'monospace', 'sans-serif';\n    vertical-align: bottom;\n    letter-spacing: 0.5px;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 0 0 14px 2px #07C7CA;\n  }\n}\n\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: @pad*3.5;\n}\n\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.7;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n\n  @media screen and (max-width: @tablet-max) {\n    padding: @pad*2 @pad*5;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 4px 4px 14px -4px #07C7CA;\n  }\n}\n\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: -@pad*3;\n\n  @media screen and (max-width: @tablet-max) {\n    margin-left: 0;\n    width: 100%;\n    margin-top: 0;\n  }\n}\n\n.contacts__info-in {\n  width: 100%;\n\n  @media screen and (max-width: @tablet-max) {\n    max-width: 450px;\n    margin: 0 auto;\n  }\n}\n\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 2rem;\n    line-height: 1.5;\n    margin-top: @pad*2;\n  }\n}\n\n.contacts__info-description {\n  color: @gray;\n  margin-top: @pad*7;\n  line-height: 1.5;\n  font-size: 1rem;\n\n  @media screen and (max-width: @tablet-max) {\n    line-height: 1.9;\n    margin-top: @pad*4;\n  }\n}\n","@import \"variables\";\n\n.footer {\n  background-color: @dark;\n  padding: @pad*7 0;\n\n  @media screen and (max-width: @tablet-max) {\n    padding-top: @pad*6;\n  }\n}\n\n.footer__layout {\n  .layout();\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: @gray;\n  font-size: 0.75rem;\n\n  @media screen and (max-width: @tablet-max) {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n\n.footer__copy {\n  text-transform: uppercase;\n}\n\n.footer__buttons {\n  display: flex;\n  .borderGradientParent();\n\n  @media screen and (max-width: @tablet-max) {\n    display: block;\n    padding: @pad*3 0;\n    margin: 0 -@pad*1.5;\n  }\n}\n\n.footer__button {\n  color: @dark;\n  padding: 0 @pad;\n  margin: @pad @pad*3;\n  width: 154px;\n  height: 40px;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover,\n  &:focus {\n    background-color: @dark;\n  }\n\n  @media screen and (max-width: @tablet-max) {\n    margin: @pad;\n    width: 140px;\n  }\n}\n\n.footer__button--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_small.svg\");\n\n  &:hover,\n  &:focus {\n    background-image: url(\"/../assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n\n.footer__gdpr {\n  text-transform: uppercase;\n}\n\n.footer__gdpr-item {\n  margin-right: @pad*12;\n  color: @gray;\n  text-decoration: none;\n  display: inline-block;\n\n  &:hover,\n  &:active {\n    text-decoration: underline;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n}\n","@import \"main\";\n@import \"disasters\";\n@import \"plan\";\n@import \"quote\";\n@import \"contacts\";\n@import \"footer\";\n\n\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  line-height: 1.45;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n\n  @media screen and (max-width: @tablet-max) {\n    font-size: 12px;\n  }\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na, button, input, textarea {\n  &:focus {\n    outline: none;\n  }\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0;\n}\n\n.titled {\n  color: @primary;\n}\n"]}]);
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