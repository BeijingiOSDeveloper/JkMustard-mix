(function(){
      
  var createPageHandler = function() {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var $app_template$ = __webpack_require__(17)
	var $app_style$ = __webpack_require__(18)
	var $app_script$ = __webpack_require__(19)
	
	$app_define$('@app-component/main', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/main',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(6)
	__webpack_require__(10)
	var $app_template$ = __webpack_require__(14)
	var $app_style$ = __webpack_require__(15)
	var $app_script$ = __webpack_require__(16)
	
	$app_define$('@app-component/main-content', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(3)
	var $app_style$ = __webpack_require__(4)
	var $app_script$ = __webpack_require__(5)
	
	$app_define$('@app-component/no_image_item', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": function (evt) {this.pushToDetail(this.article_data.mUrl,evt)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "lines": "1",
	            "value": function () {return this.article_data.title}
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "empty"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_tag"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_status_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.article_data.sourceType}
	                  },
	                  "classList": [
	                    "item_status_text"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_from_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.article_data.fromWhere}
	                  },
	                  "classList": [
	                    "item_from"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_time_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.displayTime}
	                  },
	                  "classList": [
	                    "item_time"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_line"
	      ]
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  ".item": {
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "height": "164px",
	    "flexDirection": "column",
	    "backgroundColor": "#f5f5f5"
	  },
	  ".item_content": {
	    "flex": 1,
	    "display": "flex",
	    "width": "100%",
	    "flexDirection": "column"
	  },
	  ".item_line": {
	    "width": "100%",
	    "height": "2px",
	    "backgroundColor": "#dedede"
	  },
	  ".item_title": {
	    "fontSize": "32px",
	    "paddingTop": "34px",
	    "color": "#080808"
	  },
	  ".empty": {
	    "flex": 1
	  },
	  ".item_tag": {
	    "paddingBottom": "40px"
	  },
	  ".item_status_div": {
	    "height": "24px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#FF0000",
	    "borderRightColor": "#FF0000",
	    "borderBottomColor": "#FF0000",
	    "borderLeftColor": "#FF0000",
	    "borderRadius": "5px",
	    "marginRight": "25px"
	  },
	  ".item_from_div": {
	    "height": "24px"
	  },
	  ".item_time_div": {
	    "height": "24px"
	  },
	  ".item_status_text": {
	    "fontSize": "17px",
	    "color": "#ff0000",
	    "marginTop": "3px",
	    "marginRight": "5px",
	    "marginBottom": "3px",
	    "marginLeft": "5px"
	  },
	  ".item_from": {
	    "fontSize": "22px",
	    "marginRight": "25px"
	  },
	  ".item_time": {
	    "fontSize": "22px"
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.webview");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["article_data"],
	    data: {
	        "article_data": "",
	        "displayTime": ""
	    },
	    onInit: function onInit() {
	        var Time = this.article_data.displayTime;
	        this.displayTime = Time.substring(5, 16);
	    },
	    pushToDetail: function pushToDetail(mUrl) {
	        _system2.default.loadUrl({
	            url: mUrl + "?ldfrom=1"
	        });
	    }
	};}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/one_image_item', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": function (evt) {this.pushToDetail(this.article_data.mUrl,evt)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_text"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.article_data.title}
	              },
	              "classList": [
	                "item_title"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "empty"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_tag"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item_status_div"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.article_data.sourceType}
	                      },
	                      "classList": [
	                        "item_status_text"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item_from_div"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.article_data.fromWhere}
	                      },
	                      "classList": [
	                        "item_from"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item_time_div"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.displayTime}
	                      },
	                      "classList": [
	                        "item_time"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_img"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.article_data.wapImageList[0]},
	                "alt": "/src/Common/img/placeholder.png"
	              },
	              "classList": [
	                "test"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_line"
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".item": {
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "height": "230px",
	    "flexDirection": "column"
	  },
	  ".item_content": {
	    "flex": 1,
	    "width": "100%",
	    "display": "flex"
	  },
	  ".item_line": {
	    "width": "100%",
	    "height": "2px",
	    "backgroundColor": "#dedede"
	  },
	  ".item_text": {
	    "height": "230px",
	    "flex": 1,
	    "display": "flex",
	    "flexDirection": "column"
	  },
	  ".item_img": {
	    "paddingTop": "40px",
	    "paddingRight": "0px",
	    "paddingBottom": "40px",
	    "paddingLeft": "0px"
	  },
	  ".item_img .test": {
	    "width": "230px",
	    "height": "160px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item_img"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "test"
	        }
	      ]
	    }
	  },
	  ".item_title": {
	    "paddingTop": "40px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px",
	    "fontSize": "32px",
	    "color": "#080808"
	  },
	  ".empty": {
	    "flex": 1
	  },
	  ".item_tag": {
	    "paddingBottom": "40px"
	  },
	  ".item_status_div": {
	    "height": "24px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#FF0000",
	    "borderRightColor": "#FF0000",
	    "borderBottomColor": "#FF0000",
	    "borderLeftColor": "#FF0000",
	    "borderRadius": "5px",
	    "marginRight": "25px"
	  },
	  ".item_from_div": {
	    "height": "24px"
	  },
	  ".item_time_div": {
	    "height": "24px"
	  },
	  ".item_status_text": {
	    "fontSize": "17px",
	    "color": "#ff0000",
	    "marginTop": "3px",
	    "marginRight": "5px",
	    "marginBottom": "3px",
	    "marginLeft": "5px"
	  },
	  ".item_from": {
	    "fontSize": "22px",
	    "marginRight": "25px"
	  },
	  ".item_time": {
	    "fontSize": "22px"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.webview");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["article_data"],
	    data: {
	        "article_data": "",
	        "displayTime": ""
	    },
	    onInit: function onInit() {
	        var Time = this.article_data.displayTime;
	        this.displayTime = Time.substring(5, 16);
	    },
	    pushToDetail: function pushToDetail(mUrl) {
	        _system2.default.loadUrl({
	            url: mUrl + "?ldfrom=1"
	        });
	    }
	};}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/three_image_item', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "click": function (evt) {this.pushToDetail(this.article_data.mUrl,evt)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "lines": "1",
	            "value": function () {return this.article_data.title}
	          },
	          "classList": [
	            "item_title"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_images"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.article_data.wapImageList[0]},
	                "alt": "../img/placeholder.png"
	              },
	              "classList": [
	                "test"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "empty"
	              ]
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.article_data.wapImageList[1]},
	                "alt": "../img/placeholder.png"
	              },
	              "classList": [
	                "test"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "empty"
	              ]
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.article_data.wapImageList[2]},
	                "alt": "../img/placeholder.png"
	              },
	              "classList": [
	                "test"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item_tag"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_status_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.article_data.sourceType}
	                  },
	                  "classList": [
	                    "item_status_text"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_from_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.article_data.fromWhere}
	                  },
	                  "classList": [
	                    "item_from"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item_time_div"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.displayTime}
	                  },
	                  "classList": [
	                    "item_time"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item_line"
	      ]
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  ".item": {
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px",
	    "display": "flex",
	    "height": "310px",
	    "flexDirection": "column",
	    "backgroundColor": "#f5f5f5"
	  },
	  ".item_content": {
	    "flex": 1,
	    "display": "flex",
	    "width": "100%",
	    "flexDirection": "column"
	  },
	  ".item_line": {
	    "width": "100%",
	    "height": "2px",
	    "backgroundColor": "#dedede"
	  },
	  ".item_title": {
	    "fontSize": "32px",
	    "paddingTop": "34px",
	    "color": "#080808"
	  },
	  ".item_images": {
	    "paddingTop": "15px",
	    "height": "160px",
	    "display": "flex"
	  },
	  ".item_images .test": {
	    "width": "230px",
	    "height": "160px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item_images"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "test"
	        }
	      ]
	    }
	  },
	  ".empty": {
	    "flex": 1
	  },
	  ".item_tag": {
	    "paddingTop": "20px"
	  },
	  ".item_status_div": {
	    "height": "24px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#FF0000",
	    "borderRightColor": "#FF0000",
	    "borderBottomColor": "#FF0000",
	    "borderLeftColor": "#FF0000",
	    "borderRadius": "5px",
	    "marginRight": "25px"
	  },
	  ".item_from_div": {
	    "height": "24px"
	  },
	  ".item_time_div": {
	    "height": "24px"
	  },
	  ".item_status_text": {
	    "fontSize": "17px",
	    "color": "#ff0000",
	    "marginTop": "3px",
	    "marginRight": "5px",
	    "marginBottom": "3px",
	    "marginLeft": "5px"
	  },
	  ".item_from": {
	    "fontSize": "22px",
	    "marginRight": "25px"
	  },
	  ".item_time": {
	    "fontSize": "22px"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.webview");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["article_data"],
	    data: {
	        "article_data": "",
	        "displayTime": ""
	    },
	    onInit: function onInit() {
	        var Time = this.article_data.displayTime;
	        this.displayTime = Time.substring(5, 16);
	    },
	    pushToDetail: function pushToDetail(mUrl) {
	        _system2.default.loadUrl({
	            url: mUrl + "?ldfrom=1"
	        });
	    }
	};}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "refresh",
	  "attr": {
	    "offset": "200",
	    "refreshing": function () {return this.is_refreshing}
	  },
	  "classList": [
	    "refresh"
	  ],
	  "events": {
	    "refresh": "refresh"
	  },
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "list_container"
	      ],
	      "events": {
	        "scrollbottom": "refreshList"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "item_content"
	          },
	          "classList": [
	            "list_container"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.fetch_data},
	              "children": [
	                {
	                  "type": "block",
	                  "attr": {},
	                  "shown": function () {return this.$item.wapImageList.length==0},
	                  "children": [
	                    {
	                      "type": "no_image_item",
	                      "attr": {
	                        "article_data": function () {return this.$item}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "block",
	                  "attr": {},
	                  "shown": function () {return this.$item.wapImageList.length==1},
	                  "children": [
	                    {
	                      "type": "one_image_item",
	                      "attr": {
	                        "article_data": function () {return this.$item}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "block",
	                  "attr": {},
	                  "shown": function () {return this.$item.wapImageList.length==2},
	                  "children": [
	                    {
	                      "type": "one_image_item",
	                      "attr": {
	                        "article_data": function () {return this.$item}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "block",
	                  "attr": {},
	                  "shown": function () {return this.$item.wapImageList.length==3},
	                  "children": [
	                    {
	                      "type": "three_image_item",
	                      "attr": {
	                        "article_data": function () {return this.$item}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "loadMore"
	          },
	          "classList": [
	            "load_more"
	          ],
	          "shown": function () {return this.load_more},
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "正在加载..."
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  ".refresh": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".list_container": {
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".list_item": {
	    "flexDirection": "column"
	  },
	  ".item_content": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".load_more": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "height": "100px"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.fetch");
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$("@app-module/system.prompt");
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ["classify"],
	    data: {
	        load_more: true,
	        is_refreshing: false,
	        fetch_data: [],
	        pageNo: 1,
	        pageSize: 10,
	        max: ""
	    },
	    onInit: function onInit() {
	        var that_ = this;
	        _system2.default.fetch({
	            url: "http://www.chinabyte.com/open/article/mi.do",
	            method: "POST",
	            data: {
	                classify: that_.classify,
	                pageNo: that_.pageNo,
	                pageSize: that_.pageSize
	            },
	            header: { 'Content-Type': 'application/json' },
	            success: function success(response) {
	                that_.pageNo = 2;
	                var json = JSON.parse(response.data);
	                if (json.code == "200") {
	                    that_.fetch_data = json.result.articleWapList;
	                    that_.max = Math.ceil(json.result.dataCount / 10);
	                    if (json.result.dataCount < 5) {
	                        that_.load_more = false;
	                    }
	                } else {
	                    _system4.default.showToast({
	                        message: "请求失败"
	                    });
	                }
	            },
	            fail: function fail() {
	                _system4.default.showToast({
	                    message: "请求失败"
	                });
	            }
	        });
	    },
	    refresh: function refresh(e) {
	        var that_ = this;
	        that_.is_refreshing = e.refreshing;
	        that_.is_refreshing = "false";
	        _system2.default.fetch({
	            url: "http://www.chinabyte.com/open/article/mi.do",
	            method: "POST",
	            data: {
	                classify: that_.classify,
	                pageNo: 1,
	                pageSize: that_.pageSize
	            },
	            header: { 'Content-Type': 'application/json' },
	            success: function success(response) {
	                that_.pageNo = 1;
	                var json = JSON.parse(response.data);
	                that_.is_refreshing = "false";
	                if (json.code == "200") {
	                    that_.fetch_data = json.result.articleWapList;
	                    _system4.default.showToast({
	                        message: "刷新成功"
	                    });
	                } else {
	                    _system4.default.showToast({
	                        message: "刷新失败"
	                    });
	                }
	            },
	            fail: function fail() {
	                that_.is_refreshing = "false";
	                _system4.default.showToast({
	                    message: "请求失败"
	                });
	            }
	        });
	    },
	    refreshList: function refreshList(index) {
	        var that_ = this;
	        var listDate = that_.fetch_data;
	        if (that_.max < that_.pageNo) {
	            _system4.default.showToast({
	                message: "暂无更多数据"
	            });
	            that_.load_more = false;
	        } else {
	            _system2.default.fetch({
	                url: "http://www.chinabyte.com/open/article/mi.do",
	                method: "POST",
	                data: {
	                    classify: that_.classify,
	                    pageNo: that_.pageNo,
	                    pageSize: that_.pageSize
	                },
	                header: { 'Content-Type': 'application/json' },
	                success: function success(response) {
	                    var json = JSON.parse(response.data);
	                    if (json.code == "200") {
	                        that_.pageNo = that_.pageNo + 1;
	                        var addDtate = json.result.articleWapList;
	                        that_.fetch_data = listDate.concat(addDtate);
	                    } else {
	                        _system4.default.showToast({
	                            message: "加载失败"
	                        });
	                    }
	                },
	                fail: function fail() {
	                    that_.is_refreshing = "false";
	                    _system4.default.showToast({
	                        message: "请求失败"
	                    });
	                }
	            });
	        }
	    }
	};}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {
	        "index": function () {return this.index}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "nav_header"
	          ]
	        },
	        {
	          "type": "tab-bar",
	          "attr": {
	            "mode": "scrollable",
	            "height": "80px"
	          },
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.data.tab_list},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "nav_tab_list"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "nav_scroll"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "nav_tab_text"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.data.tab_list},
	              "children": [
	                {
	                  "type": "main-content",
	                  "attr": {
	                    "classify": function () {return this.$item.classify}
	                  },
	                  "children": [
	                    {
	                      "type": "main-content",
	                      "attr": {}
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "backgroundColor": "#f5f5f5"
	  },
	  ".nav_header": {
	    "width": "100%",
	    "height": "82px",
	    "backgroundImage": "../Common/img/header.png"
	  },
	  ".nav_tab_list": {
	    "height": "80px",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#dedede",
	    "borderRightColor": "#dedede",
	    "borderBottomColor": "#dedede",
	    "borderLeftColor": "#dedede"
	  },
	  ".nav_scroll": {
	    "marginTop": "20px",
	    "marginRight": "5px",
	    "marginBottom": "20px",
	    "marginLeft": "5px",
	    "backgroundColor": "#f5f5f5",
	    "borderRadius": "10px",
	    "backgroundColor:active": "#4f3b8c"
	  },
	  ".nav_tab_text": {
	    "marginLeft": "20px",
	    "marginRight": "20px",
	    "height": "40px",
	    "lineHeight": "40px",
	    "fontSize": "32px",
	    "textAlign": "center",
	    "color": "#4f3b8c",
	    "color:active": "#ffffff"
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tab_data = __webpack_require__(20);
	
	var _tab_data2 = _interopRequireDefault(_tab_data);
	
	var _service = $app_require$("@app-module/service.push");
	
	var _service2 = _interopRequireDefault(_service);
	
	var _system = $app_require$("@app-module/system.prompt");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: {
	        data: _tab_data2.default.data
	    },
	    onInit: function onInit() {
	        _service2.default.subscribe({
	            success: function success(data) {
	                _system2.default.showToast({
	                    message: JSON.stringify(data)
	                });
	            },
	            fail: function fail(data, code) {
	                console.log("push.subscribe failed, result data=" + JSON.stringify(data) + ", code=" + code);
	            },
	            complete: function complete() {
	                console.log("push.subscribe completed");
	            }
	        });
	    }
	};}

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        tab_list: [{
	            name: "推荐",
	            classify: "all"
	        }, {
	            name: "旅游",
	            classify: "tour"
	        }, {
	            name: "汽车",
	            classify: "car"
	        }, {
	            name: "健康",
	            classify: "health"
	        }, {
	            name: "探索发现",
	            classify: "discovery"
	        }, {
	            name: "娱乐",
	            classify: "ent"
	        }, {
	            name: "体育",
	            classify: "sports"
	        }, {
	            name: "社会",
	            classify: "society"
	        }, {
	            name: "情感",
	            classify: "feel"
	        }, {
	            name: "谣言终结者",
	            classify: "rumour"
	        }]
	    }
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=main.js.map