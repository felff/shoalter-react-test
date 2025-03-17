import { AppList } from '@/types/appStore';
import { useMemo } from 'react';

interface UseFilteredDataProps {
  data: AppList;
  searchTerm: string;
}

const useFilteredData = ({
  data,
  searchTerm,
}: UseFilteredDataProps): AppList => {
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((entry) => {
      const name = entry['im:name']?.label.toLowerCase() || '';
      const summary = entry.summary?.label.toLowerCase() || '';
      const title = entry.title?.label.toLowerCase() || '';
      const keyword = searchTerm.toLowerCase();

      return (
        name.includes(keyword) ||
        summary.includes(keyword) ||
        title.includes(keyword)
      );
    });
  }, [data, searchTerm]);

  return filteredData;
};

export default useFilteredData;
