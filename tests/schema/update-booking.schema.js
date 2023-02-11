export const VALID_UPDATE_BOOKING_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": ""
        },
        "lastname": {
            "type": "string",
            "default": ""
        },
        "totalprice": {
            "type": "integer",
            "default": 0
        },
        "depositpaid": {
            "type": "boolean",
            "default": false
        },
        "bookingdates": {
            "type": "object",
            "default": {},
            "required": [
                "checkin",
                "checkout"
            ],
            "properties": {
                "checkin": {
                    "type": "string",
                    "default": ""
                },
                "checkout": {
                    "type": "string",
                    "default": ""
                }
            }
        },
        "additionalneeds": {
            "type": "string",
            "default": ""
        }
    }
}