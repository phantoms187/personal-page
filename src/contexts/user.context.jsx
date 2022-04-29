import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth, getUserDisplayName } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    displayName: null,
    setDisplayName: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [displayName, setDisplayName] = useState(null);

    const value = { currentUser, setCurrentUser, displayName, setDisplayName };


    useEffect(() => {

        const unsubscribe = onAuthStateChangedListener((user) => {

            if(user) {
                createUserDocumentFromAuth(user);

                const getUserDisplayName = async (user) => {
                    const userDisplayName = await getUserDisplayName(user);
                    setDisplayName(userDisplayName);
                }
                getUserDisplayName();
                setCurrentUser(user);

                console.log("displayName: ");
                console.log(displayName);
            }
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

