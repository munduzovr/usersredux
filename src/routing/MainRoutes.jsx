import React from 'react';
import {Routes,Route} from 'react-router-dom';
import UsersList from '../components/UsersList';
import UserCreate from '../components/UserCreate';
import UserDetails from '../components/UserDetails';


const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<UsersList />}/>
            <Route path='/register' element={<UserCreate />}/>
            <Route path='/details/:id' element={<UserDetails />}/>
        </Routes>
    );
};

export default MainRoutes;