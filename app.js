
// Dom Selector
let greet = document.querySelector('.greeting');
let subGreet =  document.querySelector('.subGreeting');
let clock =  document.querySelector('.clock');
let img = document.querySelector('img');
let body = document.querySelector('body');
let date = document.querySelector('.date');

// Date inbuild API
let time = new Date();


// To check AM or PM
function amOrPm(time)
{
     return (time.getHours()-12>=0&&time.getHours()-12<12)? 'PM':'AM';
}

// to covert 24 hours into 12hours
function properHour(amPm,time)
{
   return amPm==="AM" ? time.getHours():time.getHours()-12
}

// function to get current time
const getCurrentTime = () =>
{
// Date inbuild API
let time = new Date();

let  amPm = amOrPm(time);
let currentHour = properHour(amPm,time);



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
    let greetValue;
   if((getCurrentTime().hour>=6&&getCurrentTime().hour<12)&&getCurrentTime().amOrPm==='AM')
   {
       greetValue =  greeting.morning
       body.classList.add('morning');
       img.src="Assests/2442223633.png";
   }
   else if((getCurrentTime().hour>=6&&getCurrentTime().hour<9)&&getCurrentTime().amOrPm==='PM')
   {
        greetValue = greeting.evening
        body.classList.add('evening');
        img.src = "Assests/moon.png";
        
   }
   else if((getCurrentTime().hour===12||getCurrentTime().hour<6)&&getCurrentTime().amOrPm==='PM')
   {
      greetValue =  greeting.afternoon
      body.classList.add('afternoon');
      img.src="Assests/2442223633.png";
     }
   else
   {
        greetValue = greeting.night ;
        body.classList.add('night');
        img.src = "Assests/moon.png";
   }
   return greetValue

}

clock.innerHTML = `${getCurrentTime().hour}:${getCurrentTime().minute}:${getCurrentTime().second}  ${getCurrentTime().amOrPm}`;
setInterval(()=>{
    clock.innerHTML = `${getCurrentTime().hour}:${getCurrentTime().minute}:${getCurrentTime().second} ${getCurrentTime().amOrPm}`;
    greet.innerHTML = greetSelector().greeting;
    subGreet.innerHTML = greetSelector().subGreeting;
    date.innerHTML = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`; 
},999)


