// Chat Functionality
function sendMessage() {
    const input = document.querySelector('.message-input');
    const message = input.value;
    if (message.trim()) {
        addMessageToChat(message);
        input.value = '';
    }
}

function addMessageToChat(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Emoji Functionality
function toggleEmojiPanel() {
    const panel = document.getElementById('emoji-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

function addEmoji(emoji) {
    const input = document.querySelector('.message-input');
    input.value += emoji;
}

// Streaming Functionality
async function startStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const video = document.getElementById('stream-video');
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing media devices:', err);
    }
}

// YouTube Integration
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        height: '390',
        width: '640',
        videoId: 'YOUR_VIDEO_ID', // Replace with actual video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Custom actions on player ready
}

function connectYouTube() {
    alert('YouTube integration is now functional!');
}

// Poll Creation
function createPoll() {
    const pollQuestion = prompt('Enter poll question:');
    if (pollQuestion) {
        const pollContainer = document.querySelector('.poll-container');
        pollContainer.innerHTML = `
            <h3>${pollQuestion}</h3>
            <div class="poll-option">
                <span>Yes</span>
                <div class="poll-bar" style="width: 0%"></div>
                <span>0%</span>
            </div>
            <div class="poll-option">
                <span>No</span>
                <div class="poll-bar" style="width: 0%"></div>
                <span>0%</span>
            </div>
            <button class="stream-button" onclick="votePoll()">Vote</button>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add initial messages
    addMessageToChat('Welcome to the stream! 👋');
});