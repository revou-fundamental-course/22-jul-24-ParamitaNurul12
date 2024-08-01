// Ini Javascript

console.log('hello world');

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