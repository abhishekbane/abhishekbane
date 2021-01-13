import React from 'react';

import UserAvatar from '../UI/UserAvatar/UserAvatar';

import styles from "./GlowingAvatar.module.css";

const glowingAvatar = () => {
    return (
        <div className={ styles.glowingAvatarContainer }>
            <div className={ styles.glowing }></div>
            <div className={ styles.avatarContainer }>
                <UserAvatar size="70%"/>
            </div>
        </div>
    );
};

export default glowingAvatar;