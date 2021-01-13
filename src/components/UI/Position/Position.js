import React from 'react';

export const TOP_LEFT = "TopLeft"; export const TOP_RIGHT = "TopRight";

export const BOTTOM_LEFT = "BottomLeft"; export const BOTTOM_RIGHT = "BottomRight";

const position = ( props ) => {
    let cssPosition = {};

    switch(props.pos) {
        case TOP_LEFT:
            cssPosition = {
                top: 0,
                left: 0
            };
            break;
        case TOP_RIGHT:
            cssPosition = {
                top: 0,
                right: 0
            };
            break;
        case BOTTOM_LEFT:
            cssPosition = {
                bottom: 0,
                left: 0
            };
            break;
        case BOTTOM_RIGHT:
            cssPosition = {
                bottom: 0,
                right: 0
            };
            break;
        default:
            cssPosition = {
                bottom: 0,
                right: 0
            };
    }

    return (
        <div style={{position: "fixed", margin: "1rem", ...cssPosition}}>
            { props.children }
        </div>
    );
};

export default position;