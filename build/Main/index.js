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

	__webpack_require__(10)
	__webpack_require__(22)
	var $app_template$ = __webpack_require__(14)
	var $app_style$ = __webpack_require__(15)
	var $app_script$ = __webpack_require__(16)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/comp-weixin', [], function($app_require$, $app_exports$, $app_module$){
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
	    "weixin-page"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "tutorial-page"
	      ],
	      "events": {
	        "scrollbottom": "loadMoreData"
	      },
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.weixinList},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "weixin"
	              },
	              "classList": [
	                "content-item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "left"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.img}
	                      },
	                      "classList": [
	                        "img"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "texts"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "name"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "msg"
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
	                    "right"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      }
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
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  ".content-item": {
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": "1px"
	  },
	  ".content-item > .right": {
	    "flexDirection": "column",
	    "height": "100%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right"
	        }
	      ]
	    }
	  },
	  ".content-item > .right text": {
	    "color": "#aaaaaa",
	    "fontSize": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".content-item > .left": {
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        }
	      ]
	    }
	  },
	  ".content-item > .left>.img": {
	    "width": "80px",
	    "height": "80px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "img"
	        }
	      ]
	    }
	  },
	  ".content-item > .left>.texts": {
	    "flexDirection": "column",
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "texts"
	        }
	      ]
	    }
	  },
	  ".content-item > .left .name": {
	    "color": "#000000",
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
	        }
	      ]
	    }
	  },
	  ".content-item > .left .msg": {
	    "fontSize": "30px",
	    "color": "#aaaaaa",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  data: {
	    weixinList: [{ img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=75a332731fa281df834a4fb0330be9c6&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F5%2F3307a798-a465-4bef-a756-65e6cdff81b3.jpg", name: "aaa" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=5c4499224d9c6769161d7fca2d0d5ff9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F6f061d950a7b0208503bfaae65d9f2d3562cc88b.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=581793290d47478e9f95c0f3fe33c31a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb219ebc4b74543a9f0894bc216178a82b9011429.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=2c29152a91042d8b1455db93ac11f3f7&imgtype=0&src=http%3A%2F%2Fp1.qqyou.com%2Ftouxiang%2FUploadPic%2F2015-4%2F16%2F2015041615174376891.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=699fd0c38a27d98d663e5d23cc7042ce&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F5%2Fijivogqq.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=b1798fec677b8a0e24f77027b351ab03&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F20150108%2Fpl73m0q6.jpg", name: "bb" }]
	  },
	  onInit: function onInit() {}
	};}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "div",
	      "attr": {
	        "id": "title"
	      },
	      "id": "title",
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "id": "name",
	            "value": "微信"
	          },
	          "id": "name"
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "actions"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "search"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "plus"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "id": "container"
	      },
	      "id": "container",
	      "children": [
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.currentIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "comp-weixin",
	                      "attr": {}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "comp-contacts",
	                      "attr": {}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "发现"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "我"
	                      }
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
	      "type": "div",
	      "attr": {
	        "id": "tab"
	      },
	      "id": "tab",
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.tabItems},
	            "key": "index",
	            "value": "item"
	          },
	          "classList": [
	            "tab-item"
	          ],
	          "events": {
	            "click": function (evt) {this.clickTabBar(this.index,evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.item.icons[this.currentIndex===this.index?1:0]}
	              },
	              "classList": [
	                "tab-icon"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.item.name}
	              },
	              "classList": function () {return [this.currentIndex===this.index?'active':'tab-text']}
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
	  "#main": {
	    "flexDirection": "column"
	  },
	  "#title": {
	    "backgroundColor": "#272727",
	    "height": "100px",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "#title>#name": {
	    "fontSize": "48px",
	    "marginLeft": "40px",
	    "color": "#FFFFFF",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "title"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "name"
	        }
	      ]
	    }
	  },
	  "#title>.actions": {
	    "height": "100%",
	    "alignItems": "center",
	    "marginRight": "50px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "title"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "actions"
	        }
	      ]
	    }
	  },
	  ".search": {
	    "width": "50px",
	    "height": "50px",
	    "backgroundImage": "/Common/Image/search.png",
	    "marginRight": "50px"
	  },
	  ".plus": {
	    "width": "40px",
	    "height": "40px",
	    "backgroundImage": "/Common/Image/plus.png"
	  },
	  "#container": {
	    "backgroundColor": "#ffffff",
	    "flexGrow": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "#tab": {
	    "height": "110px",
	    "borderTopColor": "#aaaaaa",
	    "borderTopWidth": "1px"
	  },
	  "#tab .active": {
	    "color": "#008000",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "tab"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".tab-item": {
	    "backgroundColor": "#ffffff",
	    "height": "100%",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexGrow": 1
	  },
	  ".tab-item text": {
	    "color": "#000000",
	    "fontSize": "30px",
	    "lines": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    currentIndex: 0,
	    showLetters: false,
	    tabItems: [{
	      name: '微信',
	      icons: ['/Common/Image/weixin_normal.png', '/Common/Image/weixin_pressed.png']
	    }, {
	      name: '通信录',
	      icons: ['/Common/Image/contact_list_normal.png', '/Common/Image/contact_list_pressed.png']
	    }, {
	      name: '发现',
	      icons: ['/Common/Image/find_normal.png', '/Common/Image/find_pressed.png']
	    }, {
	      name: '我',
	      icons: ['/Common/Image/profile_normal.png', '/Common/Image/profile_pressed.png']
	    }]
	  },
	  changeTabactive: function changeTabactive(evt) {
	    this.currentIndex = evt.index;
	    if (this.currentIndex == 1) {
	
	      this.showLetters = true;
	    } else {
	      this.showLetters = false;
	    }
	  },
	  clickTabBar: function clickTabBar(index) {
	    this.currentIndex = index;
	    if (this.currentIndex == 1) {
	
	      this.showLetters = true;
	    } else {
	      this.showLetters = false;
	    }
	  },
	  routePage: function routePage(param) {
	    _system2.default.push({
	      uri: param
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(23)
	var $app_style$ = __webpack_require__(24)
	var $app_script$ = __webpack_require__(25)
	
	$app_define$('@app-component/comp-contacts', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "weixin-page"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "tutorial-page"
	      ],
	      "events": {
	        "scrollbottom": "loadMoreData"
	      },
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.weixinList},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "weixin"
	              },
	              "classList": [
	                "content-item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "left"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.img}
	                      },
	                      "classList": [
	                        "img"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "texts"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "name"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "msg"
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
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "id": "letters",
	        "show": function () {return this.showLetters}
	      },
	      "classList": [
	        "letters"
	      ],
	      "id": "letters",
	      "children": [
	        {
	          "type": "a",
	          "attr": {
	            "value": function () {return this.$item}
	          },
	          "classList": [
	            "letter"
	          ],
	          "repeat": function () {return this.letters}
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "show-letter-container"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "A"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  ".show-letter-container": {
	    "position": "fixed",
	    "width": "100%",
	    "height": "100%",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "display": "none"
	  },
	  ".show-letter-container text": {
	    "width": "100px",
	    "height": "100px",
	    "textAlign": "center",
	    "fontSize": "80px",
	    "backgroundColor": "rgba(0,0,0,0.7)",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "show-letter-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".content-item": {
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": "1px"
	  },
	  ".content-item > .left": {
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        }
	      ]
	    }
	  },
	  ".content-item > .left>.img": {
	    "width": "80px",
	    "height": "80px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "img"
	        }
	      ]
	    }
	  },
	  ".content-item > .left>.texts": {
	    "flexDirection": "column",
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "texts"
	        }
	      ]
	    }
	  },
	  ".content-item > .left .name": {
	    "color": "#000000",
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
	        }
	      ]
	    }
	  },
	  ".content-item > .left .msg": {
	    "fontSize": "30px",
	    "color": "#aaaaaa",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content-item"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg"
	        }
	      ]
	    }
	  },
	  ".letters": {
	    "flexDirection": "column",
	    "width": "50px",
	    "height": "800px",
	    "backgroundColor": "#7FFFD4",
	    "position": "fixed",
	    "color": "#000000",
	    "right": "0px",
	    "top": "100px"
	  },
	  ".letters .letter": {
	    "width": "50px",
	    "height": "300px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "letters"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "letter"
	        }
	      ]
	    }
	  },
	  ".letters a": {
	    "fontSize": "28px",
	    "color": "#000000",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "letters"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "a"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  data: {
	    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	    weixinList: [{ img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=75a332731fa281df834a4fb0330be9c6&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F5%2F3307a798-a465-4bef-a756-65e6cdff81b3.jpg", name: "aaa" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=5c4499224d9c6769161d7fca2d0d5ff9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F6f061d950a7b0208503bfaae65d9f2d3562cc88b.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=581793290d47478e9f95c0f3fe33c31a&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb219ebc4b74543a9f0894bc216178a82b9011429.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=2c29152a91042d8b1455db93ac11f3f7&imgtype=0&src=http%3A%2F%2Fp1.qqyou.com%2Ftouxiang%2FUploadPic%2F2015-4%2F16%2F2015041615174376891.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=699fd0c38a27d98d663e5d23cc7042ce&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F5%2Fijivogqq.jpg", name: "bb" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521958161935&di=b1798fec677b8a0e24f77027b351ab03&imgtype=0&src=http%3A%2F%2Fp1.qzone.la%2Fupload%2F20150108%2Fpl73m0q6.jpg", name: "bb" }]
	  },
	  onInit: function onInit() {
	
	    console.log("contexts init");
	  },
	  onShow: function onShow() {
	    console.log("contexts onShow");
	  },
	  onHide: function onHide() {
	    console.log("contexts onHide");
	  }
	};}

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
//# sourceMappingURL=index.js.map