import React from 'react';

import Answer from '../Answer/Answer';
import GlowingAvatar from '../GlowingAvatar/GlowingAvatar';

import styles from './ActiveHeader.module.css';

const header = () => {
    return (
        <header className={ styles.activeHeaderContainer }>
            <div className={ styles.placeHolder }></div>
            <div className={ styles.activeHeader }>
                <div className={ styles.thinBar }></div>
                    <div className={ styles.barBackground } >
                        <GlowingAvatar />
                        <Answer />
                    </div>
            </div>
        </header>
    );
};

export default header;