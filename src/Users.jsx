import React from 'react';

const Users = ({users, onSelected}) => {
    return (
        <div>
            {
                users.map(
                    user => 
                    <div key={user.id} onClick={()=> onSelected(user)}>
                        <img src={user.avatar} alt="" />
                        <p>{user.first_name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Users;
