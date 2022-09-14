import React from 'react';
import style from "./Myinfo.module.css";

const Myinfo = () => {
    return (
        <>
            <div className={style.pho}>
                <div className={style.avaWrap}>
                    <img className={style.ava} src="https://cdn-icons-png.flaticon.com/512/1184/1184457.png" alt=""/>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.infoWrap}>
                    <div className={style.name}>
                        <strong>Vladislav Denega</strong>
                    </div>
                    <div className={style.int}>
                        <div className={style.intWrap}>
                            <div>About me:</div>
                            <div className={style.intBody}>I love programming</div>
                        </div>
                        <div className={style.intWrap}>
                            <div>Birthday:</div>
                            <div className={style.intBody}>14.05.2002</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Myinfo;