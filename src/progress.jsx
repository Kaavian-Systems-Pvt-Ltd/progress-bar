import "./progress.css";
import PropTypes from "prop-types";


/**
 * 
 * @param {String} props.width width of the progress circle in pixels
 * @param {String} props.height height of the progress circle in pixels
 * @param {Number} props.percentage calculate the actual percentage and pass it 
 * @param {String} props.fontsize size of the font in pixels
 * @returns progressCircle
 * 
 */


export default function Progress(props) {
  console.log(typeof props.percentage);
  let progressValue = 0;
  let progressEndValue = 0;
  if (props.percentage) {
    progressEndValue = props.percentage;
  } else if (props.percentage === undefined) {
    progressEndValue = 1;
  }
  let speed = 45;

  let progress = setInterval(() => {
    progressValue++;
    const element = document.getElementById("printValue");
    if (element) {
      element.textContent = progressValue;
    }
    document.getElementById("circle").style.background = `conic-gradient(
      #0e8692 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  const setStyle = {
    width: props.width,
    height: props.height,
  };
  const setFontSize = {
    'font-size' : props.fontsize,
  }
  return (
    
      <div className="circularProgress" id="circle" style={setStyle}>
        <div className="value-container" id="printValue" style={setFontSize}></div>
      </div>
  
  );
}

Progress.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  "font-size": PropTypes.string,
};

Progress.defaultProps = {
  width: "250px",
  height: "250px",
  "font-size": "50px",
};
