import { createContext, useContext, useEffect, useState } from "react";
// Opretter auth context
const AuthContext = createContext()

// Function Component til at provide login data med
const AuthProvider = ({ children }) => {
	const [loginData, setLoginData] = useState('')

	// Hent data fra sessionstorage hvis det findes
	useEffect(() => {
		if(sessionStorage.getItem('token')) {
			setLoginData(JSON.parse(sessionStorage.getItem('token')))
		}
	}, [children]);

	return (
		<AuthContext.Provider value={{loginData, setLoginData}}>
			{children}
		</AuthContext.Provider>
	)
}

// Custom auth hook 
const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }