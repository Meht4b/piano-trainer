//parameters 
let octaves = 10;
var pointer = document.getElementById('pointer');
var bpm = 60; 
var beatUnit = 50; //width of a beat

var root = document.querySelector(':root');

root.style.setProperty('--beatUnit',`${beatUnit}px`);

//to initialise the keyboard 
function keyboardGraphicsInit(){

    for (let i = 0 ;i<octaves*7;i++){
        var key = document.createElement('div');
        key.classList.add('whiteKey');
        document.getElementById('keyboardWhites').appendChild(key);
    }

    for (let i = 0;i<octaves;i++){
        const blackOctave = document.createElement('div');
        blackOctave.classList.add('blackKeyOctave')
        for (let i=0;i<3;i++){
        var key = document.createElement('div');
        key.classList.add('blackKey');
        blackOctave.appendChild(key);
        }
        key = document.createElement('div');
        key.classList.add('blackKeyEmpty');
        blackOctave.appendChild(key);
        for (let i=0;i<2;i++){
            var key = document.createElement('div');
            key.classList.add('blackKey');
            blackOctave.appendChild(key);
        };
        key = document.createElement('div');
        key.classList.add('blackKeyEmpty');
        blackOctave.appendChild(key);

        document.getElementById('keyboardBlacks').appendChild(blackOctave);

    };
}

//mapping the sliders to their respective variables
document.getElementById("verticalSlider").oninput = function() {
  root.style.setProperty('--verticalSize',this.value.toString()+'px');
}
document.getElementById("horizontalSlider").oninput = function() {
    root.style.setProperty('--horizontalSize',this.value.toString()+'px');
  }


//custom timer class
function Timer(callback,timeInterval){
    this.timeInterval = timeInterval;
    //start 
    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.round,this.timeInterval);
    }

    this.stop = () => {
        clearTimeout(this.timeout);
    }

    this.round = () => {
        let drift = Date.now() - this.expected;
        callback();
        this.expected += this.timeInterval;
        this.timeout = setTimeout(this.round,this.timeInterval-drift);
    }
}

const pointerAnimation = new Timer(animatePointer,10);
pointerAnimation.start();
const distPerMilli = bpm/60 * beatUnit/100;
console.log(distPerMilli,beatUnit)

function animatePointer(){
    pointer.style.left = `${Number(pointer.style.left.slice(0,-2)) + distPerMilli}px`;
};
