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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/react-hot-loader/index.js):\\nLoaderRunnerError: Module '/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/react-hot-loader/index.js' is not a loader (must have normal or pitch function)\\n    at loadLoader (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/loader-runner/lib/loadLoader.js:43:20)\\n    at iteratePitchingLoaders (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModule.js:295:3)\\n    at NormalModule.build (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModule.js:446:15)\\n    at Compilation.buildModule (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/Compilation.js:739:10)\\n    at moduleFactory.create (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/Compilation.js:1111:12)\\n    at factory (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModuleFactory.js:409:6)\\n    at hooks.afterResolve.callAsync (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/tapable/lib/Hook.js:154:20)\\n    at resolver (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModuleFactory.js:138:29)\\n    at process.nextTick (/Users/parischrysanthou/Documents/GitHub/frontend_test-v4/node_modules/webpack/lib/NormalModuleFactory.js:346:9)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });