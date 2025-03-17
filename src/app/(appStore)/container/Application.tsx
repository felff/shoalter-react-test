import React from 'react';
import RecommendedApps from '../components/RecommendedApps';
import AppRankings from '../components/AppRankings';
import { AppList } from '@/types/appStore';

const Application = ({ appData }: { appData: AppList }) => {
  const recommendedData = appData.slice(0, 10);
  return (
    <main className="w-full h-[795px]">
      <RecommendedApps appData={recommendedData} />
      <AppRankings appData={appData} />
    </main>
  );
};

export default Application;
