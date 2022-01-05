// function to get current time
const getCurrentTime = () =>
{
let time = new Date();
function amOrPm()
{
     return time.getHours()-12>=1 ? 'Pm':'Am';
}
let  amPm = amOrPm();
function properHour(amPm)
{
   return amPm==="Am" ? time.getHours():time.getHours()-12
}
let currentHour = properHour(amPm);


let currentTime = {
    hour:currentHour,   
    minute:time.getMinutes(),
    second:time.getSeconds(),
    amOrPm:amPm
};

return currentTime
}



console.log(getCurrentTime());

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

let greet = document.querySelector('.greeting');
let subGreet =  document.querySelector('.subGreeting');
let clock =  document.querySelector('.clock');

// console.log(getCurrentTime());
// setInterval(()=>{
//     console.log(getCurrentTime());
// },999)


