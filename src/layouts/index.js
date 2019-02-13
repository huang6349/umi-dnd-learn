import { Layout, Menu } from 'antd';
import router from 'umi/router';
import { urlToArray } from '@/utils/array';

import styles from './index.css';

function BasicLayout({ children, location: { pathname } }) {
  return (
    <Layout className={styles['layout']}>
      <Layout.Header className={styles['header']}>
        <div className={styles['logo']}>
          <span>基于 umi 学习 react-dnd</span>
        </div>
        <Menu
          className={styles['nav']}
          mode="horizontal"
          selectedKeys={urlToArray(pathname)}
          onClick={({ key }) => router.replace(key)}
        >
          <Menu.Item key="/l1">例子1</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}

export default BasicLayout;
