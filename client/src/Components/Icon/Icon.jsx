import React, {Component} from 'react';
import { Icon as IconBase } from 'react-icons-kit'
import {object, string} from 'prop-types';

class Icon extends Component {
  static propTypes = {
    className: string,
    icon: object.isRequired
  }

  static defaultProps = {
    className: '',
  }

  render(){
    const {className, icon, size} = this.props;

    return (
      <IconBase size ={size} className={className} icon={icon} />
    )
  }
}

export default Icon;