import { useState } from 'react';
import { useEffect } from 'react';
import './progress.css';
import PropTypes from 'prop-types'
export default function Progress(props) {
  // const progressBar = document.querySelector('.circularProgress');
  //const circle = document.getElementById('circle')
  //const valueContainer = document.getElementById('printValue');
  //const element = document.getElementById('printValue');
  console.log(typeof(props.percentage));
  let progressValue = 0;
  let progressEndValue = 0;
  if (props.percentage){
    progressEndValue = props.percentage;
  }else if (props.percentage === undefined){
    progressEndValue = 1
  }
  let speed = 45;
 

  let progress = setInterval(() => {
    
    progressValue ++;
    //console.log(progressValue);
    //valueContainer.textContent = `${progressValue}%`
    const element = document.getElementById('printValue');
    console.log(element);
    if(element){
    element.textContent = progressValue
    }else{
      console.log('error bro');
    }
    console.log(progressValue);
    const progressBar = document.getElementById('circle');
    progressBar.style.background = `conic-gradient(
      #0e8692 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`
    if(progressValue === progressEndValue){
      clearInterval(progress);
    }
  },speed)

  const setStyle = {
    'width' : props.width ,
    'height' : props.height
  }
  return(
      <div className="circularProgress" id='circle' style={setStyle}>
        <div className="value-container" id='printValue'></div>
      </div>
  )

};


Progress.propTypes = {
  'width' : PropTypes.string ,
  'height' : PropTypes.string ,
}

Progress.defaultProps = {
  'width' : '250px' ,
  'height' : '250px' ,
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
