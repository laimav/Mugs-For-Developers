function form_submit() {

    document.getElementById('retypedPassword').style.display='none'; 
    let pass = document.getElementById('password').value;
    let rePass = document.getElementById('retypePassword').value;
    

    if (pass != rePass) {
        document.getElementById('retypedPassword').style.display='block';  
    } else {
       window.location.href='succesfulRegistration.html';
    }
  }