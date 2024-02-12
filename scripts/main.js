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

// $("#telephone").intlTelInput({
//   allowDropdown: true,
//   autoHideDialCode: true,
//   autoPlaceholder: "polite",
 
// // modify the auto placeholder
// customPlaceholder: null,
// excludeCountries: ['ru'],
 
// // format the input value during initialisation and on setNumber
// formatOnDisplay: true,
 
// // geoIp lookup function
// geoIpLookup: null,
 
// // inject a hidden input with this name, and on submit, populate it with the result of getNumber
// hiddenInput: "",
 
// // initial country
// initialCountry: "ua",
 
// // don't insert international dial codes
// nationalMode: true,
 
// // display only these countries
// onlyCountries: [],
 
// // number type to use for placeholders
// placeholderNumberType: "MOBILE",
 
// // the countries at the top of the list. defaults to united states and united kingdom
// preferredCountries: [ "us", "gb" ],
 
// // display the country dial code next to the selected flag so it's not part of the typed number
// separateDialCode: false,
 
// // specify the path to the libphonenumber script to enable validation/formatting
// utilsScript: ""
// });