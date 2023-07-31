import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div className='text-center'>
            <h1 className='text-2xl my-4 font-semibold'>User Profile Here!</h1>
            <p><b>Email: </b>{user.email}</p>
        </div>
    );
};

export default Profile;