/* =====================================================
            GIGMATE AI LOADING PAGE
===================================================== */

// =====================================
// Get Elements
// =====================================

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");

// =====================================
// Read User Data
// =====================================

const platform = localStorage.getItem("gigmate_platform") || "Unknown Platform";
const city = localStorage.getItem("gigmate_city") || "Unknown City";

// =====================================
// Analysis Steps
// =====================================

const steps = [

{
progress:20,
text:`Platform Selected : ${platform}`,
element:step1
},

{
progress:40,
text:`City Selected : ${city}`,
element:step2
},

{
progress:60,
text:"Weather Forecast Ready",
element:step3
},

{
progress:80,
text:"Demand Prediction Completed",
element:step4
},

{
progress:100,
text:"AI Recommendation Generated",
element:step5
}

];

// =====================================
// Run Analysis
// =====================================

let current = 0;

function runAnalysis(){

if(current >= steps.length){

progressText.innerHTML =
"Opening AI Dashboard...";

setTimeout(()=>{

window.location.href = "dashboard.html";

},1200);

return;

}

const step = steps[current];

progressFill.style.width = step.progress + "%";

progressText.innerHTML = step.text;

step.element.innerHTML = "✅ " + step.text;

current++;

setTimeout(runAnalysis,1000);

}

window.onload = ()=>{

setTimeout(runAnalysis,700);

};

// =====================================
// Console
// =====================================

console.clear();

console.log("%cGigMate AI",
"font-size:28px;font-weight:bold;color:#7A1E3A");

console.log("%cLoading AI Recommendation...",
"color:green;font-size:14px");
