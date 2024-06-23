package com.rimac

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    String username
    String password

    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired


    String email
    Date lastLogin
    Boolean consentGiven
    String captchaToken
    String jsonResponse
    Date responseDate

    Set<Role> getAuthorities() {
        (UserRole.findAllByUser(this) as List<UserRole>)*.role as Set<Role>
    }

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true
        email email: true, nullable: false
        lastLogin nullable: true
        consentGiven nullable: false
        captchaToken nullable: true
        jsonResponse nullable: false
        responseDate nullable: false
    }

    static mapping = {
        table name: '`user`'
        password column: '`password`'
    }
}
