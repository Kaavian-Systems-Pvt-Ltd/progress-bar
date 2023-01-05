"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Progress;
var _react = require("react");
require("./progress.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function Progress(props) {
  // const progressBar = document.querySelector('.circularProgress');
  //const circle = document.getElementById('circle')
  //const valueContainer = document.getElementById('printValue');
  //const element = document.getElementById('printValue');
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
    //console.log(progressValue);
    //valueContainer.textContent = `${progressValue}%`
    var element = document.getElementById('printValue');
    console.log(element);
    if (element) {
      element.textContent = progressValue;
    } else {
      console.log('error bro');
      clearInterval(progress);
    }
    console.log(progressValue);
    //const progressBar = document.getElementById('circle');
    document.getElementById('circle').style.background = "conic-gradient(\n      #0e8692 ".concat(progressValue * 3.6, "deg,\n      #cadcff ").concat(progressValue * 3.6, "deg\n    )");
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
  var setStyle = {
    'width': props.width,
    'height': props.height
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "circularProgress",
    id: "circle",
    style: setStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "value-container",
      id: "printValue"
    })
  });
}
;
Progress.propTypes = {
  'width': _propTypes["default"].string,
  'height': _propTypes["default"].string
};
Progress.defaultProps = {
  'width': '250px',
  'height': '250px'
};

// import { useState } from 'react';
// import { useEffect } from 'react';
// import './progress.css';
// export default function Progress({present}) {
//   const [data, setData] = useState('');
//   // const anim = keyframes`
//   // 100%{ stroke-dashoffset:22.44; }`;
//   // const style = {
//   //   fill: 'none',
//   // stroke: 'cornflowerblue',
//   // strokeWidth: '1.5rem',
//   // strokeDasharray: '561',
//   // strokeDashoffset: '561',
//   // animation: `${anim} 2.7s linear forwards`
//   // } 
//   useEffect( ()=> {
//     let number = 100;
//     let counter = 0;
//     // let Progress = document.querySelector('span');
//     // const value = 561 - 561 * (present/100);
//     // console.log(value);
//     // Progress.style.strokeDashoffset(value)
//     setInterval( ()=> {
//       if(counter === present){
//         clearInterval();
//       }else{
//         console.log(counter);
//        counter = counter + 1;
//        setData(counter);
//       } 
//     }, 29)
//   },[] )
//   return (
//     <body className='progressBody'>
//   <div className="progressCircle">
//     <div className="outerCircle">
//       <div className="innerCircle">
//         <span className="number">
//           {data}{'%'}
//         </span>
//       </div>
//     </div>
//     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500">
//          <defs>
//             <linearGradient id="GradientColor">
//                <stop offset="0%" stop-color="#e91e63" />
//                <stop offset="100%" stop-color="#673ab7" />
//             </linearGradient>
//          </defs>
//          <circle cx="200" cy="200" r="90" stroke-linecap="round"  />
//  </svg>
//   </div>
//     </body>
//   )
// }

// // module.exports = { 
// //   Progress };
