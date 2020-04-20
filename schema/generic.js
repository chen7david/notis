module.exports = {

    /* GENERIC */ 

    unknown: (code) => `unknown error, something went wrong - ER${code}`,  
    undefinded: (noun) =>`${noun} is not definded`,
    invalid: (noun) =>`invalid ${noun}!`,
    incorrect: (noun) =>`incorrect ${noun}!`,
    incomplete: (noun) =>`incomplete ${noun}!`,
    completed: (noun) =>`completed ${noun}!`,
    expired: (noun) =>`expired ${noun}!`,
    forbidden: (noun) =>`forbidden ${noun}!`,
    duplicate: (noun) => `${noun} is already in use!`, 
    required: (noun) =>`${noun} required!`,
    login: (noun) =>`welcome back ${noun}!`,
    logout: (noun) =>`goodbye ${noun}, hope to see you again soon!`,
    verified: (noun) =>`${noun} verification complete!`,
    verification_required: (noun) =>`${noun} verification incomplete!`,
    suspended: (noun) =>`${noun} suspended!`,
    disabled: (noun) =>`${noun} disabled`,
    missing: (noun) =>`${noun} missing`,
    confirmed: (noun) =>`${noun} confirmed`,
    confirmation_required: (noun) =>`${noun} confirmation required`,
    already_confirmed: (noun) =>`${noun} already confirmed`,
    custom: (noun) =>`${noun}`,

    /* CRUD */ 

    created: (noun) =>`successfully created new ${noun}!`,
    create_failed: (noun) =>`faild to create new ${noun}!`,
    updated: (noun) =>`successfully updated ${noun}!`,
    update_faild: (noun) =>`faild to update ${noun}!`,
    deleted: (noun) =>`successfully deleted ${noun}!`,
    delete_faild: (noun) =>`faild to delete ${noun}!`,
}