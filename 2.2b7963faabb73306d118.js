(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Row", function() { return row; });
__webpack_require__.d(components_namespaceObject, "Col", function() { return col; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(6);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(7);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./src/markdown/zh-cn/grid/index.scss
var grid = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/esm.js
var esm = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/highlight.js
var highlight = __webpack_require__(46);
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/languages/javascript.js
var javascript = __webpack_require__(47);
var javascript_default = /*#__PURE__*/__webpack_require__.n(javascript);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/construct.js
var construct = __webpack_require__(48);
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// EXTERNAL MODULE: ./node_modules/babel-standalone/babel.js
var babel = __webpack_require__(49);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(50);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(33);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var helpers_classCallCheck = __webpack_require__(35);
var helpers_classCallCheck_default = /*#__PURE__*/__webpack_require__.n(helpers_classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var helpers_createClass = __webpack_require__(36);
var helpers_createClass_default = /*#__PURE__*/__webpack_require__.n(helpers_createClass);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var helpers_possibleConstructorReturn = __webpack_require__(37);
var helpers_possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(helpers_possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/getPrototypeOf.js
var helpers_getPrototypeOf = __webpack_require__(38);
var helpers_getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(helpers_getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var helpers_inherits = __webpack_require__(39);
var helpers_inherits_default = /*#__PURE__*/__webpack_require__.n(helpers_inherits);

// EXTERNAL MODULE: ../node_modules/react/index.js
var node_modules_react = __webpack_require__(34);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(40);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__(41);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ../src/components/grid/row-context.tsx

var RowContext = node_modules_react["createContext"]({
  gutter: 0
});
/* harmony default export */ var row_context = (RowContext);
// CONCATENATED MODULE: ../src/components/grid/common.ts
// 顺序不能颠倒
var breakPointMap = {
  xxl: '(min-width: 1600px)',
  xl: '(min-width: 1200px)',
  lg: '(min-width: 992px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 576px)',
  xs: '(max-width: 575px)'
};
var breakPointArray = Object.keys(breakPointMap);
// CONCATENATED MODULE: ../src/components/_config/index.ts
var clsPrefix = 'xl';
// CONCATENATED MODULE: ../src/components/grid/row.tsx








var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};







var enquire;

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {},
      onchange: null,
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      dispatchEvent: function dispatchEvent() {
        return true;
      }
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = __webpack_require__(57);
}

var row_Row =
/*#__PURE__*/
function (_React$Component) {
  helpers_inherits_default()(Row, _React$Component);

  function Row() {
    var _this;

    helpers_classCallCheck_default()(this, Row);

    _this = helpers_possibleConstructorReturn_default()(this, helpers_getPrototypeOf_default()(Row).apply(this, arguments));
    _this.state = {
      media: {}
    };
    return _this;
  }

  helpers_createClass_default()(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var breakPoint = _step.value;
          enquire.register(breakPointMap[breakPoint], {
            match: function match() {
              if (typeof_default()(_this2.props.gutter) !== 'object') {
                return;
              }

              _this2.setState(function (prevState) {
                return {
                  media: Object.assign({}, prevState.media, defineProperty_default()({}, breakPoint, true))
                };
              });
            },
            unmatch: function unmatch() {
              if (typeof_default()(_this2.props.gutter) !== 'object') {
                return;
              }

              _this2.setState(function (prevState) {
                return {
                  media: Object.assign({}, prevState.media, defineProperty_default()({}, breakPoint, false))
                };
              });
            },
            // Keep a empty destory to avoid triggering unmatch when unregister
            destroy: function destroy() {}
          });
        };

        for (var _iterator = breakPointArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = breakPointArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var breakPoint = _step2.value;
          enquire.unregister(breakPointMap[breakPoint]);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "getGutter",
    value: function getGutter() {
      var gutter = this.props.gutter;

      if (!gutter) {
        return 0;
      }

      if (typeof gutter === 'number') {
        return gutter;
      }

      if (typeof_default()(gutter) === 'object') {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = breakPointArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var breakPoint = _step3.value;

            if (this.state.media[breakPoint] && gutter[breakPoint] !== undefined) {
              return gutter[breakPoint];
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      return 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _a = this.props,
          type = _a.type,
          justify = _a.justify,
          align = _a.align,
          className = _a.className,
          style = _a.style,
          children = _a.children,
          others = __rest(_a, ["type", "justify", "align", "className", "style", "children"]);

      var gutter = this.getGutter();
      var rowClsPrefix = "".concat(clsPrefix, "-row");
      var classes = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, rowClsPrefix, !type), defineProperty_default()(_classNames, "".concat(rowClsPrefix, "-").concat(type), type), defineProperty_default()(_classNames, "".concat(rowClsPrefix, "-").concat(type, "--").concat(justify), type && justify), defineProperty_default()(_classNames, "".concat(rowClsPrefix, "-").concat(type, "--").concat(align), type && align), _classNames), className);
      var rowStyle = gutter > 0 ? Object.assign({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;
      delete others.gutter;
      return node_modules_react["createElement"](row_context.Provider, {
        value: {
          gutter: gutter
        }
      }, node_modules_react["createElement"]("div", Object.assign({}, others, {
        className: classes,
        style: rowStyle
      }), children));
    }
  }]);

  return Row;
}(node_modules_react["Component"]);


row_Row.propTypes = {
  gutter: prop_types["oneOfType"]([prop_types["number"], prop_types["shape"]({
    xxl: prop_types["number"],
    xl: prop_types["number"],
    lg: prop_types["number"],
    md: prop_types["number"],
    sm: prop_types["number"],
    xs: prop_types["number"]
  })]),
  type: prop_types["oneOf"](['flex']),
  align: prop_types["oneOf"](['top', 'middle', 'bottom']),
  justify: prop_types["oneOf"](['start', 'end', 'center', 'space-around', 'space-between']),
  className: prop_types["string"],
  children: prop_types["node"]
};
// CONCATENATED MODULE: ../src/components/row/index.ts

/* harmony default export */ var row = (row_Row);
// CONCATENATED MODULE: ../src/components/grid/col.tsx







var col_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};








var col_validator = function validator(propValue, // @ts-ignore
key, componentName, // @ts-ignore
location, propFullName) {
  if (typeof propValue === 'number') {
    if (propValue < 0 || propValue > 24) {
      return new Error("prop '".concat(propFullName, "' supplied to '").concat(componentName, " should be in 0-24 but actually '").concat(propValue, "'."));
    }
  } else if (typeof_default()(propValue) === 'object') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = breakPointArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _key = _step.value;
        var val = propValue[_key];

        if (val === undefined) {
          continue;
        }

        if (typeof val === 'number') {
          if (propValue < 0 || propValue > 24) {
            return new Error("prop '".concat(propFullName, "' supplied to '").concat(componentName, " is object, its prop '").concat(_key, "' be in 0-24 but actually '").concat(val, "'."));
          }
        } else {
          return new Error("prop '".concat(propFullName, "' supplied to '").concat(componentName, " is object, its prop '").concat(_key, "' should be a number."));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    return new Error("prop '".concat(propFullName, "' supplied to '").concat(componentName, " should be a number or suitable object."));
  }

  return null;
};

var colSpanValidater = col_validator;

var col_Col =
/*#__PURE__*/
function (_React$Component) {
  helpers_inherits_default()(Col, _React$Component);

  function Col() {
    helpers_classCallCheck_default()(this, Col);

    return helpers_possibleConstructorReturn_default()(this, helpers_getPrototypeOf_default()(Col).apply(this, arguments));
  }

  helpers_createClass_default()(Col, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          className = _a.className,
          children = _a.children,
          style = _a.style,
          others = col_rest(_a, ["className", "children", "style"]);

      var classArray = [];
      var spanArray = ['span', 'order', 'offset', 'push', 'pull'];
      var colClsPrefix = "".concat(clsPrefix, "-col");

      for (var _i = 0; _i < spanArray.length; _i++) {
        var prop = spanArray[_i];
        var propValue = others[prop];

        if (typeof propValue === 'number') {
          classArray.push("".concat(colClsPrefix, "-").concat(prop, "-").concat(propValue));
        } else if (typeof_default()(propValue) === 'object') {
          for (var key in propValue) {
            var val = propValue[key];
            classArray.push("".concat(colClsPrefix, "-").concat(prop, "-").concat(key, "-").concat(val));
          }
        }

        delete others[prop];
      }

      var classes = classnames_default()(colClsPrefix, classArray, className);
      return node_modules_react["createElement"](row_context.Consumer, null, function (_ref) {
        var gutter = _ref.gutter;
        var colStyle = gutter > 0 ? Object.assign({
          paddingLeft: gutter / 2,
          paddingRight: gutter / 2
        }, style) : style;
        return node_modules_react["createElement"]("div", Object.assign({}, others, {
          style: colStyle,
          className: classes
        }), children);
      });
    }
  }]);

  return Col;
}(node_modules_react["Component"]);


