# progress-bar

## Description 

The usage of this package is progressCircle(percentage).

# STEPS FOR INSTALLING:
In your react file package.json file in dependencies just paste it

"@kaaviansys/progressBar": "https://github.com/Kaavian-Systems-Pvt-Ltd/progress-bar.git"

after pasting this line in package.json file in dependencies follow this step.

npm install @kaaviansys/progressBar.

After installed the package import the package in your react file and then you can make use of the progress-circle.

# < Progress/>

<Progress /> in this react function you can easiy customize the progressCircle like ( height, width, fontsize ).

## Usage

### if you pass any argumets it's run with default value
```

import logo from './logo.svg';
import './App.css';
import Progress from 'progress-circle'
function App() {
  return (
    <div className="App">
      <Progress 
      width= {'300px'}
      height= {'300px'}
      percentage = {70}
      fontsize = {'90px'}
      />
    </div>
  );
}

export default App;
```

## or

### if you didn't pass any argumets it's run with default value

```

import logo from './logo.svg';
import './App.css';
import Progress from 'progress-circle'
function App() {
  return (
    <div className="App">
      <Progress />
    </div>
  );
}

export default App;
```