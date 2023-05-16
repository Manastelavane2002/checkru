import React from 'react';
import Header from '../../modules/dashboard/Header/Header';
import Navbar from '../../modules/dashboard/Navbar/Navbar';
import { LINKS } from '../../../constants/links';
import CardList from '../../modules/dashboard/Card/CardList';
import { cardList } from '../../modules/dashboard/Card/card.mock';


function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <CardList cardList={cardList}/>
    </div>
  );
}

export default DashboardPage;
