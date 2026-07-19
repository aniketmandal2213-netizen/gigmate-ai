/* =====================================================
                GIGMATE AI CITY PAGE
                    PART 1
===================================================== */

// =====================================
// Get Required Elements
// =====================================

const cityCards = document.querySelectorAll(".city-card");

const citySearch = document.getElementById("citySearch");

const selectedCity = document.getElementById("selectedCity");

const continueBtn = document.getElementById("continueBtn");

let currentCity = "";


// =====================================
// City Card Selection
// =====================================

cityCards.forEach((card)=>{

    card.addEventListener("click",()=>{

        // Remove previous selection

        cityCards.forEach(item=>{

            item.classList.remove("active");

        });

        // Activate selected card

        card.classList.add("active");

        // Get city name

        currentCity = card.dataset.city;

        // Update UI

        selectedCity.textContent = currentCity;

        // Put city into search box

        citySearch.value = currentCity;

        // Enable continue button

        continueBtn.disabled = false;

    });

});


// =====================================
// Search City
// =====================================

citySearch.addEventListener("input",()=>{

    const value = citySearch.value.toLowerCase().trim();

    cityCards.forEach((card)=>{

        const city = card.dataset.city.toLowerCase();

        if(city.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});


// =====================================
// Continue Button
// =====================================

continueBtn.addEventListener("click",()=>{

    if(currentCity==="") return;

    // Save city

    localStorage.setItem(

        "gigmate_city",

        currentCity

    );

    // Loading animation

    continueBtn.disabled = true;

    continueBtn.innerHTML =

    `<i class="fa-solid fa-spinner fa-spin"></i>
     Preparing AI...`;

    setTimeout(()=>{

        window.location.href="loading.html";

    },1500);

});
/* =====================================================
                GIGMATE AI CITY PAGE
                    PART 2
===================================================== */

// =====================================
// Restore Previous City
// =====================================

window.addEventListener("load",()=>{

    const savedCity = localStorage.getItem("gigmate_city");

    if(savedCity){

        cityCards.forEach((card)=>{

            if(card.dataset.city === savedCity){

                card.classList.add("active");

                currentCity = savedCity;

                selectedCity.textContent = savedCity;

                citySearch.value = savedCity;

                continueBtn.disabled = false;

            }

        });

    }

});


// =====================================
// Auto Select from Search
// =====================================

citySearch.addEventListener("keyup",()=>{

    const value = citySearch.value.trim().toLowerCase();

    cityCards.forEach((card)=>{

        if(card.dataset.city.toLowerCase() === value){

            cityCards.forEach(c=>c.classList.remove("active"));

            card.classList.add("active");

            currentCity = card.dataset.city;

            selectedCity.textContent = currentCity;

            continueBtn.disabled = false;

        }

    });

});


// =====================================
// Card Click Animation
// =====================================

cityCards.forEach((card)=>{

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

    if(e.key==="Enter" && !continueBtn.disabled){

        continueBtn.click();

    }

});


// =====================================
// Search Box Focus Effect
// =====================================

citySearch.addEventListener("focus",()=>{

    citySearch.parentElement.style.transform="translateY(-2px)";

});

citySearch.addEventListener("blur",()=>{

    citySearch.parentElement.style.transform="translateY(0px)";

});


// =====================================
// Welcome Console Message
// =====================================

window.addEventListener("load",()=>{

    console.clear();

    console.log(
        "%cGigMate AI",
        "font-size:26px;font-weight:bold;color:#7A1E3A;"
    );

    console.log(
        "%cCity Selection Page Loaded ✅",
        "color:green;font-size:14px;"
    );

    console.log(
        "%cChoose your working city to continue.",
        "color:#555;font-size:13px;"
    );

});


// =====================================
// Premium Hover Glow
// =====================================

cityCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,1),
        rgba(248,246,247,.92))
        `;

    });

    card.addEventListener("mouseleave",()=>{

        if(card.classList.contains("active")){

            card.style.background="#FFF8FA";

        }

        else{

            card.style.background="rgba(255,255,255,.85)";

        }

    });

});