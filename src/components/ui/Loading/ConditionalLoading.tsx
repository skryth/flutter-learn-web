import React from 'react';
import styles from './index.module.css';
import Loading from '.';
interface ConditionalLoaderProps {
  isLoading: boolean,
  children: React.ReactNode,
  minHeight?: string;
  center?: boolean
}

const ConditionalLoader: React.FC<ConditionalLoaderProps> = ({
  isLoading,
  children,
  center
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.loaderWrapper} ${isLoading ? styles.visible : ''}`}>
        <Loading />
      </div>
      <div className={`${styles.content} 
        ${!isLoading ? styles.visible : ''}
        ${center ? styles.center : ''}
      `}>
        {children}
      </div>
    </div>
  );
};

export default ConditionalLoader