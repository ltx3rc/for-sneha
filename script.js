function playMusic() {


    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.3;
        music.play().catch(err => console.log(err));
    }

    nextPage();
}

function nextPage() {

document.querySelector(".glass").innerHTML = `

<div class="letter-page">

<h1>💌 Dear Sneha...</h1>

<p>

Shayad tum soch rahi hogi...
ki kisi ne website bana kar apni feelings kyu batayi.

<br><br>

Sach kahu toh...
kuch feelings normal message me likhne jitni simple nahi hoti.

<br><br>

Isliye maine socha...
meri baat tum tak ek yaadgar tareeke se pahunchni chahiye. ❤️

</p>


<button onclick="proposal()">

Continue ❤️

</button>


</div>

`;

}




function proposal(){

document.querySelector(".glass").innerHTML = `

<div class="letter-page">

<h1>🌸 A Little More...</h1>


<p>

Kabhi kabhi kuch log zindagi me achanak aate hain...

<br><br>

Aur dheere dheere woh ek special jagah bana lete hain.

<br><br>

Mere liye woh special insaan...

<b>Sneha, tum ho. ❤️</b>

</p>


<button onclick="finalProposal()">

One Last Thing 💖

</button>


</div>

`;

}





function finalProposal(){

document.querySelector(".glass").innerHTML = `

<div class="letter-page">

<h1>🌹 Dear Sneha ❤️</h1>


<p>

Main tum par koi pressure nahi daalna chahta.

<br><br>

Bas itna kehna chahta hu ki agar tumhe bhi lage
ki hum ek dusre ko aur achhe se jaan sakte hain...

<br><br>

<b>
Toh kya tum mere saath ek nayi shuruaat karna pasand karogi?
</b>

❤️

</p>



<div class="choice-buttons">


<button onclick="yesAnswer()">

❤️ Yes

</button>



<button onclick="needTime()">

🤍 Need Some Time

</button>



<p style="margin-top:25px;">

Instagram pe bata do

</p>



<a href="https://ig.me/m/lucidrush4199" target="_blank">

<button>

Instagram 💌

</button>

</a>



<p style="margin-top:20px;font-size:16px;opacity:.8;">

Madam Ji, aapko takleef ho isi liye ye button diya hai 🥀

</p>



</div>


</div>

`;

}





function yesAnswer(){

document.querySelector(".glass").innerHTML = `

<div class="letter-page">


<h1>🥹❤️</h1>


<h2>Thank You, Sneha ❤️</h2>


<p>

Tumhara answer mere liye bahut special hai.

<br><br>

❤️

</p>



<a href="https://ig.me/m/lucidrush4199" target="_blank">

<button>

Chat With Me On Instagram 💌

</button>

</a>



</div>

`;

}





function needTime(){

document.querySelector(".glass").innerHTML = `

<div class="letter-page">


<h1>😊 It's Okay</h1>


<p>

Main tumhare decision ki respect karta hu.

<br><br>

Jitna time chahiye, aaram se le sakti ho.

❤️

</p>



<a href="https://ig.me/m/lucidrush4199" target="_blank">

<button>

Talk With Me 💌

</button>

</a>



</div>

`;

}
