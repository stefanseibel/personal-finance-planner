# Backend

The Backend of this project uses Node.js with Express.js
requires `npm install` to be run after being pulled from git

run by executing `node src/index` in the terminal
Code can be found in ./src

keys that aren't supposed to end up in the git directory are now stored in a seperate file that's in the .gitignore, they are copied into the config file with the same path

keys.js:

    module.exports = {

        jwt: {
            key: "<jwt key>"
        },
        database: {
            sql: {
                password: "<mysql/mariadb user password>"
            }
        }
    }

## Routes

(for now) all routes start with /api/1.0/, newer versions will be found under different routes

all routes except /login and /signup require a valid JWT in the 'x-api-key' header

### POST /login

Request:

body:

    {
        "mail": string,
        "password": string
    }

Response:

    {
        token: string/jwt
    }

### POST /signup

Request:

body:

    {
        "mail": string,
        "password": string,
        "name" string
    }


Response:

    {
        token: string/jwt
    }

### GET /userAssets

Request:

no additional data

Response:

    [
        {
            "data": {
                <data from the database>
            },
            "additionalData": {
                <data from Yahoo Finance>
            }
        }, ...

    ]

###  POST /userAssets

Request:

body:

    {
        "symbol": string,
        "amount": int
    }

Response:

Status as text

### PUT /userAssets

Request:

body:

    {
        "id": int
        "symbol": string (optional),
        "amount": int (optional)
    }

Response:

Status as text

### DELETE /userAssets

Request:

body:

    {
        "id": int
    }

Response:

Status as text

### GET /autoComplete

Request:

query:

    /autoComplete?input=string

Response:

    [
        {
            <asset data from Yahoo Finance>
        }, ...
        (max 7 elements)
    ]
