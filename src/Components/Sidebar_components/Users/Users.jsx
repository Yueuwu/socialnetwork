import React from 'react';
import style from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return (
        <>
            <div className={style.wrap}>
                <div className={style.usrs}><h1>Users</h1></div>
                <div>
                    {pages.map(i =>
                        <span onClick={(e) => props.pageChanger(i)}
                              className={props.currentPage === i ? style.selected : null}>{i}</span>
                    )}
                </div>
                <div className={style.usrsWrap}>
                    {props.users.map(u =>
                        <div className={style.usWrap}>
                            <div key={u.id} className={style.usr}>

                                <div className={style.avaWrap}><img className={style.ava}
                                                                    src={u.photos.small ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/2489/2489278.png'}
                                                                    alt=''
                                />
                                </div>

                                <div className={style.info}>
                                    <div className={style.infoWrap}>
                                        <div className={style.name}>{u.name}</div>
                                        <div className={style.about}>About me: {u.status}</div>
                                            </div>
                                            </div>

                                            <div className={style.btnWrap}>
                                        {u.followed
                                            ? <button className={style.btnUn}
                                            onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                            : <button className={style.btnF} onClick={() => props.follow(u.id)}>Follow</button>}
                                            </div>

                                            </div>

                                            </div>
                                            )}
                                    </div>
                                </div>

                            </>
    );
};

export default Users;