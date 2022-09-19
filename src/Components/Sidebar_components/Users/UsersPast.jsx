/*
import React from 'react';
import style from './Users.module.css'
import * as axios from "axios";

const Users = (p) => {
    let getUsers = () => {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    p.setUsers(
                        response.data.items
                    )
                })
    }
    return (
        <div className={style.wrap}>
            <div className={style.usrs}><h1>Users</h1></div>
            <button className={style.btnF} onClick={getUsers}>Get Users</button>
            <div className={style.usrsWrap}>
                {p.users.map(u =>
                    <div className={style.usWrap}>
                        <div key={u.id} className={style.usr}>

                            <div className={style.avaWrap}><img className={style.ava}
                                                                src={ u.photos.small ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/2489/2489278.png'}
                                                                alt=''
                            />
                            </div>

                            <div className={style.info}>
                                <div className={style.infoWrap}>
                                    <div className={style.name}>{u.name}</div>
                                    <div className={style.about}>About me: {u.status}</div>
                                    {/!*<div className={style.loca}>Location: {u.location.city}, {u.location.country}</div>*!/}
                                </div>
                            </div>

                            <div className={style.btnWrap}>
                                {u.followed
                                    ? <button className={style.btnUn} onClick={() => p.unfollow(u.id)}>Unfollow</button>
                                    : <button className={style.btnF} onClick={() => p.follow(u.id)}>Follow</button>}
                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;*/
