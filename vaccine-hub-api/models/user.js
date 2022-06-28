const {UnauthorizedError} = require("../utils/errors")

class User {
    static async login(credentials){
        //user should submit email and passowrd
        //if any fileds are missing throw an error

        //then look up user in the db by email
        //if a user is found compare the submitted password
        //with the password in the db
        //if there is a match return the user

        //if any of this goes wrong throw an error
        throw new UnauthorizedError("Invalid email or password")
    }
    static async register(credentials){
        //user should submit their info
        //if any of this fields are missing throw an error

        //make sure no user exist in the ysstem with that email
        //if one does throw an error

        //take users password and hash it
        //take users email and lowercase it

        //create a new user in the db with all their info
        //return user

    }
}