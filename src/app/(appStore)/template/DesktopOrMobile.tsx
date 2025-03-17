import React from 'react';
import Header from '../container/Header';
import Application from '../container/Application';

const DesktopOrMobile = () => {
  return (
    <main className="w-[390px] h-[844px]">
      <Header />
      <Application />
    </main>
  );
};

export default DesktopOrMobile;
