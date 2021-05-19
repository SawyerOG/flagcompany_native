import React, { createContext, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    isAuthed: false,
    crewName: '',
    crew: [],
    login: () => {},
    logout: () => {},
});

const AuthContextProvider = ({ children }) => {
    const [isAuthed, setIsAuthed] = useState(false);
    const [crewName, setCrewName] = useState('');
    const [crew, setCrew] = useState([]);

    const loginHandler = (crewName) => {
        setIsAuthed(true);
        setCrewName(crewName);
    };
    const logOutHandler = async () => {
        await AsyncStorage.removeItem('@creds');
        setIsAuthed(false);
    };
    // const setCrewNameHandler = (membersName) => {
    //     setCrewName(membersName);
    // };

    const saveCrew = (theCrew) => {
        setCrew(theCrew);
    };

    //Need logic to see if the user is logged in with local storage.

    return (
        <AuthContext.Provider
            value={{
                login: loginHandler,
                logout: logOutHandler,
                saveCrew: saveCrew,
                // setName: setCrewNameHandler,
                isAuthed: isAuthed,
                crewName: crewName,
                crew: crew,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
