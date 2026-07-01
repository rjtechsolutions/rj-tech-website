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