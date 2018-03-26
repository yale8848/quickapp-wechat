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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10)
	var $app_template$ = __webpack_require__(36)
	var $app_style$ = __webpack_require__(37)
	var $app_script$ = __webpack_require__(38)
	
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

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/comp-title', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "title"
	  },
	  "id": "title",
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
	            "id": "back",
	            "src": "/Common/Image/back.png",
	            "show": function () {return this.showBack}
	          },
	          "id": "back",
	          "events": {
	            "click": function (evt) {this.back(evt)}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "id": "name",
	            "show": function () {return this.showText},
	            "value": function () {return this.text}
	          },
	          "id": "name"
	        }
	      ]
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
	          "attr": {
	            "show": function () {return this.showSearch}
	          },
	          "classList": [
	            "search"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.showPlus}
	          },
	          "classList": [
	            "plus"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = {
	  "#title": {
	    "backgroundColor": "#272727",
	    "height": "100px",
	    "alignItems": "center",
	    "justifyContent": "space-between"
	  },
	  "#title #name": {
	    "fontSize": "40px",
	    "marginLeft": "30px",
	    "color": "#FFFFFF",
	    "lines": 1,
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
	          "t": "d"
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
	  "#title #back": {
	    "width": "50px",
	    "height": "50px",
	    "marginLeft": "25px",
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
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "back"
	        }
	      ]
	    }
	  },
	  "#title>.actions": {
	    "height": "100%",
	    "alignItems": "center",
	    "marginRight": "30px",
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
	  }
	}

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['showBack', 'showText', 'showPlus', 'showSearch', 'text'],
	    data: {},
	    onInit: function onInit() {},
	    back: function back() {
	        _system2.default.back();
	    }
	};}

/***/ },

/***/ 36:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "main"
	  },
	  "id": "main",
	  "children": [
	    {
	      "type": "comp-title",
	      "attr": {
	        "showBack": "true",
	        "showText": "true",
	        "showPlus": "false",
	        "showSearch": "false",
	        "text": function () {return this.title}
	      }
	    },
	    {
	      "type": "web",
	      "attr": {
	        "src": function () {return this.src},
	        "id": "web"
	      },
	      "id": "web",
	      "events": {
	        "titlereceive": "onTitleReceive"
	      }
	    }
	  ]
	}

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = {
	  "#main": {
	    "flexDirection": "column"
	  }
	}

/***/ },

/***/ 38:
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
	    props: ['src'],
	    data: {
	        src: "",
	        title: ""
	    },
	    onInit: function onInit() {},
	    onReady: function onReady() {},
	    onBackPress: function onBackPress() {
	        this.$element('web').canBack({
	            callback: function (e) {
	                if (e) {
	                    this.$element('web').back();
	                } else {
	                    _system2.default.back();
	                }
	            }.bind(this)
	        });
	        return true;
	    },
	    onTitleReceive: function onTitleReceive(t) {
	        this.title = t.title;
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

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map