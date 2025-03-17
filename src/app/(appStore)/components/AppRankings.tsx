'use client';

import { AppList } from '@/types/appStore';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Flex, Spin } from 'antd';

interface AppItem {
  index: number;
  name: string;
  icon: string;
  category: string;
}

interface Props {
  appData: AppList;
}

const AppCard = (props: AppItem) => {
  return (
    <section className="flex items-center gap-4">
      <div className="text-xl text-gray-500">{props.index}</div>
      <Image
        className=" rounded-full"
        width={72}
        height={72}
        src={props.icon}
        alt={props.name}
      />
      <div>
        <p className="text-lg text-black font-bold line-clamp-1">
          {props.name}
        </p>
        <p className="text-xs text-gray-500">{props.category}</p>
      </div>
    </section>
  );
};

const itemsPerPage = 10;

const AppRankings = (props: Props) => {
  const { appData } = props;
  const [visibleItems, setVisibleItems] = useState<AppList>(
    appData.slice(0, itemsPerPage),
  );
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (
          target.isIntersecting &&
          !loading &&
          visibleItems.length < appData.length
        ) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loading, visibleItems, appData]);

  const loadMoreItems = () => {
    setLoading(true);

    setTimeout(() => {
      const nextItems = appData.slice(
        visibleItems.length,
        visibleItems.length + itemsPerPage,
      );

      setVisibleItems((prev) => [...prev, ...nextItems]);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="w-full h-[500px] overflow-y-scroll p-2">
      <section className="flex flex-col space-y-4">
        {visibleItems.map((app, i) => {
          const name = app['im:name'].label;
          const url = app['im:image'][2].label;
          const category = app.category.attributes.label;
          return (
            <AppCard
              key={name}
              index={i + 1}
              name={name}
              icon={url}
              category={category}
            />
          );
        })}
      </section>

      <section ref={loaderRef} className="flex justify-center my-6">
        {loading && (
          <Flex align="center" gap="middle">
            <Spin />
          </Flex>
        )}
      </section>
    </main>
  );
};

export default AppRankings;
