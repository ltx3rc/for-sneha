function nextPage() {
    document.querySelector(".container").innerHTML = `
        <h1>💖 Dear Sneha</h1>

        <p style="font-size:20px;line-height:1.8;">
        Shayad ye meri life ka sabse honest letter hai.
        Main tumhe bahut respect karta hoon,
        aur tumhare saath aur bhi zyada baatein karna chahta hoon.
        ❤️
        </p>

        <button onclick="proposal()">Continue 💌</button>
    `;
}

function proposal() {
    document.querySelector(".container").innerHTML = `
        <h1>🌹 Sneha ❤️</h1>

        <h2>Will You Be My Girlfriend?</h2>

        <div style="margin-top:30px;">
            <button onclick="yesAnswer()">❤️ Yes</button>

            <button onclick="needTime()" style="margin-left:15px;">
            🤍 Need Some Time
            </button>
        </div>
    `;
}

function yesAnswer() {
    document.querySelector(".container").innerHTML = `
        <h1>🥹❤️</h1>

        <h2>Thank You Sneha ❤️</h2>

        <p>
        You just made Prince the happiest person alive.
        </p>
    `;
}

function needTime() {
    document.querySelector(".container").innerHTML = `
        <h2>😊 No Problem</h2>

        <p>
        Main tumhare decision ki respect karta hoon.
        Jitna time chahiye, le lo.
        ❤️
        </p>
    `;
}
