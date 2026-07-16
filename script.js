// ==========================================
// LOVE LETTER
// ==========================================

const letter = `🌹 Happy Birthday, Faraz ❤️

Sometimes life takes us in different directions but there are some people that time can never erase...🤍🌸

It's strange how life changes.We were together since 9th Grade and even though four years passed without talking a part of my heart never forgot you...😌💛

I never thought these feelings would return but somehow they did...❤️🌹 

Maybe some people are simply meant to stay in our hearts forever...❤️

You have always been someone special to me.Even after all these years thinking about you still brings a smile to my face...😊❤️

If I had one wish today,it would simply be to see you happy,smiling and achieving everything you've ever dreamed of...🤲✨

"Some souls are connected by the heart even when life keeps them apart." ❤️

"Maybe we lost four years...but my heart never forgot you." 

Thank you for being one of the most beautiful memories of my life💛🤍

May Allah bless you with endless happiness,success,good health,and a life full of beautiful moments...❤️‍🔥

"And if destiny ever gives us another chance,I'd love to write a new beginning with you."🌙✨

Forever in my prayers...🤲

❤️ Lubna Usman ❤️

🎂 Happy Birthday Once Again, Faraz ❤️`;

let letterIndex = 0;

// ==========================================
// OPEN LETTER
// ==========================================

function startSurprise(){

document.getElementById("welcome").style.display="none";

document.getElementById("message").style.display="block";

document.getElementById("typing").innerHTML="";

letterIndex=0;

typeLetter();

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ==========================================
// TYPE LETTER
// ==========================================

function typeLetter(){

if(letterIndex < letter.length){

document.getElementById("typing").innerHTML += letter.charAt(letterIndex);

letterIndex++;

setTimeout(typeLetter,35);

}

}

// ==========================================
// PHOTO GALLERY
// ==========================================

const photos=[

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg"

];

const captions=[

"Our first beautiful memory together ❤️",

"You'll always have a special place in my heart 🤍",

"Every picture reminds me of you 🌹",

"Forever my favorite memory ❤️"

];

let current=0;

let started=false;

function nextPage(){

document.getElementById("message").style.display="none";

document.getElementById("gallery").style.display="block";

if(!started){

setInterval(changePhoto,3000);

setInterval(createHeart,350);

setInterval(createPetal,700);

setInterval(createStar,250);

started=true;

}

}

function changePhoto(){

current++;

if(current>=photos.length){

current=0;

}

document.getElementById("slider").src=photos[current];

document.getElementById("caption").innerHTML=captions[current];

}
// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

// ==========================================
// ROSE PETALS
// ==========================================

function createPetal(){

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},8000);

}

// ==========================================
// STARS
// ==========================================

function createStar(){

let star=document.createElement("div");

star.className="star";

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

document.getElementById("stars").appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

// ==========================================
// GIFT PAGE
// ==========================================

function showGift(){

document.getElementById("gallery").style.display="none";

document.getElementById("giftBox").style.display="block";

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ==========================================
// OPEN GIFT
// ==========================================

function openGift(){

document.getElementById("giftBox").style.display="none";

document.getElementById("finalMessage").style.display="block";

let song=document.getElementById("song");

song.play();

startFireworks();

}

// ==========================================
// FIREWORKS (Simple Animation)
// ==========================================

function startFireworks(){

let canvas=document.getElementById("fireworks");

canvas.style.display="block";

let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

function random(min,max){

return Math.random()*(max-min)+min;

}

function blast(){

let x=random(100,canvas.width-100);

let y=random(100,canvas.height/2);

for(let i=0;i<40;i++){

ctx.beginPath();

ctx.arc(

x+random(-80,80),

y+random(-80,80),

random(2,5),

0,

Math.PI*2

);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},700);

}

setInterval(blast,900);

}