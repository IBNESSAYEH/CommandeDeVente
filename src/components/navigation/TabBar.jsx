import React from 'react'
import Tab from './Tab';

const TabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-none">
      {tabs.map(tab => (
        <Tab  key={tab.id} label={tab.label} isActive={activeTab === tab.id} onClick={() => onTabChange(tab.id)}/>
      ))}
    </div>
  );
};

export default TabBar
