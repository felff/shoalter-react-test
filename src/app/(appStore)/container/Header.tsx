import React from 'react';
import { Input } from 'antd';

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
const Header = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <main className="w-full p-2 border-b bg-gray-200 border-b-gray-400">
      <Input
        placeholder="搜尋"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </main>
  );
};

export default Header;
