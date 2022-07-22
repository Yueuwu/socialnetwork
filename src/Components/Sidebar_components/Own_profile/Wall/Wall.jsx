import React from 'react';
import style from './Wall.module.css'
import Posts from "./Posts/Posts";

const Wall = () => {
    return (
            <div className={style.wall}>
                <div className={style.add}>
                    <div className={style.inputWrap}>
                        <div className={style.typesome}>Write something</div>
                        <input className={style.input}/>
                        <div className={style.btnWrap}>
                            <button className={style.btn}>Post</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Posts/>
                </div>
            </div>
    );
};

export default Wall;