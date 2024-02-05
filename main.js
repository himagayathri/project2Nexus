
function downloadSoftware(platform) {
    alert(`Downloading software for ${platform}`);
}

function submitFeedback(event) {
    event.preventDefault();
    const feedbackText = document.getElementById('feedbackText').value;
    alert(`Feedback submitted: ${feedbackText}`);
    document.getElementById('feedbackForm').reset();
}
