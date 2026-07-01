const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(this);

const response = await fetch(this.action,{
method:"POST",
body:formData
});

if(response.ok){

document.getElementById("successMessage").style.display="block";

bookingForm.reset();

}else{

alert("Something went wrong. Please try again.");

}

});

}
const words = [
"IT Solutions",
"Computer Repair",
"Laptop Repair",
"Networking",
"CCTV Installation",
"Microsoft 365",
"Website Development"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const typing = document.getElementById("typing");

if(!typing) return;

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent = currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent = currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex = (wordIndex + 1) % words.length;

}

}

setTimeout(typeEffect,deleting?60:100);

}

typeEffect();
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/80;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});
