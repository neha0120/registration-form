   
function showalert() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
         var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var  email= document.getElementById('email').value;
        var pwd = document.getElementById('pwd').value;
        var gender = document.getElementById('gender').value;
        var addr = document.getElementById('addr').value;
        var phn = document.getElementById('phn').value;
        var dob = document.getElementById('dob').value;
        var country = document.getElementById('country').value;
       if(fname == '' || lname == '' ||email==''||pwd==''||gender == '' || phn == '' || addr == ''||gender==''||phn=='') {
           alert('Please fill in all the required fields');
        } else {
            location.href="successful.html";
       }
       });
}
