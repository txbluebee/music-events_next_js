import styles from '@/styles/Dashboard.module.css';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';

export default function DashboardPage() {
  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
      </div>
    </Layout>
  );
}
