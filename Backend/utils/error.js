import { Error } from "mongoose"

class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.message = message
        this.statusCode = statusCode
    }
}
export default AppError

