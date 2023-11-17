function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // For demonstration purposes, check if the username and password are not empty
    if (username !== '' && password !== '') {
        alert('Login successful!'); // Replace this with your actual authentication logic
    } else {
        alert('Please enter a username and password.');
    }
}
