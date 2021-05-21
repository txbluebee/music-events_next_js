import styles from '@/styles/Dashboard.module.css';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';

export default function DashboardPage({ events }) {
  console.log(events);
  return (
    <Layout title='User Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
