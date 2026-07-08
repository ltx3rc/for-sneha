function nextPage() {
    document.querySelector(".container").innerHTML = `
        <h1>💌 Dear Sneha...</h1>

        <p style="font-size:20px;line-height:1.9;">
        Shayad tum soch rahi hogi ki kisi ne website banakar propose kyu kiya...
        <br><br>
        Sach kahu...
        Kyunki tum mere liye ek normal message se kahin zyada special ho.
        <br><br>
        Isliye socha, meri feelings bhi thodi alag tareeke se tum tak pahunchni chahiye. ❤️
        </p>

        <button onclick="proposal()">Continue ❤️</button>
    `;
}

function proposal() {
    document.querySelector(".container").innerHTML = `
        <h1>🌸 A Little More...</h1>

        <p style="font-size:20px;line-height:1.9;">
        Kabhi kabhi kuch log achanak milte hain...
        <br><br>
        Aur dheere dheere bina ehsaas ke,
        woh hamari roz ki muskurahat ka reason ban jaate hain.
        <br><br>
        Mere liye woh insaan...
        <b>Sneha, tum ho. ❤️</b>
        </p>

        <button onclick="finalProposal()">One Last Thing 💖</button>
    `;
}

function finalProposal() {
    document.querySelector(".container").innerHTML = `
        <h1>🌹 Dear Sneha ❤️</h1>

        <p style="font-size:20px;line-height:1.9;">
        Main tum par koi pressure nahi daalna chahta.
        <br><br>
        Bas itna kehna chahta hoon ki agar tumhe bhi kabhi lage ki
        hum ek dusre ko aur achhe se jaan sakte hain...
        <br><br>
        <b>Toh kya tum mere saath ek nayi shuruaat karna pasand karogi?</b> 💖
        </p>

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
        <h2>Thank You, Sneha ❤️</h2>
        <p>
        Tumne Prince ki life ka ye din aur bhi special bana diya.
        ❤️
        </p>
    `;
}

function needTime() {
    document.querySelector(".container").innerHTML = `
        <h2>😊 It's Okay</h2>
        <p>
        Main tumhare decision ki respect karta hoon.
        Jitna time chahiye, aaram se le lo.
        ❤️
        </p>
    `;
}
