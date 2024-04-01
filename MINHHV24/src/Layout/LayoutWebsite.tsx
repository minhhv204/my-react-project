import { Outlet } from 'react-router-dom';
import FooterWebsite from '../components/FooterWebsite';
import HeaderWebsite from '../components/HeaderWebsite';

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
