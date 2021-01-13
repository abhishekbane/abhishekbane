import React from 'react';

import UserAvatar from '../UI/UserAvatar/UserAvatar';
import { Avatar } from '../../utility/ThemeSize';

import styles from './ChatMeButton.module.css';

import { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } from '../UI/Position/Position';

const chatMeButton = (props) => {
    let borderRadius="";

    switch(props.corner) {
        case TOP_LEFT:
            borderRadius = "0 1.5rem 1.5rem 1.5rem`"
            break;
        case TOP_RIGHT:
            borderRadius = "1.5rem 0 1.5rem 1.5rem";
            break;
        case BOTTOM_RIGHT:
            borderRadius = "1.5rem 1.5rem 0 1.5rem";
            break;
        case BOTTOM_LEFT:
            borderRadius = "1.5rem 1.5rem 1.5rem 0";
            break;
        default:
            borderRadius = "1.5rem";
    }

    return (
        <button className={styles.chatMeButton} style={{borderRadius: borderRadius}}>
            Hi! I am Abhishek
            <UserAvatar ariaHidden size={Avatar.MEDIUM} />
        </button>
    );
};

export default chatMeButton;