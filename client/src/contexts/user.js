import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
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
                    setPageLoading(false);
                })
            } else {
                r.json().then(err => {
                    setError(err);
                    setPageLoading(false);
                })
            }
        })
        } , []);

        // restaurants

        const [restaurants, setRestaurants] = useState([]);
        
        const getRestaurants = async () => {
            const response = await fetch('/restaurants',{
                method: 'GET',
                headers: {
                    Accepts: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            const data = await response.json();
            setRestaurants(data);
        }

        useEffect(() => {
            getRestaurants();
        }, []);





    return (
        <UserContext.Provider value={{ user, restaurants, setUser, pageLoading, error }}>
            {props.children}
        </UserContext.Provider>
    )

}

export { UserContext, UserProvider };



