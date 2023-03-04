import { useState, useEffect, useRef } from 'react';
import { Plus } from 'phosphor-react';
import UserItem from './UserItem.js'

import './UsersList.css';

const options = [
    { name: 'Tom Levi', img: '/img/YoungSimba.png' },
    { name: 'Tomer Chohen', img: '/img/Timon.jpg' },
    { name: 'Tomi Tomi', img: '/img/zazu.jpg' },
    { name: 'Dagan Lev', img: '/img/abu.jpg' },
    { name: 'Eden Elian', img: '/img/genie.jpg' },
    { name: 'Yoni Yatziv', img: '/img/pumba.jpg' }
];


const UsersList = ({ onParticipantsChange = () => { } }) => {
    const participantsSelectMenuRef = useRef();
    const [usersList, setUsersList] = useState([...options.slice(3)]);

    const deleteUser = (name) => {
        let filteredArray = usersList.filter(item => item.name !== name);
        setUsersList([...filteredArray]);
    }

    const addUser = (event) => {
        const user = options.find(option => option.name === event.target.value);
        setUsersList([...usersList, user]);
    }

    useEffect(() => {
        onParticipantsChange(usersList.length);
        participantsSelectMenuRef.current.children[0].selected = true;
    }, [usersList.length]);

    return (
        <section className='users-div'>
            <div className='header'>
                <h2>Praticipents</h2>
                <div
                    style={{
                        width: "250px",
                        position: "relative"
                    }}
                >
                    <select ref={participantsSelectMenuRef} className="special-select" onChange={addUser} disabled={usersList.length === options.length}>
                        <option value="" disabled selected hidden>
                            Add Client
                        </option>
                        {options.map((option) => (
                            <option
                                key={option.name}
                                hidden={usersList.includes(option)}
                                value={option.name}>{option.name}</option>
                        ))}
                    </select>
                    <span
                        style={{
                            pointerEvents: "none",
                            position: "absolute",
                            right: 0,
                            padding: "4px"
                        }}
                    >
                        <Plus />
                    </span>
                </div>
            </div>
            <ul>
                {usersList.map((user) => <UserItem key={user.name} user={user} deleteUser={deleteUser} />)}
            </ul>
        </section >
    );


};
export default UsersList;
