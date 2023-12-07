// TopbarContext.js
import React, { createContext, useState, useContext,ReactNode } from 'react';

interface TopbarContent {
  icon: string;
  link: string;
  text: string;
}

interface TopbarContextProps {
  topbarContent: TopbarContent;
  updateTopbarContent: (newContent: TopbarContent) => void;
}

const defaultValue: TopbarContextProps = {
  topbarContent: {
    icon: 'default-icon',
    link: '/',
    text: 'Default Topbar Content',
  },
  updateTopbarContent: () => {},
};

const TopbarContext = createContext<TopbarContextProps>(defaultValue);

export interface TopbarProviderProps {
    className?: string;
    children: ReactNode;
}

export const TopbarProvider = ({ className,children }: TopbarProviderProps) => {
  const [topbarContent, setTopbarContent] = useState({
    icon: 'default-icon',
    link: '/',
    text: 'Default Topbar Content',
  });

  const updateTopbarContent = (newContent:TopbarContent) => {
    setTopbarContent(newContent);
  };

  return (
    <TopbarContext.Provider value={{ topbarContent, updateTopbarContent }}>
      {children}
    </TopbarContext.Provider>
  );
};

export const useTopbar = () => {
  const context = useContext(TopbarContext);
  if (!context) {
    throw new Error('useTopbar must be used within a TopbarProvider');
  }
  return context;
};
