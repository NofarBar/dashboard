import { useState } from 'react';
import { Trash, WhatsappLogo } from 'phosphor-react';

import './UserItem.css'

const UserItem = ({ user, deleteUser }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <li className='user-item'>
            <div className='user-section'>
                <img className='image' src={process.env.PUBLIC_URL + user.img} />
                <span className='name' title={user.name}>{user.name}</span>
            </div>
            <button className={isClicked ? 'button clicked' : 'button'} onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'Checked' : 'Check in'}</button>
            <div>
                <WhatsappLogo size={20} color='#0BC71E' className='icon' />
                <Trash size={20} color='#FF0B37' onClick={() => deleteUser(user.name)} />
            </div>
        </li>
    );



};
export default UserItem;