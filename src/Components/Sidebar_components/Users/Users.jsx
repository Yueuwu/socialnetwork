import React from 'react';

const Users = (p) => {
    if (p.users.length <= 5) {
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
        <div>
            { p.users.map(u => <div key={u.id}>
                {u.name} {u.about}
                <div>
                    { u.followed ? <button onClick={() => p.unfollow(u.id)}>Unfollow</button> : <button onClick={() => p.follow(u.id)}>Follow</button>}
                </div>
            </div>) }
        </div>
    );
};

export default Users;