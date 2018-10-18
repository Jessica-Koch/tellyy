import React from 'react';
import posed from 'react-pose';
import styles from './Box.module.scss';

const Item = posed.div({
  on: {opacity: 1, y: 0},
  off: {opacity: 0, y: 30, transition: {type: 'spring'}}
});

const ItemContainer = props => {
  return <Item {...props} className={styles.item} />;
};

export default ItemContainer;
