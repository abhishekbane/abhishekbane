import React from 'react';

import styles from './DescriptionList.module.css';

const descriptionList = ( props ) => {

    const list = props.list.map( ( val, index ) => <dd className={ styles.item } key={ index }>{ val }</dd> );

    return (
        <dl className={ styles.descriptionList }>
            <dt className={ styles.title }>{ props.title }</dt>
            { list }
        </dl>
    );
};

export default descriptionList;