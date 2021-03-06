import React, {Component} from 'react';
import styles from './App.module.scss';
import Sidebar from '../../Components/Sidebar';
import Content from '../Content';
import Header from '../../Components/Header';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
