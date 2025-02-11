document.addEventListener("DOMContentLoaded", function () {
    const message = `My Dearest Arya & Mythri ❤️\n\n💖\n\nMy sweetest souls,\n\nIf I could write our friendship into a book, it would be the most beautiful story ever told 📖💕\nYou both are not just my best friends—you are my **family**, my **safe place**, and my **happiest moments**.\nThrough every laugh, every tear, you both made my life **richer, brighter, and full of love**. 💫✨\n\nArya, your kindness and strength inspire me every day. 💕 You always know how to **lift me up when I'm down**, and your heart is as **pure as the stars** 🌟\n\nMythri, you are the **joy** in my life. Your laughter is like music, making even the worst days feel lighter. 🎶💖\nNo matter how crazy life gets, I’ll always be there 🤝💕\n\nTogether, we are **unstoppable**. 💪💖 No distance, no time, and no challenge can break this bond we share.\nThank you for **being my happiness, my home, and my forever friends.** 🏡❤️\nI love you both endlessly! 💖💖💖\n\n**Forever yours,**\n**Lekha 💕**`;

    let index = 0;
    function typeLetter() {
        if (index < message.length) {
            document.getElementById("typing-text").innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 50);
        }
    }
    typeLetter();

    // Floating Hearts Animation
    const heartsContainer = document.querySelector(".hearts-container");
    const heartTypes = ["❤️", "💖", "💙", "💜", "💛", "💚"];

    function createHeart() {
        const heart = document.createElement("span");
        heart.classList.add("heart-animation");
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);

    // Play/Pause Background Music
    function toggleAudio() {
        let loveAudio = document.getElementById("love-audio");
        if (loveAudio.paused) {
            loveAudio.play();
        } else {
            loveAudio.pause();
        }
    }
    window.toggleAudio = toggleAudio;
});
