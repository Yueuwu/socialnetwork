import React from 'react';
import style from './Users.module.css'

const Users = (p) => {
    if (p.users.length <= 4) {
        p.setUsers(
            [
                {
                    id: Date.now(),
                    followed: true,
                    name: 'Dasda',
                    about: 'I am a maker',
                    location: {city: 'Q-11', country: 'Q-011'},
                    photo: ''
                },
            ]
        )
    }
    return (
        <div className={style.wrap}>
            <div className={style.usrs}><h1>Users</h1></div>

                {p.users.map(u =>
                    <div className={style.usWrap}>
                        <div key={u.id} className={style.usr}>

                            <div><img className={style.ava}
                                      src='https://cdn-icons-png.flaticon.com/512/2489/2489278.png'
                                      alt=''
                                />
                            </div>

                            <div className={style.info}>
                                <div className={style.infoWrap}>
                                    <div className={style.name}>{u.name}</div>
                                    <div className={style.about}>About me: {u.about}</div>
                                    <div className={style.loca}>Location: {u.location.city}, {u.location.country}</div>
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
    );
};

export default Users;