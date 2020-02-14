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
exports.push([module.i, ".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__logo {\n  float: left;\n}\n.main__company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover {\n  text-decoration: underline;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -30px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 20px;\n  left: 10px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text {\n  margin-top: 24px;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: 100% center;\n  background-size: 100%;\n  position: relative;\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 6%;\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n  margin-top: -16px;\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n}\n.footer {\n  background-color: #171E28;\n  padding: 30px;\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n.footer__copy {\n  margin-right: 36px;\n  text-transform: uppercase;\n}\n.footer__buttons {\n  position: relative;\n  z-index: 1;\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 0 12px;\n  width: 154px;\n  max-height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover {\n  background-color: #171E28;\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-left: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n* {\n  box-sizing: border-box;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n", "",{"version":3,"sources":["/home/kreez/Projects/landingplate/src/less/greed.less","index.less","/home/kreez/Projects/landingplate/src/less/variables.less","/home/kreez/Projects/landingplate/src/less/main.less","/home/kreez/Projects/landingplate/src/less/disasters.less","/home/kreez/Projects/landingplate/src/less/plan.less","/home/kreez/Projects/landingplate/src/less/quote.less","/home/kreez/Projects/landingplate/src/less/contacts.less","/home/kreez/Projects/landingplate/src/less/footer.less","/home/kreez/Projects/landingplate/src/less/index.less"],"names":[],"mappings":"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","file":"index.less","sourcesContent":["\n.row {\n  margin: 0 -10px\n}\n\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n",".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n.borderGradient {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.borderGradient:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 calc(15vw - 4px*6);\n  position: relative;\n}\n.main__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__logo {\n  float: left;\n}\n.main__company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n}\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: 48px;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover {\n  text-decoration: underline;\n}\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 3.8rem;\n  margin: 80px 0 48px;\n  line-height: 1.15;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 92px;\n  height: 60px;\n}\n.main__apps {\n  position: relative;\n  z-index: 1;\n}\n.main__app {\n  color: #171E28;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.main__app:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.main__app:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.main__app:hover {\n  background-color: #171E28;\n}\n.main__app--android {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--android:hover {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--ios:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n}\n.disasters__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + 4px*48);\n  padding-bottom: 100px;\n}\n.plan__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 22px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 48px 60px;\n  box-sizing: border-box;\n  margin-bottom: 100px;\n  min-height: 340px;\n}\n.plan__benefits-item:last-child {\n  margin-bottom: 0;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n}\n.plan__benefits-item--inverse .plan__benefits-item-img-wr {\n  margin-left: 13%;\n  margin-right: 0;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item--inverse .plan__benefits-item-img {\n  transform: translate(-32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: 16px;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 2.1rem;\n  margin-bottom: 14px;\n  font-weight: bold;\n}\n.plan__benefits-item--inverse .plan__benefits-item-content-header {\n  color: #ffffff;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\n.quote {\n  background-color: #EBEFEF;\n  padding-top: 80px;\n}\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n.quote__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n.quote__main-quote {\n  margin-top: 100px;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n}\n.quote__main-quote:before {\n  position: absolute;\n  top: 0;\n  left: -30px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 1.2;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-quote:after {\n  position: relative;\n  display: inline-block;\n  top: 20px;\n  left: 10px;\n  width: 10px;\n  font-size: 2.2rem;\n  color: #1CCDD3;\n  line-height: 0;\n  font-weight: bold;\n  font-style: normal;\n}\n.quote__main-text {\n  margin-top: 24px;\n}\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n.quote__img-wr {\n  width: 55%;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: 100% center;\n  background-size: 100%;\n  position: relative;\n}\n.contacts__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n}\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n}\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n.contacts__form-control {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.contacts__form-control-label {\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.contacts__form-control-label:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.contacts__form-control--message .contacts__form-control-label {\n  margin-bottom: 0;\n}\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: 10px 16px;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n}\n.contacts__form-control-input::placeholder,\n.contacts__form-control-area::placeholder {\n  color: #171E28;\n  font-size: 0.95rem;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  vertical-align: bottom;\n  letter-spacing: 0.5px;\n}\n.contacts__form-control-area {\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 14px;\n}\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 20px;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 6%;\n}\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n  margin-top: -16px;\n}\n.contacts__info-description {\n  color: #7B8B9A;\n  margin-top: 28px;\n  line-height: 1.5;\n}\n.footer {\n  background-color: #171E28;\n  padding: 30px;\n}\n.footer__layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #7B8B9A;\n  font-size: 0.75rem;\n}\n.footer__copy {\n  margin-right: 36px;\n  text-transform: uppercase;\n}\n.footer__buttons {\n  position: relative;\n  z-index: 1;\n}\n.footer__button {\n  color: #171E28;\n  padding: 0 4px;\n  margin: 0 12px;\n  width: 154px;\n  max-height: 40px;\n  background: center center no-repeat #ffffff;\n  position: relative;\n  border-radius: 8px;\n  background-clip: padding-box;\n  display: inline-block;\n  border: 2px solid transparent;\n}\n.footer__button:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  margin: -2px;\n  border-radius: inherit;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n}\n.footer__button:not(:hover):before {\n  background-image: linear-gradient(0deg, #fff, #fff);\n}\n.footer__button:hover {\n  background-color: #171E28;\n}\n.footer__button--android {\n  background-image: url(\"assets/icons/Google_play_icon_small.svg\");\n}\n.footer__button--android:hover {\n  background-image: url(\"assets/icons/Google_play_icon_small_inverse.svg\");\n}\n.footer__button--ios {\n  background-image: url(\"assets/icons/APP_Store_icon_small.svg\");\n}\n.footer__button--ios:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_small_inverse.svg\");\n}\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n.footer__gdpr {\n  text-transform: uppercase;\n}\n.footer__gdpr-item {\n  margin-left: 48px;\n  color: #7B8B9A;\n  text-decoration: none;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n* {\n  box-sizing: border-box;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n","\n@pad: 4px;\n@primary: #1CCDD3;\n@gray: #7B8B9A;\n@dark: #171E28;\n\n\n.layout {\n  max-width: 1210px;\n  margin: 0 auto;\n  padding: 0 @pad*12.5;\n  box-sizing: border-box;\n}\n\n.borderGradientParent {\n  position: relative;\n  z-index: 1;\n}\n\n.borderGradient {\n  position: relative;\n  border-radius: @pad*2;\n  background-clip: padding-box;\n  display: inline-block;\n  border: @pad/2 solid transparent;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    z-index: -1;\n    margin: -@pad/2;\n    border-radius: inherit;\n    background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  }\n}\n","@import \"variables\";\n\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: @pad*11.5 0 calc(15vw - @pad*6); // NOTE: (x)vw - overlap by disaster block\n  position: relative;\n}\n\n.main__layout {\n  .layout();\n  position: relative;\n  z-index: 2;\n}\n\n.main__header {\n  font-size: 1rem;\n  height: @pad*11.5;\n  max-height: @pad*11.5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n\n.main__logo {\n  float: left;\n}\n\n.main__company {\n  color: @gray;\n  float: left;\n  margin-left: 18px;\n  line-height: 1;\n  display: inline-flex;\n  align-self: flex-end;\n}\n\n.main__menu-wr {\n}\n\n.main__menu {\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  display: flex;\n  float: left;\n  height: 100%;\n}\n\n.main__menu-list {\n  display: flex;\n  justify-content: center;\n  margin-right: @pad*12;\n}\n\n.main__menu-item {\n  margin: 0 @pad*7;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\n.main__menu-button {\n  display: block;\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  line-height: 1.4;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.main__content {\n  max-width: 70%;\n}\n\n.main__content-header {\n  font-size: 3.8rem;\n  margin: @pad*20 0 @pad*12;\n  line-height: 1.15;\n}\n\n.main__content-description {\n  color: @gray;\n  width: 70%;\n  line-height: 1.6;\n}\n\n.main__content-info {\n  font-weight: bold;\n  margin-top: @pad*8;\n  color: @primary;\n  font-size: 1.1rem;\n}\n\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: @pad*23;\n  height: 60px;\n}\n\n.main__apps {\n  .borderGradientParent();\n}\n\n.main__app {\n  color: @dark;\n  border-radius: @pad*2;\n  display: inline-block;\n  padding: @pad @pad*5;\n  text-decoration: none;\n  margin-right: @pad*7.5;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover {\n    background-color: @dark;\n  }\n}\n\n.main__app--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_big.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/Google_play_icon_big_inverse.svg\");\n  }\n}\n\n.main__app--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_big.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/APP_Store_icon_big_inverse.svg\");\n  }\n}\n\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.main__example {\n  position: absolute;\n  right: -7%;\n  bottom: 5%;\n}\n\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n","@import \"variables\";\n\n.disasters {\n  height: calc(60vw);\n  max-height: 1100px;\n  margin-top: -15vw;\n  margin-bottom: -15vw;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.disasters__bg {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/4_Photo.png\");\n  background-position: center center; // NOTE: (x)vw - for disaster block\n  background-size: 100% 100%;\n}\n\n.disasters__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n}\n\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 2.1rem;\n  line-height: 1.3;\n}\n","@import \"variables\";\n\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/5_Graphic.png\");\n  background-position: center 120px;\n  background-size: 100%;\n  padding-top: calc(15vw + @pad*48); //\n  padding-bottom: @pad*25;\n}\n\n.plan__layout {\n  .layout();\n}\n\n.plan__description {\n  color: @gray;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: @pad*5.5;\n}\n\n.plan__title {\n  text-align: center;\n  color: @dark;\n  font-size: 2.8rem;\n  line-height: 1.2;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n.plan__benefits {\n  margin-top: @pad*35;\n}\n\n.plan__benefits-list {\n  width: 100%;\n}\n\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: @pad*2;\n  display: flex;\n  justify-content: space-between;\n  padding: @pad*12 @pad*15;\n  box-sizing: border-box;\n  margin-bottom: @pad*25;\n  min-height: 340px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.plan__benefits-item--inverse {\n  background-color: @dark;\n}\n\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n  margin-right: 13%;\n  margin-left: 0;\n\n  .plan__benefits-item--inverse & {\n    margin-left: 13%;\n    margin-right: 0;\n  }\n}\n\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(@pad*8, -50%);\n\n  .plan__benefits-item--inverse & {\n    transform: translate(-@pad*8, -50%);\n  }\n}\n\n.plan__benefits-item-content {\n  width: 70.5%;\n  box-sizing: border-box;\n  padding-bottom: @pad*4;\n}\n\n.plan__benefits-item-content-header {\n  color: @dark;\n  font-size: 2.1rem;\n  margin-bottom: @pad*3.5;\n  font-weight: bold;\n\n  .plan__benefits-item--inverse & {\n    color: #ffffff;\n  }\n}\n\n.plan__benefits-item-content-text {\n  color: @gray;\n  line-height: 1.45;\n}\n","@import \"variables\";\n\n.quote {\n  background-color: #EBEFEF;\n  padding-top: @pad*20;\n}\n\n.quote__bg {\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/6_Background for quote.png\");\n  background-position: top center;\n  background-size: auto;\n}\n\n.quote__layout {\n  .layout();\n  position: relative;\n  z-index: 1;\n  padding-bottom: @pad*20;\n}\n\n.quote__main {\n  width: 45%;\n  display: inline-block;\n  margin-top: 10%;\n  box-sizing: border-box;\n}\n\n.quote__main-quote {\n  margin-top: @pad*25;\n  line-height: 1.6;\n  position: relative;\n  font-style: italic;\n\n  &:before {\n    position: absolute;\n    top: 0;\n    left: -30px;\n    width: 10px;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 1.2;\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  &:after {\n    position: relative;\n    display: inline-block;\n    top: 20px;\n    left: 10px;\n    width: 10px;\n    font-size: 2.2rem;\n    color: @primary;\n    line-height: 0;\n    font-weight: bold;\n    font-style: normal;\n  }\n}\n\n.quote__main-text {\n  margin-top: @pad*6;\n}\n\n.quote__main-text-name {\n  font-size: 1.55rem;\n  font-weight: bold;\n}\n\n.quote__main-text-info {\n  text-transform: uppercase;\n}\n\n.quote__img-wr {\n  width: 55%; //TODO:\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  height: 120%;\n  position: absolute;\n  left: 52%;\n  top: -20%;\n}\n\n.quote__img {\n  display: inline-block;\n  text-align: center;\n  height: 100%;\n  max-height: 600px;\n}\n","@import \"variables\";\n\n.contacts {\n  padding: 150px 0;\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: 100% center;\n  background-size: 100%;\n  position: relative;\n}\n\n.contacts__layout {\n  .layout();\n  display: flex;\n}\n\n.contacts__form {\n  width: 45%;\n  display: inline-block;\n  float: left;\n}\n\n.contacts__form-in {\n  max-width: 450px;\n  width: 100%;\n}\n\n.contacts__form-control {\n  .borderGradientParent();\n  width: 100%;\n}\n\n.contacts__form-control-label {\n  .borderGradient();\n  width: 100%;\n  margin-bottom: @pad*2.5; //TODO: 1px design hardcode\n\n  .contacts__form-control--message & {\n    margin-bottom: 0;\n  }\n}\n\n\n\n.contacts__form-control-input,\n.contacts__form-control-area {\n  width: 100%;\n  border-radius: inherit;\n  border: none;\n  padding: @pad*2.5 @pad*4;\n  //border: 2px solid @primary;\n  height: 44px;\n  font-size: 0.95rem;\n  line-height: 1.2;\n  box-sizing: border-box;\n\n  &::placeholder {\n    color: @dark;\n    font-size: 0.95rem;\n    font-family: 'Titillium Web', 'monospace', 'sans-serif';\n    vertical-align: bottom;\n    letter-spacing: 0.5px;\n  }\n}\n\n.contacts__form-control-area {\n  //padding: @pad*3.5 @pad*4;\n  margin-bottom: 0;\n  resize: vertical;\n  height: auto;\n}\n\n.contacts__form-button-wr {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: @pad*3.5;\n}\n\n.contacts__form-button {\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 @pad*5;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  margin: 0 auto;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  display: inline-block;\n  max-width: 230px;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.contacts__info {\n  width: 49%;\n  display: inline-block;\n  margin-left: 6%;\n}\n\n.contacts__info-title {\n  font-size: 2.7rem;\n  font-weight: bold;\n  line-height: 1.25;\n  margin-top: -@pad*4;\n}\n\n.contacts__info-description {\n  color: @gray;\n  margin-top: @pad*7;\n  line-height: 1.5;\n}\n","@import \"variables\";\n\n.footer {\n  background-color: @dark;\n  padding: @pad*7.5;\n}\n\n.footer__layout {\n  .layout();\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: @gray;\n  font-size: 0.75rem;\n}\n\n.footer__copy {\n  margin-right: @pad*9;\n  text-transform: uppercase;\n}\n\n.footer__buttons {\n  .borderGradientParent();\n}\n\n.footer__button {\n  color: @dark;\n  padding: 0 @pad;\n  margin: 0 @pad*3;\n  width: 154px;\n  max-height: 40px;\n  background: center center no-repeat #ffffff;\n  .borderGradient();\n\n  &:not(:hover):before {\n    background-image: linear-gradient(0deg, #fff, #fff);\n  }\n\n  &:hover {\n    background-color: @dark;\n  }\n}\n\n.footer__button--android {\n  background-image: url(\"/../assets/icons/Google_play_icon_small.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/Google_play_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button--ios {\n  background-image: url(\"/../assets/icons/APP_Store_icon_small.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/APP_Store_icon_small_inverse.svg\");\n  }\n}\n\n.footer__button-image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  border-radius: inherit;\n  background: center center no-repeat #ffffff;\n}\n\n.footer__button-info {\n  position: relative;\n  visibility: hidden;\n}\n\n.footer__gdpr {\n  text-transform: uppercase;\n}\n\n.footer__gdpr-item {\n  margin-left: @pad*12;\n  color: @gray;\n  text-decoration: none;\n}\n","@import \"greed\";\n@import \"main\";\n@import \"disasters\";\n@import \"plan\";\n@import \"quote\";\n@import \"contacts\";\n@import \"footer\";\n\n\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0;\n}\n\n.titled {\n  color: @primary;\n}\n"]}]);
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