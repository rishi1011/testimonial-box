const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const userRole = document.querySelector('.user-role');

let testimonials;
let currentIdx = 1;
    
getData();
setInterval(updateTestimonial, 10000);

async function getData() {
    const data = await fetch('https://testimonialapi.toolcarton.com/api');

    const res = await data.json();

    testimonials = res;
}


function updateTestimonial() {
    const { name, message, avatar, designation } = testimonials[currentIdx];

    testimonial.innerHTML = message;
    userImage.src = avatar;
    userName.innerHTML = name;
    userRole.innerHTML = designation;

    currentIdx++;
    if (currentIdx === testimonials.length) {
        currentIdx = 0;
    }
}




