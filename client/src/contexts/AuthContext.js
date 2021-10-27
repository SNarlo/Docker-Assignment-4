import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
import userApis from '../apis/users';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password, firstName, lastName) => {
        return auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            const newUser = {
                "_id": user.user.uid,
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email
            }
            userApis.createUser(newUser)
            // Create a user in mongo when you sign up
        })
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logOut = () => {
        return auth.signOut()
    }

    const forgotPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })    
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        login,
        signup,
        logOut,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}