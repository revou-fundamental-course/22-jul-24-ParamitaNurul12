// Ini Javascript

console.log('hello world');

// Ini untuk banner autoslide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Ini untuk form validation nama

function formValidation() {
  let name = document.getElementById('fullname').value;
  console.log(name);

  //Pengecekan name tidak boleh ' '
  if (name == '') {
    // code akan di eksekusi ketika name ' '
    alert('Name cannot be empty');
    //code akan di eksekusi ketika name terisi dan di input
  } else {
    alert('Submitted succesfully');
  }
}

//ini untuk form validation email

function formValidation() {
  let name = document.getElementById('email').value;
  console.log(name);

  //Pengecekan email tidak boleh ' '
  if (name == '') {
    // code akan di eksekusi ketika email ' '
    alert('Email cannot be empty');
    //code akan di eksekusi ketika email terisi dan di input
  } else {
    alert('Submitted succesfully');
  }
}