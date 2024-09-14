let octaves = 10;
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



var root = document.querySelector(':root')

document.getElementById("verticalSlider").oninput = function() {
  root.style.setProperty('--verticalSize',this.value.toString()+'px');
}
document.getElementById("horizontalSlider").oninput = function() {
    root.style.setProperty('--horizontalSize',this.value.toString()+'px');
  }