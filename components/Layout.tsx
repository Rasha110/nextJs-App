import styles from '../styles/Layout.module.css';
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
        <h1>Hi</h1>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
