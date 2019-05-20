const localStorage = require('./localStorage')

console.log('localStorage length: ', localStorage.length)

var userID = localStorage.getItem('user_id')

if(!userID){
    console.log('User ID not found. Setting the user id and token...')
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
    localStorage.setItem('user_id', '123456')
}else{
    console.log('UserID found: ' + userID)
    console.log('Clearing the user ID...')
    localStorage.clear()
}




