import "./progress.css";
import PropTypes from "prop-types";
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
    console.log(element);
    if (element) {
      element.textContent = progressValue;
    }
    console.log(progressValue);
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
  return (
    <div className="circleDiv">
      <div className="circularProgress" id="circle" style={setStyle}>
        <div className="value-container" id="printValue"></div>
      </div>
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
