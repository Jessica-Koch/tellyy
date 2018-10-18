import React from 'react';
import posed, {PoseGroup} from 'react-pose';
import styles from './Box.module.scss';
// local imports
import Content from './Content';

const configBox = {
  off: {
    width: 150,
    height: 150,
    flip: true,
    background: '#69a7c2'
  },
  on: {
    width: '90vw',
    height: '90vh',
    flip: true,
    background: '#035D75'
  }
};

const Box = posed.div(configBox);

const BoxContainer = ({displayMessage, ...props}, Component) => {
  return (
    <Box {...props}>
      <PoseGroup>{displayMessage && <Component />}</PoseGroup>
      <Content />
    </Box>
  );
};

export default BoxContainer;
