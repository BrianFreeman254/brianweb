// PIN authentication
document.getElementById("pinForm").onsubmit = function(event) {
    event.preventDefault();  // Prevent form submission
    const pin = document.getElementById("pin").value;
    if (pin === "2005") {
        // Redirect to dashboard
        window.location.href = "dashboard.html"; 
    } else {
        alert("Access Denied! Incorrect PIN.");
    }
};

// Real-time clock
function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("current-time").textContent = now.toLocaleTimeString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock(); // Initialize clock

// File upload functionality
document.getElementById("upload-button").onclick = function() {
    const input = document.getElementById("file-input");
    const files = input.files;
    const uploadStatus = document.getElementById("upload-status");
    
    if (files.length > 0) {
        uploadStatus.textContent = "Uploading files...";
        // Process each file (this would normally involve server-side logic)
        for (let i = 0; i < files.length; i++) {
            const fileItem = document.createElement("div");
            fileItem.className = "poem-item";
            fileItem.textContent = files[i].name;  // Display file name
            document.getElementById("poem-list").appendChild(fileItem);
        }
        uploadStatus.textContent = "Files uploaded successfully!";
        input.value = ""; // Clear the file input
    } else {
        uploadStatus.textContent = "Please select a file.";
    }
};

// Logout functionality
document.getElementById("logout").onclick = function() {
    alert("You have logged out.");
    window.location.href = "index.html"; 
};