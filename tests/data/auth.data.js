export const VALID_AUTH = {
    "username": "admin",
    "password": "password123"
}

export const INVALID_AUTH_PASSWORD_NOT_REGISTED= {
    "username": "admin",
    "password": "password"
}

export const INVALID_AUTH_USERNAME_NOT_REGISTED={
    "username": "admin123",
    "password": "password123"
}

export const INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_REGISTED= {
        "username" : "",
        "password" : "password123"
}

export const INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_NOT_REGISTED={
    "username" : "",
    "password" : "password"
}

export const INVALID_AUTH_USERNAME_REGISTED_AND_PASSWORD_EMPTY={
    "username" : "admin",
    "password" : ""
}

export const INVALID_AUTH_USERNAME_NOT_REGISTED_AND_PASSWORD_EMPTY={
    "username" : "admin123",
    "password" : ""
}

export const INVALID_AUTH_USERNAME_AND_PASSWORD_EMPTY={
    "username" : "",
    "password" : ""
}