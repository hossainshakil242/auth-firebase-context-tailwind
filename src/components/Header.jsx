import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="navbar bg-purple-600 text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth-Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className='btn btn-xs'>SignOut</button>
                        </> :
                        <Link to='/login' className='btn btn-xs'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;