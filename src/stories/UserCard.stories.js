import React from 'react';
import "../style.css";
import UserCard from '../UserCard';

export default {
    title: 'UserCard',
    component: UserCard
};

export const UserCardStory = UserCard.bind({});
UserCardStory.args = {
    imgUrl: "https://randomuser.me/api/portraits/women/83.jpg",
    userName: "First Last"
};