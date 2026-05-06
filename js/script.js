console.log("JS conectado");
document.getElementById("unlockBtn").addEventListener("click", function() {
    const input = document.getElementById("accessCode").value;
    const errorMsg = document.getElementById("errorMsg");
    
    const correctCode = "290623";

    if(input === correctCode){
        window.location.href = "root.html"; 
    } else {
        errorMsg.classList.remove("hidden");
    }
});