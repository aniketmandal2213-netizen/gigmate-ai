/* ==========================================================
                    GIGMATE AI DASHBOARD
                    PART 1
========================================================== */

// ========================================
// n8n Webhook
// ========================================

const N8N_WEBHOOK =
"https://aniket12.app.n8n.cloud/webhook/gigmate-ai";


// ========================================
// Dashboard Object
// ========================================

const dashboard = {

    platform:
        localStorage.getItem("gigmate_platform") || "Not Selected",

    city:
        localStorage.getItem("gigmate_city") || "Not Selected",

    bestArea: "--",

    bestTime: "--",

    earning: "--",

    confidence: "--",

    reason:
        "Waiting for AI recommendation..."

};


// ========================================
// DOM Elements
// ========================================

const platformElement =
document.getElementById("platformName");

const cityElement =
document.getElementById("cityName");

const bestAreaElement =
document.getElementById("bestArea");

const bestTimeElement =
document.getElementById("bestTime");

const earningElement =
document.getElementById("expectedEarning");

const confidenceElement =
document.getElementById("confidenceScore");

const reasonElement =
document.getElementById("aiReason");

const refreshButton =
document.getElementById("refreshAI");

const trafficStatus =
document.getElementById("trafficStatus");

const weatherStatus =
document.getElementById("weatherStatus");

const demandLevel =
document.getElementById("demandLevel");

const demandMeter =
document.getElementById("demandMeter");

const todayEarning =
document.getElementById("todayEarning");

const chatBox =
document.getElementById("chatBox");


// ========================================
// Initialize Dashboard
// ========================================

window.addEventListener("DOMContentLoaded", () => {

    platformElement.textContent =
        dashboard.platform;

    cityElement.textContent =
        dashboard.city;

    bestAreaElement.textContent =
        "Waiting for AI...";

    bestTimeElement.textContent =
        "Waiting for AI...";

    earningElement.textContent =
        "₹ ---";

    confidenceElement.textContent =
        "-- %";

    reasonElement.textContent =
        "Click Refresh AI to get today's recommendation.";

    trafficStatus.textContent =
        "Loading...";

    weatherStatus.textContent =
        "Loading...";

    demandLevel.textContent =
        "Loading...";

    todayEarning.textContent =
        "₹ ---";

});
/* ==========================================================
                    GIGMATE AI DASHBOARD
                    PART 2
========================================================== */

// ========================================
// Update Dashboard
// ========================================

function updateDashboard(data){

    dashboard.bestArea =
        data.bestArea || "--";

    dashboard.bestTime =
        data.bestTime || "--";

    dashboard.earning =
        data.earning || "--";

    dashboard.confidence =
        data.confidence || "--";

    dashboard.reason =
        data.reason ||
        "AI recommendation generated successfully.";


    bestAreaElement.textContent =
        dashboard.bestArea;

    bestTimeElement.textContent =
        dashboard.bestTime;

    earningElement.textContent =
        dashboard.earning;

    confidenceElement.textContent =
        dashboard.confidence;

    reasonElement.textContent =
        dashboard.reason;


    // =====================================
    // Dummy Live Analytics
    // =====================================

    trafficStatus.textContent =
        "Moderate";

    weatherStatus.textContent =
        "☀️ Clear";

    demandLevel.textContent =
        "High";

    demandMeter.style.width =
        "88%";

    todayEarning.textContent =
        dashboard.earning;

}


// ========================================
// Chat Message
// ========================================

function addMessage(sender,message){

    const msg =
    document.createElement("div");

    msg.className =
    "message " + sender;

    msg.innerHTML =

    `
    <div class="message-icon">

        <i class="fa-solid ${
            sender==="ai"
            ?
            "fa-robot"
            :
            "fa-user"
        }"></i>

    </div>

    <div class="message-content">

        <p>

            ${message}

        </p>

    </div>
    `;

    chatBox.appendChild(msg);

    chatBox.scrollTop =
    chatBox.scrollHeight;

}


// ========================================
// Refresh Button
// ========================================

refreshButton.addEventListener(

    "click",

    ()=>{

        fetchRecommendation();

    }

);


// ========================================
// First AI Message
// ========================================

addMessage(

    "ai",

    "👋 Welcome to GigMate AI. Click 'Refresh AI' to receive today's recommendation."

);
/* ==========================================================
                    GIGMATE AI DASHBOARD
                    PART 3
========================================================== */

