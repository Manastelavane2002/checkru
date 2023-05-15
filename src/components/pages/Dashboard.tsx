import React from 'react';
import Header from '../global/Header';
import Navbar from '../global/Navbar';
import {LINKS} from '../../constants/links';

function DashboardPage() {
  return (
    <div>
      <Header/>
      <Navbar navElements={LINKS.NAVBAR_LINKS}/>
    </div>
  )
}

export default DashboardPage;
