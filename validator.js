const VALIDATION_MESSAGES = {
    TOO_SHORT: 'The password must be at least 8 symbols long',
    DIGIT: 'The password must contain at least one digit',
    LOWERCASE_LETTERS: 'The password must contain at least one lower case letter',
    UPPERCASE_LETTERS: 'The password must contain at least one upper case letter',
};

class PasswordValidator {
    #password;
    #errors = [];

    constructor(password) {
        this.#password = password;
    }

    validate() {
        if (this.#password.length < 8) {
            this.#errors.push(VALIDATION_MESSAGES.TOO_SHORT);
        }
        const hasDigit = /[0-9]/.test(this.#password);
        if (!hasDigit) {
            this.#errors.push(VALIDATION_MESSAGES.DIGIT);
        }
        const hasLowercase = /[a-z]/.test(this.#password);
        if (!hasLowercase) {
            this.#errors.push(VALIDATION_MESSAGES.LOWERCASE_LETTERS);
        }
        const hasUppercase = /[A-Z]/.test(this.#password);
        if (!hasUppercase) {
            this.#errors.push(VALIDATION_MESSAGES.UPPERCASE_LETTERS);
        }
        return this.#errors.length === 0;
    }

    get errors() {
        return this.#errors.map(e => e);
    }
}
