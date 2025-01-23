// Dating.js

// Sample user data
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Function to handle login
function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log('Login successful');
        // Add further logic for successful login
    } else {
        console.log('Invalid username or password');
    }
}

// Example usage
login('user1', 'password1'); // Login successful
login('user1', 'wrongpassword'); // Invalid username or password