export default function Validation(formData) {
    const errors = {};
    if(formData.username === ""){
        errors.username = "user name is required"
    }
    if(formData.email === ''){
        errors.email = "required"
    }
    if(formData.password === ""){
        errors.password = "password is required"
    }
    if(formData.password2 === ""){
        errors.password2= "required"
    }
    return errors;
}