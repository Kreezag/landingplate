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
exports.push([module.i, ".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 240px;\n  position: relative;\n  z-index: 1;\n}\n.main__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n  position: relative;\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__logo {\n  float: left;\n}\n.main__company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n}\n.main__menu {\n  display: flex;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  align-items: center;\n}\n.main__menu-list {\n  justify-content: center;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover {\n  text-decoration: underline;\n}\n.main__menu-button {\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 0;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 1rem;\n  margin-left: 48px;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 68px;\n  margin: 80px 0 40px;\n  line-height: 80px;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 88px;\n  height: 60px;\n}\n.main__apps {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n.main__app {\n  color: #171E28;\n  border-radius: 8px;\n  display: inline-block;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  z-index: 1000;\n}\n.main__app:hover {\n  border-color: #1CCDD3;\n  background-color: #171E28;\n}\n.main__app--google {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--google:hover {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--appstore {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--appstore:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -10%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n  height: 1100px;\n  margin-top: -270px;\n  margin-bottom: -270px;\n  position: relative;\n  z-index: 1;\n}\n.disasters__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: top center;\n  background-size: 100%;\n  padding: 470px 0;\n}\n.plan__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 50px;\n  line-height: 60px;\n  max-width: 800px;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 44px 60px;\n  box-sizing: border-box;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70%;\n  box-sizing: border-box;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 40px;\n  margin-bottom: 12px;\n  font-weight: bold;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n", "",{"version":3,"sources":["/home/kreez/Projects/landingplate/src/less/greed.less","index.less","/home/kreez/Projects/landingplate/src/less/variables.less","/home/kreez/Projects/landingplate/src/less/main.less","/home/kreez/Projects/landingplate/src/less/disasters.less","/home/kreez/Projects/landingplate/src/less/plan.less","/home/kreez/Projects/landingplate/src/less/index.less"],"names":[],"mappings":"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","file":"index.less","sourcesContent":["\n.row {\n  margin: 0 -10px\n}\n\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n",".row {\n  margin: 0 -10px;\n}\n.col-1-1 {\n  float: left;\n  padding: 0 10px;\n  width: 100%;\n}\n.col-1-2 {\n  float: left;\n  padding: 0 10px;\n  width: 50%;\n}\n.col-1-3 {\n  float: left;\n  padding: 0 10px;\n  width: 33.333%;\n}\n.col-2-3 {\n  float: left;\n  padding: 0 10px;\n  width: 66.666%;\n}\n.layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: 46px 0 240px;\n  position: relative;\n  z-index: 1;\n}\n.main__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n  position: relative;\n}\n.main__header {\n  font-size: 1rem;\n  height: 46px;\n  max-height: 46px;\n  display: flex;\n  justify-content: space-between;\n}\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n.main__logo {\n  float: left;\n}\n.main__company {\n  color: #7B8B9A;\n  float: left;\n  margin-left: 18px;\n}\n.main__menu {\n  display: flex;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  align-items: center;\n}\n.main__menu-list {\n  justify-content: center;\n}\n.main__menu-item {\n  margin: 0 28px;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.main__menu-item-link:hover {\n  text-decoration: underline;\n}\n.main__menu-button {\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: 12px 0;\n  border-radius: 8px;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 1rem;\n  margin-left: 48px;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.main__content {\n  max-width: 70%;\n}\n.main__content-header {\n  font-size: 68px;\n  margin: 80px 0 40px;\n  line-height: 80px;\n}\n.main__content-description {\n  color: #7B8B9A;\n  width: 70%;\n  line-height: 1.6;\n}\n.main__content-info {\n  font-weight: bold;\n  margin-top: 32px;\n  color: #1CCDD3;\n  font-size: 1.1rem;\n}\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: 88px;\n  height: 60px;\n}\n.main__apps {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n.main__app {\n  color: #171E28;\n  border-radius: 8px;\n  display: inline-block;\n  padding: 4px 20px;\n  text-decoration: none;\n  margin-right: 30px;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  z-index: 1000;\n}\n.main__app:hover {\n  border-color: #1CCDD3;\n  background-color: #171E28;\n}\n.main__app--google {\n  background-image: url(\"assets/icons/Google_play_icon_big.svg\");\n}\n.main__app--google:hover {\n  background-image: url(\"assets/icons/Google_play_icon_big_inverse.svg\");\n}\n.main__app--appstore {\n  background-image: url(\"assets/icons/APP_Store_icon_big.svg\");\n}\n.main__app--appstore:hover {\n  background-image: url(\"assets/icons/APP_Store_icon_big_inverse.svg\");\n}\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n.main__example {\n  position: absolute;\n  right: -10%;\n  bottom: 5%;\n}\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n.disasters {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n  height: 1100px;\n  margin-top: -270px;\n  margin-bottom: -270px;\n  position: relative;\n  z-index: 1;\n}\n.disasters__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 1.3;\n}\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"assets/5_Graphic.png\");\n  background-position: top center;\n  background-size: 100%;\n  padding: 470px 0;\n}\n.plan__layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 48px;\n  box-sizing: border-box;\n}\n.plan__description {\n  color: #7B8B9A;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.plan__title {\n  text-align: center;\n  color: #171E28;\n  font-size: 50px;\n  line-height: 60px;\n  max-width: 800px;\n  margin: 0 auto;\n  font-weight: bold;\n}\n.plan__benefits {\n  margin-top: 140px;\n}\n.plan__benefits-list {\n  width: 100%;\n}\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  padding: 44px 60px;\n  box-sizing: border-box;\n}\n.plan__benefits-item--inverse {\n  background-color: #171E28;\n}\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n}\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(32px, -50%);\n}\n.plan__benefits-item-content {\n  width: 70%;\n  box-sizing: border-box;\n}\n.plan__benefits-item-content-header {\n  color: #171E28;\n  font-size: 40px;\n  margin-bottom: 12px;\n  font-weight: bold;\n}\n.plan__benefits-item-content-text {\n  color: #7B8B9A;\n  line-height: 1.45;\n}\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin: 0;\n  padding: 0;\n}\n.titled {\n  color: #1CCDD3;\n}\n","\n@pad: 4px;\n@primary: #1CCDD3;\n@gray: #7B8B9A;\n@dark: #171E28;\n\n\n.layout {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 @pad*12;\n  box-sizing: border-box;\n}\n","@import \"variables\";\n\n.main {\n  background-color: #151C26;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/2_Main_screen.jpg\");\n  background-position: bottom center;\n  background-size: 100%;\n  padding: @pad*11.5 0 (270px - 30px); // TODO: 250px - overlap by disaster block, 20px - fix bg position\n  position: relative;\n  z-index: 1;\n}\n\n.main__layout {\n  .layout();\n  position: relative;\n}\n\n.main__header {\n  font-size: 1rem;\n  height: @pad*11.5;\n  max-height: @pad*11.5;\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__header-logo {\n  display: inline-flex;\n  justify-content: center;\n  align-self: center;\n}\n\n.main__logo {\n  float: left;\n}\n\n.main__company {\n  color: @gray;\n  float: left;\n  margin-left: 18px;\n}\n\n.main__menu-wr {\n}\n\n.main__menu {\n  display: flex;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 0.6px;\n  align-items: center;\n}\n\n.main__menu-list {\n  justify-content: center;\n}\n\n.main__menu-item {\n  margin: 0 @pad*7;\n  display: inline-flex;\n  align-items: center;\n  align-self: center;\n}\n\n.main__menu-item-link {\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #ffffff;\n\n  &:hover {\n    text-decoration: underline;\n  }\n}\n\n.main__menu-button {\n  float: left;\n  background: linear-gradient(261.8deg, #07C7CA 1%, #117DBE 99.37%);\n  font-weight: bold;\n  color: #ffffff;\n  padding: @pad*3 0;\n  border-radius: @pad*2;\n  border: 0;\n  text-transform: uppercase;\n  font-size: 1rem;\n  margin-left: @pad*12;\n  width: 230px;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n\n.main__content {\n  max-width: 70%;\n}\n\n.main__content-header {\n  font-size: 68px;\n  margin: @pad*20 0 @pad*10;\n  line-height: 80px;\n}\n\n.main__content-description {\n  color: @gray;\n  width: 70%;\n  line-height: 1.6;\n}\n\n.main__content-info {\n  font-weight: bold;\n  margin-top: @pad*8;\n  color: @primary;\n  font-size: 1.1rem;\n}\n\n.main__apps-wr {\n  position: relative;\n  width: 100%;\n  margin-top: @pad*22;\n  height: 60px;\n}\n\n.main__apps {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n}\n\n.main__app {\n  color: @dark;\n  border-radius: @pad*2;\n  display: inline-block;\n  padding: @pad @pad*5;\n  text-decoration: none;\n  margin-right: @pad*7.5;\n  border: 2px solid #ffffff;\n  width: 230px;\n  height: 60px;\n  box-sizing: border-box;\n  background: center center no-repeat #ffffff;\n  z-index: 1000;\n\n  &:hover {\n    border-color: @primary;\n    background-color: @dark;\n  }\n}\n\n.main__app--google {\n  background-image: url(\"/../assets/icons/Google_play_icon_big.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/Google_play_icon_big_inverse.svg\");\n  }\n}\n\n.main__app--appstore {\n  background-image: url(\"/../assets/icons/APP_Store_icon_big.svg\");\n\n  &:hover {\n    background-image: url(\"/../assets/icons/APP_Store_icon_big_inverse.svg\");\n  }\n}\n\n.main__app-info {\n  opacity: 0;\n  position: absolute;\n}\n\n.main__app-text {\n  font-size: 0.7rem;\n  width: 100%;\n}\n\n.main__app-name {\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.main__example {\n  position: absolute;\n  right: -10%;\n  bottom: 5%;\n}\n\n.main__example-img {\n  width: 670px;\n  height: auto;\n}\n","@import \"variables\";\n\n.disasters {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/4_Photo.png\");\n  background-position: center center;\n  background-size: 100% 100%;\n  height: 1100px;\n  margin-top: -270px;\n  margin-bottom: -270px;\n  position: relative;\n  z-index: 1;\n}\n\n.disasters__layout {\n  .layout()\n}\n\n.disasters__text {\n  max-width: 800px;\n  align-self: center;\n  text-align: center;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 1.3;\n}\n","@import \"variables\";\n\n.plan {\n  background-color: #EBEFEF;\n  background-attachment: inherit;\n  background-repeat: no-repeat;\n  background-image: url(\"/../assets/5_Graphic.png\");\n  background-position: top center;\n  background-size: 100%;\n  padding: (500px - 30px) 0;\n}\n\n.plan__layout {\n  .layout();\n}\n\n.plan__description {\n  color: @gray;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: @pad*5;\n}\n\n.plan__title {\n  text-align: center;\n  color: @dark;\n  font-size: 50px;\n  line-height: 60px;\n  max-width: 800px;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n.plan__benefits {\n  margin-top: @pad*35;\n}\n\n.plan__benefits-list {\n  width: 100%;\n}\n\n.plan__benefits-item {\n  width: 100%;\n  background-color: #fff;\n  border-radius: @pad*2;\n  display: flex;\n  justify-content: space-between;\n  padding: @pad*11 @pad*15;\n  box-sizing: border-box;\n}\n\n.plan__benefits-item--inverse {\n  background-color: @dark;\n}\n\n.plan__benefits-item-img-wr {\n  width: 16.5%;\n  position: relative;\n  align-self: center;\n  box-sizing: border-box;\n}\n\n.plan__benefits-item-img {\n  max-width: 100%;\n  position: absolute;\n  transform: translate(@pad*8, -50%);\n}\n\n.plan__benefits-item-content {\n  width: 70%;\n  box-sizing: border-box;\n}\n\n.plan__benefits-item-content-header {\n  color: @dark;\n  font-size: 40px;\n  margin-bottom: @pad*3;\n  font-weight: bold;\n}\n\n.plan__benefits-item-content-text {\n  color: @gray;\n  line-height: 1.45;\n}\n","@import \"greed\";\n@import \"main\";\n@import \"disasters\";\n@import \"plan\";\n\n\nhtml {\n  padding: 0;\n  margin: 0;\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'Titillium Web', 'monospace', 'sans-serif';\n  width: 100%;\n  overflow-x: hidden;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.45;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0;\n}\n\n.titled {\n  color: @primary;\n}\n"]}]);
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?-url&sourceMap!../../node_modules/less-loader/dist/cjs.js?sourceMap!./index.less */ "./node_modules/css-loader/dist/cjs.js?-url&sourceMap!./node_modules/less-loader/dist/cjs.js?sourceMap!./src/less/index.less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map