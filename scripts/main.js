const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const termsCheckbox = document.getElementById('termsCheckbox');
const submitButton = document.getElementById('submitButton');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    breakpoints: {
      380: {
       slidesPerView: 1,
      },
      680: {
       slidesPerView: 2,
      },
      1100: {
       slidesPerView: 4,
      }
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const input = document.querySelector("#phoneInput");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js",
  allowDropdown: true,
  autoHideDialCode: false,
  nationalMode: false,
  containerClass: ".form_input",
  initialCountry: "ua",
  excludeCountries: ['ru'],
  onlyCountries: ["us", "gb", "ua", "pl"],
  preferredCountries: [ "us", "gb", "sp" ],
  separateDialCode: false,
  showSelectedDialCode:true,
});


function handlePhoneInput(event) {
  const input = event.target;
  const number = input.value.replace(/\D/g, '');
  const maxLength = 7;
  const trimmedNumber = number.slice(0, maxLength);

  input.value = trimmedNumber;
}
phoneInput.addEventListener('input', handlePhoneInput);

// function validatePhoneNumberLength(phoneNumber) {
//   const desiredLength = 7; 
//   if (phone.length !== desiredLength) {
//     // Optionally, display an error message or apply styling to indicate invalid input
//     console.log('Phone number must have ' + desiredLength + ' digits.');
//   }
// }

const toggle = function(id) {
  return document.getElementById(id);
}

const show = function(id) {
  toggle(id).style.display ='flex';
}
const hide = function(id) {
  toggle(id).style.display ='none';
}

// submit support contact

function validateForm() {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const termsAccepted = termsCheckbox.checked;

  if (name !== '' && phone !== '' && termsAccepted) {
    submitButton.disabled = false;
    submitButton.className = 'button button_form button_blue';
  } else {
    submitButton.disabled = true;
  }
}

function showSupportMessage() {
  alert("We'll call you in 30 seconds!");
}

nameInput.addEventListener('input', validateForm);
phoneInput.addEventListener('input', validateForm);
termsCheckbox.addEventListener('change', validateForm);
submitButton.addEventListener('click', showSupportMessage);

document.getElementById('popupLogin').addEventListener('submit', function(event) {
  event.preventDefault();
});

$('.message a').click(function(){
  $('signIn-form').animate({height: "toggle", opacity: "toggle"}, "slow");
});