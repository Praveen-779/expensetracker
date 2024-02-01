async function addData(event) {
    
    event.preventDefault() ;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value

    document.getElementById('signupForm').reset() 

    const obj = {
        name : name,
        email : email,
        password : password
    }

    try {
       const response =  await axios.post('http://51.21.2.30/user/signup',obj)
       alert('sign up successfull, now please login');
       
    }
   catch(error) {
    document.getElementById('displayError').innerHTML = `<div style= " color:red;">${error} ,  ${error.response.data.err}</div>`;
   }
}