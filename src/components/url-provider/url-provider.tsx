import classNames from 'classnames';
import styles from './url-provider.module.scss';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface UrlProviderProps {
    className?: string;
    children: ReactNode;
}

interface UrlContextValue {
  url: string;
  updateUrl: (newUrl: string) => void;
}

const UrlContext = createContext<UrlContextValue | undefined>(undefined);

export const UrlProvider = () => {
  const [url, setUrl] = useState('https://zhiyouyuec.com');

  const updateUrl = (newUrl: string) => {
    setUrl(newUrl);
  };

  const contextValue: UrlContextValue = {
    url,
    updateUrl,
  };

  return (
     /*<UrlContext.Provider value={{ url, updateUrl }}>*/
    <UrlContext.Provider value={contextValue}>

      <h3>url: {url}</h3>
    </UrlContext.Provider>
    
  );
};

export const useUrl = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error('useUrl must be used within a UrlProvider');
  }
  return context;
};