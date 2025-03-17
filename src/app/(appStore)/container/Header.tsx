import React from 'react';
import { Input } from 'antd';

const Header = () => {
  return (
    <main className="w-full p-2 border-b bg-gray-200 border-b-gray-400">
      <Input placeholder="搜尋" />
    </main>
  );
};

export default Header;
