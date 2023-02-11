export const VALID_CREATE_BOOKING_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "bookingid",
        "booking"
    ],
    "properties": {
        "bookingid": {
            "type": "integer",
            "default": "",
    }
}
}

export const INVALID_CREATE_BOOKING_WITHOUT_FIRSNAME_RESPONSE_SCHEMA = {
    "type": "string",
    "default": {},
    "title": "Root Schema",
    "required": [
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
    ],
    "properties": {
        "lastname": {
            "type": "string",
            "default": "",
            "title": "The lastname Schema",
            "examples": [
                "Brown"
            ]
        },
        "totalprice": {
            "type": "integer",
            "default": 0,
        }
    }
}

export const INVALID_CREATE_BOOKING_WITHOUT_LASTNAME_RESPONSE_SCHEMA = {
    "type": "string",
    "default": {},
    "title": "Root Schema",
    "required": [
        "firstname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": "",
        }
    }
}

export const INVALID_CREATE_BOOKING_WITHOUT_FIRSTNAME_AND_LASTNAME_RESPONSE_SCHEMA={
    "type": "string",
    "default": {},
    "title": "Root Schema",
    "required": [
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
    ],
    "properties": {
        "totalprice": {
            "type": "integer",
            "default": 0,
        }
    }
}