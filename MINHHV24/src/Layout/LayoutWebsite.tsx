import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeaderWebsite from '../components/HeaderWebsite';
import FooterWebsite from '../components/FooterWebsite';

const LayoutWebsite = () => {
  return (
    <>
      <div>
        <HeaderWebsite />

        <Outlet />

        <main>
          <div className='album py-5 bg-body-tertiary'></div>
        </main>
        <FooterWebsite />
      </div>
    </>
  );
};

export default LayoutWebsite;
