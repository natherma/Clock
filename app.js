// function to get current time
const getCurrentTime = () =>
{

let time = new Date();
// To check Am or Pm
function amOrPm()
{
     return (time.getHours()-12>=0&&time.getHours()-12<12)? 'PM':'AM';
}
let  amPm = amOrPm();

// to covert 24 hours into 12hours
function properHour(amPm)
{
   return amPm==="AM" ? time.getHours():time.getHours()-12
}
let currentHour = properHour(amPm);

// object with current/proper Time
let currentTime = {
    hour:currentHour,   
    minute:time.getMinutes(),
    second:time.getSeconds(),
    amOrPm:amPm,
};

return currentTime
}

// greetings
let greeting = 
{
    morning:{
        greeting:"Good Morning!",subGreeting:"Every morning starts a new page in your story. Make it a great one today"
    },
    afternoon:{
        greeting:"Good Afternoon!",subGreeting:"The biggest motivation is your own thoughts, so think big and motivate yourself to win."
    },
    evening:{
        greeting:"Good Evening!",subGreeting:"The evening sings in a voice of amber, the dawn is surely coming"
    },
    night:{
        greeting:"Good Night!",subGreeting:"Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn."
    },
    
}

// greet selector function
let greetSelector = () => 
{
    
}


// Dom Selector
let greet = document.querySelector('.greeting');
let subGreet =  document.querySelector('.subGreeting');
let clock =  document.querySelector('.clock');



clock.innerHTML = `${getCurrentTime().hour}:${getCurrentTime().minute}:${getCurrentTime().second}  ${getCurrentTime().amOrPm}`;
setInterval(()=>{
    clock.innerHTML = `${getCurrentTime().hour}:${getCurrentTime().minute}:${getCurrentTime().second} ${getCurrentTime().amOrPm}`;
},999)


