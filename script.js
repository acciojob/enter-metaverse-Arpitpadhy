//your JS code here. If required.
const statusElement = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

// Add click event listener to the button
enterButton.addEventListener('click', () => {
  statusElement.innerHTML = '<h1>Entered Metaverse</h1>';
});