const passwordInput = document.getElementById('password-input');
const passwordHelper = document.getElementById('password-input-helper');

const handleSubmit = event => {
    event.preventDefault();
    const password = passwordInput.value;
    const validator = new PasswordValidator(password);
    const ok = validator.validate();
    if (ok) {
        passwordInput.ariaInvalid = "false";
        passwordHelper.innerText = '';
    } else {
        passwordInput.ariaInvalid = "true";
        passwordHelper.innerText = validator.errors.join('\n');
    }
};
