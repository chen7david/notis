module.exports = {

    /* GENERIC */ 
    
    'any.required': ({label}) => `${label} is required`, 
    'string.empty': ({label}) => `${label} is not allowed to be empty`, 
    'string.base': ({label}) => `${label} must be a string`,
    'object.base': ({label}) => `${label} must be an object`, 
    'object.empty': ({label}) => `${label} is not allowed to be empty`, 
    'boolean.base': ({label}) => `${label} must be a boolean`, 
    'boolean.empty': ({label}) => `${label} is not allowed to be empty`, 
    'number.base': ({label}) => `${label} must be a number`, 
    'number.empty': ({label}) => `${label} is not allowed to be empty`, 
    'array.base': ({label}) => `${label} must be an array`, 
    'number.integer': ({label}) => `${label} must be an integer`, 
    'string.email': ({label}) => `${label} must be a valid email`, 
    'string.min': ({label, limit}) => `${label} length must be at least ${limit} characters long`, 
    'string.max': ({label, limit}) => `${label} length must be less than or equal to ${limit} characters long`, 
    'string.length': ({label, limit}) => `${label} length must be exactly equal to ${limit} characters long`, 
    'any.only': ({label, ref}) => `${label} and ${ref} must match`, 
}