col_Col.propTypes = {
  span: colSpanValidater,
  order: colSpanValidater,
  offset: colSpanValidater,
  push: colSpanValidater,
  pull: colSpanValidater,
  className: prop_types["string"],
  children: prop_types["node"]
};
// CONCATENATED MODULE: ../src/components/col/index.ts

/* harmony default export */ var col = (col_Col);
// CONCATENATED MODULE: ../src/components/index.tsx


// CONCATENATED MODULE: ./src/utils/transformCode.ts




function encodeCode(code) {
  return code.replace(/\\n/g, '\\\\n').replace(/\n/g, '\\n');
}
function decodeCode(code) {
  return code.replace(/\\n/g, '\n').replace(/\\\\n/g, '\\n');
}
function transformCode(code) {
  var tramsform = babel["transform"](code, {
    presets: ['es2015', 'react']
  }).code;
  return "var exports = {}\n".concat(tramsform, "\nreturn exports.default");
}
function renderCode(code) {
  var transform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var newCode = code;

  if (transform) {
    newCode = transformCode(newCode);
  }

  var args = ['React'];
  var argv = [react];

  for (var key in components_namespaceObject) {
    args.push(key); // @ts-ignore

    argv.push(components_namespaceObject[key]);
  }

  args.push(newCode);

  var Ele = construct_default()(Function, args).apply(undefined, argv);

  return react["createElement"](Ele);
}
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/vs.css
var vs = __webpack_require__(61);

