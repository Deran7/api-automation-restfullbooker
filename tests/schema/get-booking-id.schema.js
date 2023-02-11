export const GET_VALID_BOOKING_ID_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "getbookingid"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": "",
        }
    }
}

export const GET_INVALID_BOOKING_ID_RESPONSE_SCHEMA = {
    "type": "string",
    "default": {},
    "required": [
        "getbookingid"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": "",
        }
    }
}
