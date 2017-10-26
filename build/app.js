(function(){
      
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_script$ = __webpack_require__(36)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 36:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	module.exports = {
	    manifest: { "package": "com.chinabyte.mustard", "name": "芥末头条", "versionName": "1.0.8", "versionCode": "8", "icon": "/Common/img/icon.png", "features": [{ "name": "system.network" }, { "name": "system.fetch" }, { "name": "system.webview" }, { "name": "system.prompt" }], "permissions": [{ "origin": "*" }], "config": { "logLevel": "debug" }, "router": { "entry": "Special", "pages": { "Main": { "component": "main", "path": "/" }, "Paging": { "component": "paging", "path": "/paging" }, "Special": { "component": "special", "path": "/special" } } }, "display": { "backgroundColor": "#ffffff", "titleBar": false, "titleBarBackgroundColor": "#000000", "titleBarTextColor": "#ffffff", "pages": { "Main": { "titleBarText": "比特头条" } } } }
	};}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.chinabyte.mustard","name":"芥末头条","versionName":"1.0.8","versionCode":"8","icon":"/Common/img/icon.png","features":[{"name":"system.network"},{"name":"system.fetch"},{"name":"system.webview"},{"name":"system.prompt"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Special","pages":{"Main":{"component":"main","path":"/"},"Paging":{"component":"paging","path":"/paging"},"Special":{"component":"special","path":"/special"}}},"display":{"backgroundColor":"#ffffff","titleBar":false,"titleBarBackgroundColor":"#000000","titleBarTextColor":"#ffffff","pages":{"Main":{"titleBarText":"比特头条"}}}};
  }
})();
//# sourceMappingURL=app.js.map