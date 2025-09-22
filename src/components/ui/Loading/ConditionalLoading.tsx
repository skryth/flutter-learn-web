import React from 'react';
import styles from './index.module.css';
import Loading from '.';
interface ConditionalLoaderProps {
  isLoading: boolean,
  children: React.ReactNode,
  minHeight?: string;
}

const ConditionalLoader: React.FC<ConditionalLoaderProps> = ({
  isLoading,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.loaderWrapper} ${isLoading ? styles.visible : ''}`}>
        <Loading />
      </div>
      <div className={`${styles.content} ${!isLoading ? styles.visible : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ConditionalLoader