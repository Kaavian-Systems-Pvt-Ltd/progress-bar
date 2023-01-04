import './progress.css';
import PropTypes from 'prop-types';


/**
 * 
 * @param {String} props.width width of slider in percentage
 * @param {String} props.height height of the slider in pixels
 * @param {Number} props.percentage calculate the actual percentage and give it as a number 
 * @returns slideshow
 * 
 */


export default function Progress(props) {
  const progressBar = document.querySelector('.circularProgress');
  const valueContainer = document.querySelector('.value-container');
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
    const element = document.getElementById('printValue');

    element.textContent = progressValue
 

    document.getElementById('circle').style.background = `conic-gradient(
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
        <div className="value-container" id='printValue'>0%</div>
      </div>
  )

}

Progress.propTypes = {
  'width' : PropTypes.string ,
  'height' : PropTypes.string ,
}

Progress.defaultProps = {
  'width' : '250px' ,
  'height' : '250px' ,
};