// ========================================
// Fetch AI Recommendation
// ========================================

async function fetchRecommendation(){

    try{

        refreshButton.disabled = true;

        refreshButton.innerHTML =
        `<i class="fa-solid fa-spinner fa-spin"></i> Loading...`;

        addMessage(

            "ai",

            "🌐 Connecting to GigMate AI..."

        );

        const response = await fetch(

            N8N_WEBHOOK,

            {

                method: "POST",

                headers: {

                    "Content-Type":"application/json"

                },

                body: JSON.stringify({

                    platform: dashboard.platform,

                    city: dashboard.city,

                    currentTime: new Date().toLocaleString()

                })

            }

        );


        if(!response.ok){

            throw new Error(

                "HTTP Error : " + response.status

            );

        }


        const data = await response.json();

        console.log("AI Response :",data);


        updateDashboard({

            bestArea: data.bestArea,

            bestTime: data.bestTime,

            earning: data.earning,

            confidence: data.confidence,

            reason: data.reason

        });


        addMessage(

            "ai",

            `

            ✅ Recommendation Ready

            <br><br>

            📍 <b>Area :</b>
            ${data.bestArea}

            <br>

            ⏰ <b>Time :</b>
            ${data.bestTime}

            <br>

            💰 <b>Earning :</b>
            ${data.earning}

            <br>

            🎯 <b>Confidence :</b>
            ${data.confidence}

            `

        );

    }

    catch(error){

        console.error(error);

        addMessage(

            "ai",

            "❌ AI Server is unavailable. Showing backup recommendation."

        );

        // =====================================
        // Backup Recommendation
        // =====================================

        updateDashboard({

            bestArea:
            "South Delhi (Saket, Hauz Khas)",

            bestTime:
            "7:00 PM - 10:30 PM",

            earning:
            "₹700 - ₹950",

            confidence:
            "90%",

            reason:
            "Backup recommendation loaded because AI server is currently unavailable."

        });

    }

    finally{

        refreshButton.disabled = false;

        refreshButton.innerHTML =

        `<i class="fa-solid fa-rotate"></i> Refresh AI`;

    }

}
/* ==========================================================
                    GIGMATE AI DASHBOARD
                    PART 4
========================================================== */

// ========================================
// Chat Elements
// ========================================

const userMessage =
document.getElementById("userMessage");

const sendButton =
document.getElementById("sendMessage");

const typingBox =
document.getElementById("typingBox");


// ========================================
// Show Typing
// ========================================

function showTyping(){

    if(typingBox){

        typingBox.style.display = "flex";

    }

}


// ========================================
// Hide Typing
// ========================================

function hideTyping(){

    if(typingBox){

        typingBox.style.display = "none";

    }

}


// ========================================
// AI Chat Reply
// ========================================

function aiReply(question){

    showTyping();

    setTimeout(()=>{

        hideTyping();

        let reply = "";

        const text = question.toLowerCase();

        if(text.includes("best")){

            reply =
            `📍 Best Area : ${dashboard.bestArea}`;

        }

        else if(text.includes("time")){

            reply =
            `⏰ Best Time : ${dashboard.bestTime}`;

        }

        else if(text.includes("earning")){

            reply =
            `💰 Expected Earnings : ${dashboard.earning}`;

        }

        else if(text.includes("traffic")){

            reply =
            `🚦 Traffic Status : ${trafficStatus.textContent}`;

        }

        else if(text.includes("weather")){

            reply =
            `☀️ Weather : ${weatherStatus.textContent}`;

        }

        else{

            reply =
            "🤖 I can help you with Best Area, Best Time, Earnings, Weather and Traffic.";

        }

        addMessage(

            "ai",

            reply

        );

    },1200);

}


// ========================================
// Send Button
// ========================================

sendButton.addEventListener("click",()=>{

    const text = userMessage.value.trim();

    if(text==="") return;

    addMessage(

        "user",

        text

    );

    userMessage.value="";

    aiReply(text);

});


// ========================================
// Enter Key Support
// ========================================

userMessage.addEventListener(

    "keydown",

    (e)=>{

        if(e.key==="Enter"){

            sendButton.click();

        }

    }

);


// ========================================
// Suggestion Buttons
// ========================================

