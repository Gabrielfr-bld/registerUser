import React, { Fragment } from 'react';
import Header from './Header';
import './Main.css';

const Main = props => 
  <Fragment>
    <Header {...props}/>
    <main className="content">
      Conteúdo
    </main>
  </Fragment>

export default Main;
