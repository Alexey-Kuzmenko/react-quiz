import is from "is_js"

class FormControls {
    value = ""
    validation = {
        valid: false,
        touched: false,
        errorMessage: "",
        rules: {
            required: false
        }
    }
    constructor(type, label, shouldValidate, required, errorMessage) {
        this.type = type
        this.label = label
        this.validation.shouldValidate = shouldValidate
        this.validation.rules.required = required
        this.validation.errorMessage = errorMessage
    }

    setValue(value) {
        this.value = value
    }

    setTouched(touched) {
        this.validation.touched = touched
    }

    setValid(valid) {
        this.validation.valid = valid
    }

    setRules(validationRules) {
        Object.entries(validationRules).forEach(([key, value]) => {
            this.validation.rules[key] = value
        })
    }

    setErrorMessage(errorMessage) {
        this.validation.errorMessage = errorMessage
    }

}

function validateInputValue(inputValue, config) {
    if (!config) {
        return true
    }

    let isValid = true

    if (config.required) {
        isValid = inputValue.trim() !== "" && isValid
    }

    if (config.email) {
        isValid = is.email(inputValue) && isValid
    }

    if (config.minLength) {
        isValid = inputValue.trim().length >= config.minLength && isValid
    }

    return isValid
}

function validateForm(formControls) {
    let isFromValid = true

    Object.values(formControls).forEach(inputControls => {
        const { validation: { valid } } = inputControls
        isFromValid = valid && isFromValid
    })

    return isFromValid
}

export { FormControls, validateInputValue, validateForm }