const suggestionButtons =
document.querySelectorAll(".suggestion-btn");

suggestionButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        addMessage(

            "user",

            button.innerText

        );

        aiReply(button.innerText);

    });

});


// ========================================
// Auto Refresh Every 60 Seconds
// ========================================

setInterval(()=>{

    console.log("Refreshing AI...");

    fetchRecommendation();

},60000);
/* ==========================================================
                GIGMATE AI DASHBOARD
                    PART 5 (FINAL)
========================================================== */

// ========================================
// Save Session
// ========================================

function saveSession(){

    const session = {

        platform: dashboard.platform,

        city: dashboard.city,

        loginTime: new Date().toLocaleString()

    };

    localStorage.setItem(

        "gigmate_session",

        JSON.stringify(session)

    );

}


// ========================================
// Last Updated Time
// ========================================

function updateTime(){

    const lastUpdated =
    document.getElementById("lastUpdated");

    if(lastUpdated){

        lastUpdated.textContent =
        new Date().toLocaleTimeString();

    }

}


// ========================================
// System Status
// ========================================

function updateSystemStatus(){

    console.log(

        "%cGigMate AI Connected",

        "color:green;font-size:18px;font-weight:bold;"

    );

    console.log(

        "Platform :",dashboard.platform

    );

    console.log(

        "City :",dashboard.city

    );

}


// ========================================
// Footer Update
// ========================================

setInterval(()=>{

    updateTime();

},1000);


// ========================================
// Initial Load
// ========================================

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        saveSession();

        updateTime();

        updateSystemStatus();

        fetchRecommendation();

    }

);


// ========================================
// Online / Offline Detection
// ========================================

window.addEventListener("online",()=>{

    addMessage(

        "ai",

        "✅ Internet Connected."

    );

});


window.addEventListener("offline",()=>{

    addMessage(

        "ai",

        "⚠️ Internet Disconnected."

    );

});


// ========================================
// Prevent Multiple Refresh Clicks
// ========================================

let refreshLock = false;

refreshButton.addEventListener(

    "click",

    async()=>{

        if(refreshLock) return;

        refreshLock = true;

        await fetchRecommendation();

        setTimeout(()=>{

            refreshLock = false;

        },2000);

    }

);


// ========================================
// Welcome Log
// ========================================

console.clear();

console.log(

    "%cGigMate AI Dashboard Loaded Successfully",

    "font-size:22px;font-weight:bold;color:#6B2D5C;"

);

console.log(

    "Platform :",dashboard.platform

);

console.log(

    "City :",dashboard.city

);

console.log(

    "Webhook :",N8N_WEBHOOK

);
/* ==========================================================
                GIGMATE AI DASHBOARD
                    PART 6
========================================================== */

// ========================================
// Dashboard Fade Animation
// ========================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="0.5s";

        document.body.style.opacity="1";

    },100);

});


// ========================================
// Quick Action Buttons
// ========================================

const actionButtons =
document.querySelectorAll(".action-btn");

actionButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        const action =
        button.innerText.trim();

        switch(action){

            case "Find Best Area":

                addMessage(

                    "ai",

                    `📍 Today's Best Area : ${dashboard.bestArea}`

                );

            break;


            case "Plan Route":

                addMessage(

                    "ai",

                    `🗺 Route planned for ${dashboard.bestArea}.`

                );

            break;


            case "Peak Hour Alerts":

                addMessage(

                    "ai",

                    `⏰ Peak Hour : ${dashboard.bestTime}`

                );

            break;


            case "Export Report":

                exportReport();

            break;

        }

    });

});


// ========================================
// Export Report
// ========================================

function exportReport(){

    const report =

`
==============================
      GIGMATE AI REPORT
==============================

Platform : ${dashboard.platform}

City : ${dashboard.city}

Best Area : ${dashboard.bestArea}

Best Time : ${dashboard.bestTime}

Expected Earnings : ${dashboard.earning}

Confidence : ${dashboard.confidence}

Reason :

${dashboard.reason}

Generated :

${new Date().toLocaleString()}

`;

    const blob =

    new Blob(

        [report],

        {

            type:"text/plain"

        }

    );

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;

    a.download = "GigMate_Report.txt";

    a.click();

    URL.revokeObjectURL(url);

    addMessage(

        "ai",

        "📄 Report exported successfully."

    );

}