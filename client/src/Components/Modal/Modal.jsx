import React from 'react';
import posed from 'react-pose';
import {styles} from './Modal.module.scss';

const Modal = posed.div({
  enter: {y: 0, opacity: 1, delay: 300},
  exit: {
    y: 50,
    opacity: 0,
    transition: {duration: 200}
  }
});

export const Shade = posed.div({
  enter: {opacity: 1},
  exit: {opacity: 0}
});

export default Modal;