// EXTERNAL MODULE: ./src/components/demo-box/index.scss
var demo_box = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/demo-box/index.tsx











highlight_default.a.registerLanguage('jsx', javascript_default.a);

var demo_box_DemoBox =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(DemoBox, _React$Component);

  function DemoBox() {
    classCallCheck_default()(this, DemoBox);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DemoBox).apply(this, arguments));
  }

  createClass_default()(DemoBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children;
      var transformTitle = title.replace(/`([^`\n]+)`/g, '<code class="md-code-inline">$1</code>');
      var transformDesc = description.replace(/`([^`\n]+)`/g, '<code class="md-code-inline">$1</code>').replace(/\n/g, '<br/>');
      var code = decodeCode(children);
      var codeRender = renderCode(code);
      var ret = highlight_default.a.highlightAuto(code);
      return react["createElement"]("div", {
        className: 'demo-box'
      }, react["createElement"]("div", {
        className: 'view'
      }, codeRender), react["createElement"]("div", {
        className: 'info-wrapper'
      }, react["createElement"]("div", {
        className: 'title',
        dangerouslySetInnerHTML: {
          __html: transformTitle
        }
      }), react["createElement"]("div", {
        className: 'description',
        dangerouslySetInnerHTML: {
          __html: transformDesc
        }
      })), react["createElement"]("div", {
        className: 'code-wrapper'
      }, react["createElement"]("pre", null, react["createElement"]("code", {
        className: "hljs jsx",
        dangerouslySetInnerHTML: {
          __html: ret.value
        }
      }))));
    }
  }]);

  return DemoBox;
}(react["Component"]);


// EXTERNAL MODULE: ./src/components/markdown/index.scss
var markdown = __webpack_require__(63);

// CONCATENATED MODULE: ./src/components/markdown/index.tsx











var components_markdown_default =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(_default, _React$Component);

  function _default() {
    classCallCheck_default()(this, _default);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(_default).apply(this, arguments));
  }

  createClass_default()(_default, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var regex = / *::: *demo *(.+)\n(((?!```).*\n)+).+\n(((?!```).*\n)+).+\s+:::/;
      var str = children;

      while (true) {
        var match = str.match(regex);

        if (!match) {
          break;
        }

        var title = match[1];
        var description = match[2].replace(/\n+$/, '');
        var content = match[4].replace(/\n+$/, '');
        str = str.replace(regex, "<DemoBox title=\"".concat(title, "\" description=\"").concat(description, "\" children=\"").concat(encodeCode(content), "\"/>\n"));
      }

      return react["createElement"](esm["a" /* default */], {
        className: 'md',
        options: options
      }, str);
    }
  }]);

  return _default;
}(react["Component"]);


