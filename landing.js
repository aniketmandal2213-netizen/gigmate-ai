/* ==========================================
        GIGMATE AI LANDING PAGE
                PART - 1
========================================== */

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 20){

        navbar.style.background = "rgba(250,247,248,.95)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        navbar.style.position = "sticky";
        navbar.style.top = "0";
        navbar.style.zIndex = "1000";

    }

    else{

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});


// ===============================
// AI Demo Chat
// ===============================

const input = document.querySelector(".chat-box input");

const button = document.querySelector(".chat-box button");

const message = document.querySelector(".message");

button.addEventListener("click", sendMessage);

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const text = input.value.trim();

    if(text==="") return;

    message.innerHTML =

    `
    <strong>You:</strong><br>
    ${text}

    <br><br>

    🤖 <strong>GigMate AI</strong><br>

    Thanks! Once you log in and select your city,
    I'll recommend the best working area,
    ideal timing, and explain why it's the best choice.
    `;

    input.value="";

}
/* ==========================================
        GIGMATE AI LANDING PAGE
                PART - 2
========================================== */


/* ===============================
        Typing Placeholder
=============================== */

const placeholders = [

    "Ask GigMate AI...",

    "Where should I work today?",

    "Best area for more orders?",

    "What is the best earning time?",

    "How can I increase today's income?"

];

let placeholderIndex = 0;

setInterval(() => {

    if(input){

        placeholderIndex++;

        if(placeholderIndex >= placeholders.length){

            placeholderIndex = 0;

        }

        input.setAttribute(

            "placeholder",

            placeholders[placeholderIndex]

        );

    }

},3000);



/* ===============================
        Scroll Reveal Animation
=============================== */

const revealElements = document.querySelectorAll(

    ".feature-card, .step-card, .assistant-card, .cta-wrapper"

);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const position = element.getBoundingClientRect().top;

        const screen = window.innerHeight - 100;

        if(position < screen){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =

    "all .7s ease";

});

window.addEventListener(

    "scroll",

    revealOnScroll

);

revealOnScroll();



/* ===============================
        Button Click Animation
=============================== */

const buttons = document.querySelectorAll(

    ".primary-btn, .secondary-btn, .login-btn"

);

buttons.forEach((button)=>{

    button.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="";

        },180);

    });

});



/* ===============================
        AI Card Hover
=============================== */

const assistantCard = document.querySelector(".assistant-card");

if(assistantCard){

assistantCard.addEventListener("mousemove",(e)=>{

const rect = assistantCard.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

assistantCard.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,1),
rgba(250,247,248,.95))`;

});

assistantCard.addEventListener("mouseleave",()=>{

assistantCard.style.background="rgba(255,255,255,.92)";

});

}



/* ===============================
        Welcome Message
=============================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

console.log(

"✅ GigMate AI Landing Page Loaded Successfully"

);

},500);

});