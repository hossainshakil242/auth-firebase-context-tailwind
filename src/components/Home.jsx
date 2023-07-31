import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProviders';

const Home = () => {
    // const {user} = useContext(AuthContext);

    // console.log(user);

    return (
        <div>
            {/* <h2>{user && <span>{user}</span>}</h2> */}
            <h2>This is home</h2>
        </div>
    );
};

export default Home;