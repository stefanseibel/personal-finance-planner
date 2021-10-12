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
        yahoofinanceapi: {
            key: "<yahoofinanceapi key>"
        }
    }