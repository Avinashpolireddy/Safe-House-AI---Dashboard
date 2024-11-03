// Login function (accepts any input for username and password)
function login() {
    // Hide the login screen and show the dashboard
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

// Function to toggle system armed/disarmed status
function toggleSystemStatus() {
    const statusBadge = document.querySelector(".status-badge");
    if (statusBadge.textContent === "Armed") {
        statusBadge.textContent = "Disarmed";
        statusBadge.style.backgroundColor = "#e74c3c"; // Change to red for disarmed
        alert("System is now disarmed.");
    } else {
        statusBadge.textContent = "Armed";
        statusBadge.style.backgroundColor = "#2ecc71"; // Change to green for armed
        alert("System is now armed.");
    }
}

// Quick Action functions
function disarmSystem() {
    toggleSystemStatus();
}

function viewCameras() {
    alert("Opening camera view...");
}

function viewEventHistory() {
    alert("Displaying event history...");
}

function callEmergency() {
    alert("Calling emergency services...");
}
