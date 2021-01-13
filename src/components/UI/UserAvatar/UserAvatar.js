import React from 'react';
import UserImage from '../../../user.svg';

const userAvatar = (props) => {

    return (
        <img 
            aria-hidden={"true"}
            style={{
                width: props.size
            }} 
            alt="me" 
            src={UserImage} />
    );
};

export default userAvatar;