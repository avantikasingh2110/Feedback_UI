let emoji = document.querySelectorAll(".emoji");
let submit_btn = document.getElementById("submit_btn");
let main_div = document.getElementById("main_div");
let feedback_div = document.getElementById("feedback_div");
let feedback = document.getElementById("feedback");
let selectedFeedback = ""; 

emoji.forEach(function(emojee) {
    emojee.addEventListener("click", function() {
     
        emoji.forEach((emojee) => emojee.classList.remove("active"));
        
      
        emojee.classList.add("active");
        
       
        selectedFeedback = emojee.textContent.trim();
    });
});


submit_btn.addEventListener("click", function() {
    if (selectedFeedback) { 
        main_div.style.display = "none";
        feedback_div.style.display = "flex";
        feedback.textContent = `${selectedFeedback}`;
    } else {
        alert("Please select a feedback option before submitting.");
    }
});