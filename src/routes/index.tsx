import DashboardPage from '@/pages/dashboard';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(() => import('@/components/layout/Dashboard-layout'));

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
        {
          path: 'test',
          element: <div>test</div>,
        },
      ],
    },
  ];

  const routes = useRoutes([...dashboardRoutes]);

  return routes;
}
