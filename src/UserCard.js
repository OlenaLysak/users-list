import React from 'react';

export default function UserCard(props) {
    const {userName, imgUrl} = props;
    return (
        <div className={"item"}>
            <img src={imgUrl} alt={userName} className={"userImg"}/>
            <div>{userName}</div>
        </div>
    )
}