/* =====================================================
                GIGMATE AI LOGIN
                    PART 1
===================================================== */

// ================================
// Password Show / Hide
// ================================

const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

if(togglePassword){

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

togglePassword.innerHTML=

'<i class="fa-solid fa-eye-slash"></i>';

}

else{

password.type="password";

togglePassword.innerHTML=

'<i class="fa-solid fa-eye"></i>';

}

});

}



// ================================
// Login Form
// ================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=

document.querySelector('input[type="email"]').value.trim();

const pass=password.value.trim();

if(email==="" || pass===""){

alert("Please fill all fields.");

return;

}



// Email Validation

const emailRegex=

/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

alert("Please enter a valid email.");

return;

}



// Loading Animation

const loginBtn=

document.querySelector(".login-btn");

loginBtn.disabled=true;

loginBtn.innerHTML=

`<i class="fa-solid fa-spinner fa-spin"></i>
 Logging In...`;



// Fake Login

setTimeout(()=>{

loginBtn.innerHTML=

`<i class="fa-solid fa-check"></i>
 Success`;

loginBtn.style.background="#28a745";



setTimeout(()=>{

window.location.href="platform.html";

},1200);



},1800);

});
/* =====================================================
                GIGMATE AI LOGIN
                    PART 2
===================================================== */

// =====================================
// Enter Key Login Support
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        const active=document.activeElement;

        if(active.tagName==="INPUT"){

            loginForm.requestSubmit();

        }

    }

});


// =====================================
// Input Focus Animation
// =====================================

const inputs=document.querySelectorAll(".input-box input");

inputs.forEach(input=>{

    input.addEventListener("focus",()=>{

        input.parentElement.style.transform="translateY(-2px)";

    });

    input.addEventListener("blur",()=>{

        input.parentElement.style.transform="translateY(0px)";

    });

});


// =====================================
// Google Button Demo
// =====================================

const googleBtn=document.querySelector(".google-btn");

if(googleBtn){

googleBtn.addEventListener("click",()=>{

googleBtn.disabled=true;

googleBtn.innerHTML=`

<i class="fa-solid fa-spinner fa-spin"></i>

Connecting...

`;

setTimeout(()=>{

alert("Google Sign-In will be connected later using Firebase Authentication.");

googleBtn.disabled=false;

googleBtn.innerHTML=`

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
alt="Google">

Continue with Google

`;

},1800);

});

}


// =====================================
// Floating Background Circles
// =====================================

const circles=document.querySelectorAll(".bg-circle");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

circles.forEach((circle,index)=>{

const speed=(index+1)*10;

circle.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});


// =====================================
// Login Card Hover Effect
// =====================================

const loginCard=document.querySelector(".login-card");

if(loginCard){

loginCard.addEventListener("mousemove",(e)=>{

const rect=loginCard.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

loginCard.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,0.98),
rgba(248,246,247,0.90))`;

});

loginCard.addEventListener("mouseleave",()=>{

loginCard.style.background="rgba(255,255,255,.82)";

});

}


// =====================================
// Welcome Console Message
// =====================================

window.addEventListener("load",()=>{

console.clear();

console.log("%cGigMate AI","font-size:26px;font-weight:bold;color:#7A1E3A;");

console.log("%cLogin Page Loaded Successfully ✅","color:green;font-size:14px;");

console.log("%cIBM SkillsBuild Internship Project","color:#555;font-size:13px;");

});