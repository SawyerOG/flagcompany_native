import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuthed: false,
    crewName: '',
    login: () => {},
    logout: () => {},
});

const AuthContextProvider = ({ children }) => {
    const [isAuthed, setIsAuthed] = useState(false);
    const [crewName, setCrewName] = useState('');

    const loginHandler = () => {
        setIsAuthed(true);
    };
    const logOutHandler = () => {
        setIsAuthed(false);
    };
    const setCrewNameHandler = (membersName) => {
        setCrewName(membersName);
    };

    //Need logic to see if the user is logged in with local storage.

    return (
        <AuthContext.Provider
            value={{
                login: loginHandler,
                logout: logOutHandler,
                setName: setCrewNameHandler,
                isAuthed: isAuthed,
                crewName: crewName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
