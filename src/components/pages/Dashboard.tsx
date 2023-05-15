import React from 'react';
import { Icon } from '../global/Icon/Icon';

function DashboardPage() {
  return (
    <>
      <Icon name="calendar" color="red-600" size={60} fill="red-200" />;
      <Icon name="mail" color="red-600" size={60} fill="red-200" className = 'stroke-2' />;
      <Icon name="download" color="red-600" size={60} fill="transparent" />;
      <Icon name="arrow-left" color="red-600" size={60} fill="red-200" />;
    </>
  );
}

export default DashboardPage;
