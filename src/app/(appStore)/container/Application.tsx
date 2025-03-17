'use server';
import { getApp } from '@/actions/appStore';
import React from 'react';
import RecommendedApps from '../components/RecommendedApps';
import AppRankings from '../components/AppRankings';

const Application = async () => {
  const data = await getApp(100);
  const recommendedData = data.slice(0, 10);
  return (
    <main className="w-full h-[795px]">
      <RecommendedApps appData={recommendedData} />
      <AppRankings appData={data} />
    </main>
  );
};

export default Application;
