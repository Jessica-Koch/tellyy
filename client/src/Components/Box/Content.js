import React from 'react';
import posed from 'react-pose';
import styles from './Box.module.scss';
import Item from './Item';

const configContent = {
  off: {
    opacity: 0
  },
  on: {
    opacity: 1,
    delayChildren: 250,
    staggerChildren: 100
  }
};

const Content = posed.div(configContent);

const ContentContainer = props => {
  return (
    <Content {...props} className={styles.content}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Content>
  );
};

export default ContentContainer;
