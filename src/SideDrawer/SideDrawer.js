import './SlideDrawer.css'
import { PencilLine, CalendarX, Barbell, Plus, User, ClockAfternoon, UserList } from "phosphor-react";
import { useEffect, useRef, useState } from 'react';
import UsersList from '../User/UsersList.js'

const SlideDrawer = ({ show, setShow }) => {
    const [participates, setParticipants] = useState(0);

    let drawerClasses = 'side-drawer';
    if (show) {
        drawerClasses = 'side-drawer open';
    }


    return (

        <div className={drawerClasses}>
            <section className='first-div'>
                <PencilLine size={20} />
                <div className='edit'>{'Edit'}</div>
                <CalendarX size={20} color="red" />
                <div className='cancle-class'>{'Cancle class'}</div>
            </section>
            <section className='second-div'>
                <span className='barbell-icon'>
                    <Barbell size={32} color="white" />
                </span>
                <h1>Workout of the day</h1>
            </section>
            <section className='third-div'>
                <div className='icons'>
                    <User size={30} />
                    <h3>Tom A</h3>
                    <span>Coach</span>
                </div>
                <div className='icons'>
                    <ClockAfternoon size={30} />
                    <h3>16:15</h3>
                    <span>Start Time</span>
                </div>
                <div className='icons'>
                    <UserList size={30} />
                    <h3>{participates}/7</h3>
                    <span>Praticipents</span>
                </div>
            </section>
            <section className='fourth-div'>
                <h2>You Should Know</h2>
                <p>Dagan & Eden which participates in the class have a debt</p>
            </section>
            <UsersList onParticipantsChange={setParticipants} />
        </div >
    );


};
export default SlideDrawer;