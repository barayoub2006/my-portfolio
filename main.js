// JavaScript for mobile navigation toggle
document.getElementById('nav-toggle').onclick = function () {
    document.getElementById('nav-content').classList.toggle('hidden');
}

// Close mobile nav when a link is clicked
document.querySelectorAll('#nav-content a').forEach(link => {
    link.addEventListener('click', () => {
        if (!document.getElementById('nav-content').classList.contains('hidden')) {
            document.getElementById('nav-content').classList.add('hidden');
        }
    });
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Optional: Provide visual feedback to the user
    alert('تم نسخ النص إلى الحافظة!'); // Using alert for simplicity, consider a custom modal
}

// Display current time in footer
function updateCurrentTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    document.getElementById('current-time').textContent = now.toLocaleTimeString('ar-DZ', options);
}
updateCurrentTime();
setInterval(updateCurrentTime, 60000); // Update every minute
