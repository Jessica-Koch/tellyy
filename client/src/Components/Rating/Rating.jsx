import React from 'react';

import Icon from '../Icon';
import styles from './Rating.module.scss';

const range = (min, max) =>
  Array(max - min + 1)
    .fill()
    .map((_, i) => min + i);

const RatingItem = ({checked, colored, icon, value}) => (
  <label>
    <Icon className={colored ? styles.active : styles.gray} icon={icon} />
  </label>
);
const Rating = ({className, min, max, value, icon}) => {
  return (
    <div className={className}>
      {range(min, max).map(item => {
        console.log(item);
        return (
          <RatingItem
            key={item}
            icon={icon}
            value={item}
            colored={value >= item}
          />
        );
      })}
    </div>
  );
};

export default Rating;
