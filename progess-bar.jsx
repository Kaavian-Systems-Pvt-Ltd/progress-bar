"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Progress;
require("./progress.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Progress(props) {
  console.log(_typeof(props.percentage));
  var progressValue = 0;
  var progressEndValue = 0;
  if (props.percentage) {
    progressEndValue = props.percentage;
  } else if (props.percentage === undefined) {
    progressEndValue = 1;
  }
  var speed = 45;
  var progress = setInterval(function () {
    progressValue++;
    var element = document.getElementById("printValue");
    console.log(element);
    if (element) {
      element.textContent = progressValue;
    }
    console.log(progressValue);
    document.getElementById("circle").style.background = "conic-gradient(\n      #0e8692 ".concat(progressValue * 3.6, "deg,\n      #cadcff ").concat(progressValue * 3.6, "deg\n    )");
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  var setStyle = {
    width: props.width,
    height: props.height
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "circleDiv",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "circularProgress",
      id: "circle",
      style: setStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "value-container",
        id: "printValue"
      })
    })
  });
}
Progress.propTypes = {
  width: _propTypes["default"].string,
  height: _propTypes["default"].string,
  "font-size": _propTypes["default"].string
};
Progress.defaultProps = {
  width: "250px",
  height: "250px",
  "font-size": "50px"
};
