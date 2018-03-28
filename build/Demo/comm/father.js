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

	__webpack_require__(4)
	var $app_template$ = __webpack_require__(8)
	var $app_style$ = __webpack_require__(9)
	var $app_script$ = __webpack_require__(10)
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(5)
	var $app_style$ = __webpack_require__(6)
	var $app_script$ = __webpack_require__(7)
	
	$app_define$('@app-component/son', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 5 */
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
	        "value": "son area: "
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
	            "value": function () {return 'father say : ' + (this.say)}
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
	            "value": "say hi"
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": function (evt) {this.sayFather('hi',evt)}
	          }
	        },
	        {
	          "type": "input",
	          "attr": {
	            "type": "button",
	            "value": "say father"
	          },
	          "classList": [
	            "btn"
	          ],
	          "events": {
	            "click": function (evt) {this.sayFather('father',evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$("@app-module/system.router");
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    data: {
	        say: ""
	    },
	    sayMsg: function sayMsg(evt) {
	
	        this.say = evt.detail.msg;
	    },
	    onInit: function onInit() {
	        this.$on("fatherSay", this.sayMsg);
	    },
	    sayFather: function sayFather(t) {
	
	        this.$dispath('sonSay', {
	            msg: t
	        });
	    }
	};}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "son",
	      "attr": {},
	      "events": {
	        "son-say": "sayMsg"
	      }
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
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return 'son say:' + (this.say)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
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
/* 10 */
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
	  data: {
	    say: ""
	  },
	  onInit: function onInit() {
	    this.$on("sonSay", this.sayMsg);
	  },
	  sayMsg: function sayMsg(evt) {
	
	    this.say = evt.detail.msg;
	
	    if (this.say === 'father') {
	      this.$broadcast('fatherSay', {
	        msg: "son"
	      });
	    }
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