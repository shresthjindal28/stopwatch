const display = document.querySelector('#display');
const startbtn = document.getElementById('startButton');
const stopbtn = document.getElementById('pauseButton');
const resetbtn = document.querySelector('#resetButton');

let starttime = 0;
let elapsedtime = 0;
let currenttime=0;
let paused = true;
let intervalid;
let hr= 0;
let min = 0;   
let sec = 0;

startbtn.addEventListener('click',()=>{
    console.log('startbtn');
    if(paused){
        paused = false;
        starttime = Date.now() - elapsedtime;
        intervalid = setInterval(updatetime, 1000);
    }
});
stopbtn.addEventListener('click',()=>{
    if(!paused)
    {
        paused = true;
        elapsedtime = Date.now() - starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener('click',()=>{
    paused = true;
    clearInterval(intervalid);
    starttime = 0;
    elapsedtime = 0;
    currenttime=0;
    paused = true;
    hr= 0;
    min = 0;   
    sec = 0;
    display.textContent = "00:00:00";
});


function updatetime(){
    elapsedtime = Date.now() - starttime;

    sec = Math.floor((elapsedtime/1000)%60);
    min = Math.floor((elapsedtime/(1000*60))%60);
    hr = Math.floor((elapsedtime/(1000*60*60))%24);

    sec = pad(sec);
    min = pad(min);
    hr = pad(hr);


    display.textContent = `${hr}:${min}:${sec}`;

  
    function pad(unit){
        return (("0")+ unit).length > 2 ? unit : "0" + unit ;
    }
}