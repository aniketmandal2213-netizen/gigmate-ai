// ======================================
// GIGMATE AI
// script.js (Part 1)
// ======================================

// Elements

const sendBtn = document.getElementById("sendBtn");

const userInput = document.getElementById("userInput");

const chatArea = document.getElementById("chatArea");



// ================================
// Send Button
// ================================

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});



// ================================
// Send Message
// ================================

function sendMessage(){

    let message=userInput.value.trim();

    if(message==="") return;

    addUserMessage(message);

    userInput.value="";

    typingAnimation();

    setTimeout(()=>{

        botReply(message);

    },1200);

}



// ================================
// User Message
// ================================

function addUserMessage(message){

chatArea.innerHTML +=

`

<div class="userMessage">

${message}

</div>

`;

chatArea.scrollTop=chatArea.scrollHeight;

}



// ================================
// Typing Animation
// ================================

function typingAnimation(){

chatArea.innerHTML +=

`

<div class="aiMessage" id="typing">

🤖 Typing...

</div>

`;

chatArea.scrollTop=chatArea.scrollHeight;

}



// ================================
// AI Reply
// ================================

function botReply(message){

document.getElementById("typing").remove();

message=message.toLowerCase();

let reply="";



if(message.includes("best time")){

reply="⏰ The best earning time today is between <b>7 PM - 10 PM</b>.";

}



else if(message.includes("best area")){

reply="📍 AI recommends <b>Boring Road</b> because demand is highest there.";

}



else if(message.includes("prediction")){

reply="📈 Expected earning for tomorrow is around <b>₹1800</b>.";

}



else if(message.includes("income")){

reply="💰 Work during peak hours and stay in high demand zones to increase income.";

}



else if(message.includes("hello")){

reply="👋 Hello! I'm GigMate AI. How can I help you today?";

}



else{

reply="🤖 Great question! Once Gemini AI is connected, I'll provide intelligent real-time answers.";

}



chatArea.innerHTML +=

`

<div class="aiMessage">

${reply}

</div>

`;

chatArea.scrollTop=chatArea.scrollHeight;

}
// ======================================
// GIGMATE AI
// script.js (Part 2)
// ======================================


// ================================
// Voice Recognition
// ================================

const voiceBtn = document.querySelector(".voiceBtn");

if ("webkitSpeechRecognition" in window) {

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {

        recognition.start();

        voiceBtn.innerHTML = '<i class="fa-solid fa-microphone-lines"></i>';

        voiceBtn.style.background = "#27ae60";

    });

    recognition.onresult = function (event) {

        const speech = event.results[0][0].transcript;

        userInput.value = speech;

    };

    recognition.onend = function () {

        voiceBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';

        voiceBtn.style.background = "";

    };

}



// ================================
// Quick Action Buttons
// ================================

const quickButtons = document.querySelectorAll(".quickBtn");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const text = button.innerText;

        userInput.value = text;

        sendMessage();

    });

});



// ================================
// Floating AI Button
// ================================

const floatingAI = document.querySelector(".floatingAI");

floatingAI.addEventListener("click", () => {

    userInput.focus();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ================================
// Auto Welcome Message
// ================================

window.onload = () => {

    setTimeout(() => {

        chatArea.innerHTML += `

        <div class="aiMessage">

        👋 Welcome to <b>GigMate AI</b><br><br>

        I can help you with:

        <br><br>

        📍 Best Area

        <br>

        ⏰ Best Time

        <br>

        💰 Income Tips

        <br>

        📈 Earnings Prediction

        <br>

        📅 Weekly Planner

        </div>

        `;

    }, 700);

};



// ================================
// Clear Chat Shortcut
// ================================

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key==="l"){

        e.preventDefault();

        chatArea.innerHTML="";

    }

});



// ================================
// Auto Scroll
// ================================

const observer = new MutationObserver(() => {

    chatArea.scrollTop = chatArea.scrollHeight;

});

observer.observe(chatArea, {

    childList: true

});



// ================================
// Console Message
// ================================

console.log("🚀 GigMate AI Loaded Successfully");
// ======================================
// GIGMATE AI
// script.js (Part 3)
// ======================================


// ======================================
// Future Gemini Integration
// ======================================

async function askGemini(prompt){

    /*
    ======================================

    Future Flow

    User

      ↓

    JavaScript

      ↓

    n8n Webhook

      ↓

    Gemini AI

      ↓

    Response

      ↓

    Chat

    ======================================
    */

    console.log("Gemini Prompt :",prompt);

    // Temporary Response

    return "🤖 Gemini AI integration is coming soon.";

}



// ======================================
// Notification Demo
// ======================================

setTimeout(()=>{

console.log("AI Reminder Loaded");

},3000);




// ======================================
// Floating Button Animation
// ======================================

setInterval(()=>{

floatingAI.animate(

[

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],

{

duration:1200

}

);

},2500);




// ======================================
// Welcome Console
// ======================================

console.log("===================================");

console.log(" GigMate AI ");

console.log(" IBM AICTE Internship ");

console.log(" Frontend Loaded Successfully ");

console.log("===================================");




// ======================================
// Future Features
// ======================================

/*

✔ Gemini AI

✔ n8n Workflow

✔ Voice AI

✔ Daily Planner

✔ Best Area Prediction

✔ Best Time Prediction

✔ Weather API

✔ Google Maps API

✔ Earnings Prediction

✔ Push Notifications

✔ Multilingual Support

*/