var options = {
  overrides: {
    DemoBox: {
      component: demo_box_DemoBox
    },
    code: {
      props: {
        className: 'md-code-inline'
      }
    },
    ol: {
      props: {
        className: 'md-ol'
      }
    },
    ul: {
      props: {
        className: 'md-ul'
      }
    },
    blockquote: {
      props: {
        className: 'md-blockquote'
      }
    },
    table: {
      props: {
        className: 'md-table'
      }
    }
  }
}; // const codeCmp = (props: any) => {
//     const { children, className } = props
//     let language = (className || '').replace(/^lang-/, '')
//     if (language || children.indexOf('\n') > -1) {
//         language = language || 'text'
//         let html = children
//         if (language && hljs.getLanguage(language)) {
//             try {
//                 html = hljs.highlight(language, children).value
//             } catch (__) {
//             }
//         }
//         return <code className={`hljs md-code-block md-${language}`} dangerouslySetInnerHTML={{ __html: html }} />
//     }
//     return <code className={`md-code-inline`}>{props.children}</code>
// }
// CONCATENATED MODULE: ./src/markdown/zh-cn/grid/index.md
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return grid_Component; });









var grid_Component =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Component, _React$Component);

  function Component() {
    classCallCheck_default()(this, Component);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Component).apply(this, arguments));
  }

  createClass_default()(Component, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(components_markdown_default, {
        children: "\n\n# \u6805\u683C\u7CFB\u7EDF\n\n\u53C2\u8003 bootstrap \u7684\u6805\u683C\u7CFB\u7EDF\n\n::: demo \u57FA\u7840\u7528\u6CD5\n\u4F7F\u7528`span`,`gutter`\u5B9E\u73B0\u57FA\u672C\u7684\u5E03\u5C40\uFF08`span`\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u5B9E\u73B0\u5185\u5BB9\u5757\u7684\u9690\u85CF)\u3002\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={4}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={5}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={7}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={8}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={0}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={8}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo \u504F\u79FB\u5E03\u5C40\n\u4F7F\u7528`offset`,`push`,`pull`\u5B9E\u73B0\u5185\u5BB9\u7684\u504F\u79FB\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} offset={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} push={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6} pull={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6} offset={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} pull={12}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo \u54CD\u5E94\u5F0F\u5E03\u5C40\n`span`\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u7684\u5F62\u5F0F\u5B9E\u73B0\u4E0D\u540C\u5C3A\u5BF8\u4E0B\u7684\u5E03\u5C40\n\u53EF\u4EE5\u8BBE\u7F6E\u7684\u53C2\u6570\u6709:`xs`,`sm`,`md`,`lg`,`xl`,`xxl`\n\n```jsx\nexport default function() {\n  return (\n    <div className='grid-row-box'>\n      <Row\n        gutter={{\n          xs: 8,\n          sm: 10,\n          md: 15,\n          lg: 20,\n          xl: 25,\n          xxl: 30\n        }}\n      >\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 4,\n            lg: 6\n          }}\n        >\n          <div className='grid-col-box'>col1</div>\n        </Col>\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 5,\n            lg: 10,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col2</div>\n        </Col>\n        <Col\n          span={{\n            xs: 8,\n            sm: 6,\n            md: 7,\n            lg: 4,\n            xl: 0,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col3</div>\n        </Col>\n        <Col\n          span={{\n            xs: 0,\n            sm: 6,\n            md: 8,\n            lg: 4,\n            xl: 8,\n            xxl: 6\n          }}\n        >\n          <div className='grid-col-box'>col4</div>\n        </Col>\n      </Row>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo \u54CD\u5E94\u5F0F\u504F\u79FB\n`offset`,`push`,`pull`\u4E5F\u662F\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u3002\n\u53EF\u4EE5\u8BBE\u7F6E\u7684\u53C2\u6570\u6709:`xs`,`sm`,`md`,`lg`,`xl`,`xxl`\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col\n            span={6}\n            offset={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n          >\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col\n            span={6}\n            push={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n          >\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box'>\n        <Row gutter={10}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col\n            span={6}\n            pull={{\n              xs: 1,\n              sm: 2,\n              md: 3,\n              lg: 4,\n              xl: 5,\n              xxl: 6\n            }}\n            offset={6}\n          >\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n::: demo flex \u5E03\u5C40\n\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u6307\u5B9A`type={'flex'}`,\n\u7136\u540E\u53EF\u4EE5\u4F7F\u7528`align`\u548C`justify`\u5B9E\u73B0\u6C34\u5E73\u548C\u5782\u76F4\u65B9\u5411\u7684\u4E0D\u540C\u65B9\u5F0F\u7684\u5BF9\u9F50,\n\u4E5F\u53EF\u4EE5\u4F7F\u7528`order`\u6539\u53D8\u5185\u5BB9\u5757\u7684\u524D\u540E\u987A\u5E8F(order \u4E5F\u662F\u652F\u6301\u54CD\u5E94\u5F0F\u7684)\u3002\n\n```jsx\nexport default function() {\n  return (\n    <div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'top'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'middle'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} align={'bottom'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col4</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'start'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'center'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'} justify={'end'}>\n          <Col span={6}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n      <div className='grid-row-box grid-row-box--flex'>\n        <Row gutter={10} type={'flex'}>\n          <Col span={6} order={3}>\n            <div className='grid-col-box'>col1</div>\n          </Col>\n          <Col span={6} order={1}>\n            <div className='grid-col-box'>col2</div>\n          </Col>\n          <Col span={6} order={2}>\n            <div className='grid-col-box'>col3</div>\n          </Col>\n        </Row>\n      </div>\n    </div>\n  )\n}\n```\n\n:::\n\n## Row \u5C5E\u6027\n\n| \u53C2\u6570    | \u8BF4\u660E                                  | \u7C7B\u578B            | \u53EF\u9009\u503C                                              | \u9ED8\u8BA4\u503C |\n| ------- | ------------------------------------- | --------------- | --------------------------------------------------- | ------ |\n| gutter  | \u5185\u5BB9\u5757\u95F4\u9699(\u652F\u6301\u54CD\u5E94\u5F0F)                | number / object | >=0                                                 | 0      |\n| type    | \u5E03\u5C40\u7C7B\u578B                              | flex            | -                                                   | -      |\n| justify | \u6805\u683C\u5DE6\u53F3\u5BF9\u9F50\u65B9\u5F0F(\u5728`type=flex`\u4E0B\u6709\u6548) | string          | start / end / center / space-around / space-between | \u2014      |\n| align   | \u6805\u683C\u4E0A\u4E0B\u5BF9\u9F50\u65B9\u5F0F(\u5728`type=flex`\u4E0B\u6709\u6548) | string          | top / middle / bottom                               | \u2014      |\n\n## Col \u5C5E\u6027\n\n| \u53C2\u6570   | \u8BF4\u660E                                       | \u7C7B\u578B            | \u53EF\u9009\u503C | \u9ED8\u8BA4\u503C |\n| ------ | ------------------------------------------ | --------------- | ------ | ------ |\n| span   | \u6805\u683C\u5360\u636E\u7684\u5217\u6570(\u652F\u6301\u54CD\u5E94\u5F0F)(**0 \u8868\u793A\u9690\u85CF**) | number / object | 0-24   | \u2014      |\n| offset | \u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u5217\u6570(\u652F\u6301\u54CD\u5E94\u5F0F)             | number / object | 1-24   | \u2014      |\n| push   | \u6805\u683C\u5411\u53F3\u79FB\u52A8\u7684\u5217\u6570(\u652F\u6301\u54CD\u5E94\u5F0F)             | number / object | 1-24   | \u2014      |\n| pull   | \u6805\u683C\u5411\u5DE6\u79FB\u52A8\u7684\u5217\u6570(\u652F\u6301\u54CD\u5E94\u5F0F)             | number / object | 1-24   | \u2014      |\n| order  | \u6805\u683C\u987A\u5E8F\uFF0Cflex \u5E03\u5C40\u6A21\u5F0F\u4E0B\u6709\u6548(\u652F\u6301\u54CD\u5E94\u5F0F)  | number / object | 1-24   | \u2014      |\n"
      });
    }
  }]);

  return Component;
}(react_default.a.Component);



/***/ })

}]);