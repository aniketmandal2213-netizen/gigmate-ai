/* =====================================================
            GIGMATE AI PLATFORM PAGE
                    PART 1
===================================================== */

// =====================================
// Get Required Elements
// =====================================

const cards = document.querySelectorAll(".platform-card");

const selectedPlatform = document.getElementById("selectedPlatform");

const continueBtn = document.getElementById("continueBtn");

let selected = "";


// =====================================
// Platform Card Selection
// =====================================

cards.forEach((card)=>{

    card.addEventListener("click",()=>{

        // Remove previous active card

        cards.forEach(item=>{

            item.classList.remove("active");

        });

        // Add active class

        card.classList.add("active");

        // Get platform name

        selected = card.dataset.platform;

        // Update UI

        selectedPlatform.textContent = selected;

        // Enable Button

        continueBtn.disabled = false;

    });

});


// =====================================
// Continue Button
// =====================================

continueBtn.addEventListener("click",()=>{

    if(selected==="") return;

    // Save platform

    localStorage.setItem(

        "gigmate_platform",

        selected

    );

    // Loading Effect

    continueBtn.innerHTML =

    `<i class="fa-solid fa-spinner fa-spin"></i>
     Loading...`;

    continueBtn.disabled = true;

    setTimeout(()=>{

        window.location.href = "city.html";

    },1200);

});
/* =====================================================
            GIGMATE AI PLATFORM PAGE
                    PART 2
===================================================== */

// =====================================
// Restore Previous Selection
// =====================================

window.addEventListener("load",()=>{

    const savedPlatform = localStorage.getItem("gigmate_platform");

    if(savedPlatform){

        cards.forEach((card)=>{

            if(card.dataset.platform === savedPlatform){

                card.classList.add("active");

                selected = savedPlatform;

                selectedPlatform.textContent = savedPlatform;

                continueBtn.disabled = false;

            }

        });

    }

});


// =====================================
// Card Click Animation
// =====================================

cards.forEach((card)=>{

    card.addEventListener("mousedown",()=>{

        card.style.transform = "scale(.97)";

    });

    card.addEventListener("mouseup",()=>{

        card.style.transform = "";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "";

    });

});


// =====================================
// Keyboard Support
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.key === "Enter" && !continueBtn.disabled){

        continueBtn.click();

    }

});


// =====================================
// Continue Button Hover
// =====================================

continueBtn.addEventListener("mouseenter",()=>{

    if(!continueBtn.disabled){

        continueBtn.innerHTML =

        `Continue
        <i class="fa-solid fa-arrow-right"></i>`;

    }

});


// =====================================
// Welcome Message
// =====================================

window.addEventListener("load",()=>{

    console.clear();

    console.log("%cGigMate AI","font-size:26px;font-weight:bold;color:#7A1E3A;");

    console.log("%cPlatform Selection Page Loaded ✅","color:green;font-size:14px;");

    console.log("%cSelect your work platform to continue.","color:#555;font-size:13px;");

});


// =====================================
// Small Hover Glow Effect
// =====================================

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,1),
        rgba(248,246,247,.92))`;

    });

    card.addEventListener("mouseleave",()=>{

        if(card.classList.contains("active")){

            card.style.background = "#FFF8FA";

        }

        else{

            card.style.background = "rgba(255,255,255,.82)";

        }

    });

});