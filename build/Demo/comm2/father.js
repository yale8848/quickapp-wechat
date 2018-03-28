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

	__webpack_require__(11)
	__webpack_require__(15)
	var $app_template$ = __webpack_require__(19)
	var $app_style$ = __webpack_require__(20)
	var $app_script$ = __webpack_require__(21)
	
	$app_define$('@app-component/father', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/father',{ packagerVersion: '0.0.5'})


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
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(12)
	var $app_style$ = __webpack_require__(13)
	var $app_script$ = __webpack_require__(14)
	
	$app_define$('@app-component/son1', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "son1 area: "
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "say"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return 'brather say : ' + (this.say)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "im son1"
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": function (evt) {this.say2Brother('im son1',evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "#main": {
	    "width": "100%",
	    "height": "300px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "flexDirection": "column"
	  },
	  ".btn": {
	    "height": "80px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff",
	    "marginLeft": "20px",
	    "marginBottom": "10px",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".say": {
	    "width": "100%",
	    "flexGrow": 1,
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	
	    data: {
	        say: ""
	    },
	
	    onInit: function onInit() {},
	    brotherSay: function brotherSay(msg) {
	        this.say = msg;
	    },
	    say2Brother: function say2Brother(msg) {
	        if (this.nextVm) {
	            this.nextVm.brotherSay(msg);
	        }
	    },
	
	
	    events: {
	        eventSay: function eventSay(evt) {
	            this.say = evt.detail;
	        }
	    }
	
	};}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(16)
	var $app_style$ = __webpack_require__(17)
	var $app_script$ = __webpack_require__(18)
	
	$app_define$('@app-component/son2', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "son2 area: "
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "say"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return 'brather say : ' + (this.say)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "im son2"
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": function (evt) {this.say2Brother('im son2',evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "#main": {
	    "width": "100%",
	    "height": "300px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "flexDirection": "column"
	  },
	  ".btn": {
	    "height": "80px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff",
	    "marginLeft": "20px",
	    "marginBottom": "10px",
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px"
	  },
	  ".say": {
	    "width": "100%",
	    "flexGrow": 1,
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	
	    data: {
	        say: ""
	    },
	
	    onInit: function onInit() {},
	    brotherSay: function brotherSay(msg) {
	        this.say = msg;
	    },
	    say2Brother: function say2Brother(msg) {
	        if (this.previousVm) {
	            this.previousVm.$emit('eventSay', msg);
	        }
	    }
	};}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "son1",
	      "attr": {
	        "id": "son1"
	      },
	      "id": "son1"
	    },
	    {
	      "type": "son2",
	      "attr": {
	        "id": "son2"
	      },
	      "id": "son2"
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "father"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "father area: "
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "say"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  "#main": {
	    "flexDirection": "column"
	  },
	  ".father": {
	    "width": "100%",
	    "marginTop": "20px",
	    "height": "300px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "flexDirection": "column"
	  },
	  ".say": {
	    "width": "100%",
	    "flexGrow": 1,
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {},
	  onReady: function onReady() {
	    var vm1 = this.$vm('son1');
	    var vm2 = this.$vm('son2');
	
	    vm1.parentVm = this;
	    vm1.nextVm = vm2;
	    vm2.parentVm = this;
	    vm2.previousVm = vm1;
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
//# sourceMappingURL=father.js.map