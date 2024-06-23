package backend.rimac

import static org.springframework.http.HttpStatus.*
import grails.converters.JSON

class UserController {

    def saveUser() {
        User user = new User(params)
        if (user.save(flush: true)) {
            render status: CREATED, text: user as JSON
        } else {
            render status: BAD_REQUEST, text: user.errors as JSON
        }
    }

    def updateUser() {
        User user = User.get(params.id)
        if (user) {
            user.properties = params
            if (user.save(flush: true)) {
                render status: OK, text: user as JSON
            } else {
                render status: BAD_REQUEST, text: user.errors as JSON
            }
        } else {
            render status: NOT_FOUND
        }
    }
    def saveResponse() {
        User user = User.get(params.userId)
        if (!user) {
            render status: NOT_FOUND, text: 'User not found'
            return
        }

        UserResponse response = new UserResponse(
                user: user,
                jsonResponse: params.jsonResponse,
                responseDate: new Date()
        )

        if (response.save(flush: true)) {
            render status: CREATED, text: response as JSON
        } else {
            render status: BAD_REQUEST, text: response.errors as JSON
        }
    }
}
