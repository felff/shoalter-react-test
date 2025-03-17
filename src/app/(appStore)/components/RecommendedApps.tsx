import { AppList } from '@/types/appStore';
import Image from 'next/image';
import React from 'react';

interface AppItem {
  name: string;
  icon: string;
  category: string;
}

interface Props {
  appData: AppList;
}

const AppCard = (props: AppItem) => {
  return (
    <section className="flex flex-col items-start gap-2">
      <div className="relative w-20 h-20 rounded-lg">
        <Image className="rounded-lg" src={props.icon} alt={props.name} fill />
      </div>
      <p className="text-sm text-black font-bold line-clamp-2">{props.name}</p>
      <p className="text-xs text-gray-500">{props.category}</p>
    </section>
  );
};

const RecommendedApps = (props: Props) => {
  const { appData } = props;
  return (
    <main className="overflow-x-auto w-full p-2 border-b border-b-gray-200">
      <h1 className="text-xl font-bold">推薦</h1>
      <section className="flex space-x-4 p-4 overflow-x-scroll scrollbar-hide">
        {appData.map((app) => {
          const name = app['im:name'].label;
          const url = app['im:image'][2].label;
          const category = app.category.attributes.label;
          return (
            <AppCard key={name} name={name} icon={url} category={category} />
          );
        })}
      </section>
    </main>
  );
};

export default RecommendedApps;
