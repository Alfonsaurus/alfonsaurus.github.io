//---------------First G------------------------//
var luggage = {
    container: document.getElementById('firstG'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/anim/luggaGe.json'
};
//---------------FirstO-------------------------//
var cauldron = {
    container: document.getElementById('firstO'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/anim/cauldrOn.json'
};
//---------------Second O------------------------//
var wizzord = {
    container: document.getElementById('secondO'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/anim/wizzOrd.json'
};

//---------------Second G------------------------//
//----Idle----//
var theEight = {
    container: document.getElementById('secondG'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'js/anim/theEiGht.json'
};
//---------------Only L------------------------//
var onlyLIdle = {
    container: document.getElementById('onlyL'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'js/anim/onlyLIdle.json'
};

//----------------Only E----------------------//
var onlyEIdle = {
    container: document.getElementById('onlyE'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'js/anim/onlyEIdle.json'
};

var firstGanim = lottie.loadAnimation(luggage);
var firstOanim = lottie.loadAnimation(cauldron);
var secondOanim = lottie.loadAnimation(wizzord);
var secondGanim = lottie.loadAnimation(theEight);
var onlyLanim = lottie.loadAnimation(onlyLIdle);
var onlyEanim = lottie.loadAnimation(onlyEIdle);

var firstG, firstO, secondO, secondG, onlyL, onlyE;


window.addEventListener('load', function () {
    firstG = document.getElementById('firstG');
    firstO = document.getElementById('firstO');
    secondO = document.getElementById('secondO');
    secondG = document.getElementById('secondG');
    onlyL = document.getElementById('onlyL');
    onlyE = document.getElementById('onlyE');
});

firstGanim.addEventListener('DOMLoaded', function () {  
        init();
 
        function init(){
            console.log('firstG init');
            firstG.addEventListener('click', mouseElem);
            firstGanim.addEventListener('enterFrame', repeatIdle);
            firstGanim.play();
        }
        function repeatIdle() {
            if (firstGanim.currentRawFrame > 24) {
                console.log('firstG repeating idle');
                firstGanim.addEventListener('enterFrame', repeatIdle);
                firstGanim.goToAndPlay(0, true);
            }
        }
        function mouseElem() {
            console.log('firstG clicked');
            firstG.removeEventListener('click', mouseElem);
            firstGanim.removeEventListener('enterFrame', repeatIdle);
            firstGanim.playSegments([24, 144], true);
            firstGanim.addEventListener('complete', pause);
        }

        function pause() {
            console.log('firstG paused');
            firstGanim.removeEventListener('complete', pause);
            firstGanim.setSegment(144,firstGanim.totalFrames);
            firstGanim.loop = true;
            firstGanim.goToAndStop(144, true);
            firstGanim.play();
            //secondInit();
        }
});

firstOanim.addEventListener('DOMLoaded', function () {
    init();

    function init(){
       firstO.addEventListener('click', mouseElem);
       firstOanim.addEventListener('enterFrame', repeatIdle);
       firstOanim.goToAndPlay(0, true);
    }
    
    function repeatIdle() {
        if (firstOanim.currentRawFrame > 48) {
            firstOanim.addEventListener('enterFrame', repeatIdle);
            firstOanim.goToAndPlay(0, true);
        }
    }
    function mouseElem() {
        firstO.removeEventListener('click', mouseElem);
        firstOanim.removeEventListener('enterFrame', repeatIdle);
        firstOanim.playSegments([49, 60], true);  
        firstOanim.addEventListener('complete', pause);
    }

    function pause() {
        firstOanim.removeEventListener('complete', pause);
        firstOanim.setSegment(0,60);
        firstOanim.goToAndStop(0, true);
        init();
    }
});

secondOanim.addEventListener('DOMLoaded', function () {
    init();

    function init(){
        secondO.addEventListener('click', mouseElem);
        secondOanim.addEventListener('enterFrame', repeatIdle);
        secondOanim.goToAndPlay(0, true);  
    }
    function repeatIdle() {
        if (secondOanim.currentRawFrame > 24) {
            secondOanim.addEventListener('enterFrame', repeatIdle);
            secondOanim.goToAndPlay(0, true);
        }
    }
    function mouseElem() {
        secondO.removeEventListener('click', mouseElem);
        secondOanim.removeEventListener('enterFrame', repeatIdle);
        secondOanim.playSegments([24, 72], true);
        secondOanim.addEventListener('complete', pause);
    }

    function pause() {
        secondOanim.removeEventListener('complete', pause);
        secondOanim.setSegment(0,72);
        secondOanim.goToAndStop(0, true);
        init();
    }
});
secondGanim.addEventListener('DOMLoaded', function () {
    init();
    
    function init(){
        secondG.addEventListener('click', mouseElem);
        secondGanim.addEventListener('enterFrame', repeatIdle);
        secondGanim.goToAndPlay(0, true);
    }
    function repeatIdle() {
        if (secondGanim.currentRawFrame > 24) {
            secondGanim.addEventListener('enterFrame', repeatIdle);
            secondGanim.goToAndPlay(0, true);
        }
    }
    function mouseElem() {
        secondG.removeEventListener('click', mouseElem);
        secondGanim.removeEventListener('enterFrame', repeatIdle);
        secondGanim.playSegments([24, 72], true);
        secondGanim.addEventListener('complete', pause);
    }

    function pause() {
        secondGanim.removeEventListener('complete', pause);
        secondGanim.setSegment(0,72);
        secondGanim.goToAndStop(0, true);
        init();
    }
});

onlyLanim.addEventListener('DOMLoaded', function () {
    onlyLanim.play();
});

onlyEanim.addEventListener('DOMLoaded', function () {
    onlyEanim.play();
});


