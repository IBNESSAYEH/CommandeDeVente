import Tab from './Tab'
import { useApp } from '../../context/AppContext'
const TabBar = () => {
  const { tabs, activeTab, setActiveTab } = useApp()

  return (
    <div className="flex border-none">
      {tabs.map(tab => (
        <Tab  key={tab.id} label={
            <div className="flex items-center">
              <span className="ml-1">{tab.label}</span>
            </div>
          } 
          isActive={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}/>
      ))}
    </div>
  )
}

export default TabBar