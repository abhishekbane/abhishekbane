import React from 'react';

import Postion, { TOP_LEFT, TOP_RIGHT } from '../UI/Position/Position';
import ChatMeButton from '../ChatMeButton/ChatMeButton';
import GlowingAvatar from '../GlowingAvatar/GlowingAvatar';

import styles from './ActiveHeader.module.css';

const header = () => {
    return (
        <header className={ styles.activeHeader }>
            <div className={ styles.placeHolder }></div>
            <div className={ styles.activeHeaderFixed }>
                <div className={ styles.thinBar }></div>
                <div className={ styles.glowingAvatarContainer } >
                    <GlowingAvatar />
                </div>
            </div>
        </header>
    );
};

export default header;