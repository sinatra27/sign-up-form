// Select elements
const password = document.getElementById('password');
const confirm = document.getElementById('password_confirm');
const alertMsg = document.querySelector('.alert');

confirm.addEventListener('input', (event) => {
    if (password.value != confirm.value) {
        alertMsg.innerHTML = '* Passwords do not match';
        password.style.borderColor = 'red';
        confirm.style.borderColor = 'red';
    } else {
        alertMsg.innerHTML = '';
        password.style.borderColor = '#e5e7eb';
        confirm.style.borderColor = '#e5e7eb';
    }
});

