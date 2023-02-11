export const VALID_PARTIAL_UPDATE_BOOKING_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "firstname",
        "lastname"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": "",
            "title": "The firstname Schema",
            "examples": [
                "James"
            ]
        },
        "lastname": {
            "type": "string",
            "default": "",
            "title": "The lastname Schema",
            "examples": [
                "Brown"
            ]
        }
    },
    "examples": [{
        "firstname": "James",
        "lastname": "Brown"
    }]
}