"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Progress;
var _react = require("react");
require("./progress.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * 
 * @param {String} props.width width of slider in percentage
 * @param {String} props.height height of the slider in pixels
 * @param {Number} props.percentage calculate the actual percentage and give it as a number 
 * @returns slideshow
 * 
 */

function Progress(props) {
  var progressBar = document.querySelector('.circularProgress');
  var valueContainer = document.querySelector('.value-container');
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
    var element = document.getElementById('printValue');
    element.textContent = "".concat(progressValue, "%");
    document.getElementById('circle').style.background = "conic-gradient(\n      #0e8692 ".concat(progressValue * 3.6, "deg,\n      #cadcff ").concat(progressValue * 3.6, "deg\n    )");
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  var setStyle = {
    'width': props.width,
    'height': props.height
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "circularProgress",
    id: "circle",
    style: setStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "value-container",
    id: "printValue"
  }, "0%"));
}
Progress.propTypes = {
  'width': _propTypes["default"].string,
  'height': _propTypes["default"].string
};
Progress.defaultProps = {
  'width': '250px',
  'height': '250px'
};
