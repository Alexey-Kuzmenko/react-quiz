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
    constructor(type, label, shouldValidate, required) {
        this.type = type
        this.label = label
        this.validation.shouldValidate = shouldValidate
        this.validation.rules.required = required
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

export default FormControls