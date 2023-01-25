import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user);
                    setLoading(false);
                })
            } else {
                r.json().then(err => {
                    setError(err);
                    setLoading(false);
                })
            }
        })
        } , []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, error }}>
            {props.children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider };



