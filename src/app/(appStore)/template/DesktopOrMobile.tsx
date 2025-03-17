'use client';

import React, { useState } from 'react';
import Header from '../container/Header';
import Application from '../container/Application';
import { AppList } from '@/types/appStore';
import useFilteredData from '@/hooks/useFilteredData';

const DesktopOrMobile = ({ data }: { data: AppList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = useFilteredData({ data, searchTerm });
  return (
    <main className="w-[390px] h-[844px]">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Application appData={filteredData} />
    </main>
  );
};

export default DesktopOrMobile;
