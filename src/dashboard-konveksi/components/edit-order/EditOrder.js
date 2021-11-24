import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';

export function EditOrder(){
    const {url, setUrl, user, setUser, menuActive, setMenuActive} = useContext(UserContext)

    useEffect(() => {
        setMenuActive("beranda");
    }, [])
    
    return(
        <div>
            <h2>EditOrder</h2>
        </div>
    )
}