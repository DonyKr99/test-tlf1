function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0";
  }
    lastScrollTop = scrollTop;
})


  function checkForm(form)
  {
    if(form.inputName.value == "") {
      alert("Neirašėte savo vardo");
      form.inputName.focus();
      return false;
    }
    if(form.inputLastName.value == "") {
      alert("Neirašėte savo pavardės");
      form.inputLastName.focus();
      return false;
    }
    if(form.inputPhoneNumber.value == "") {
      alert("Neirašėte savo telefono numerio");
      form.inputPhoneNumber.focus();
      return false;
    }
  }
