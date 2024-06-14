window.addEventListener('DOMContentLoaded', (event) => {
    const tg = window.Telegram.WebApp;

    // Expanding the window
    tg.expand();

    // Function to send data back to the Telegram bot
    function sendDataToBot(data) {
        tg.sendData(JSON.stringify(data));
    }

    // Example function to call from Godot
    window.sendTelegramMessageFromGodot = (message) => {
        sendDataToBot({ message: message });
    };

    // Event listener for closing the web app
    tg.onEvent('close', () => {
        console.log('Telegram Web App closed');
    })
});
