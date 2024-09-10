import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigationType, useSearchParams } from 'react-router-dom';
import { SideNav } from 'components/SideNav';
import { SESSIONS_PAGE_ROUTE } from 'services/routes';
import { SessionView } from 'views/Session/SessionView';
import { SessionsView } from 'views/Sessions/SessionsView';
import { InsuranceView } from 'views/Insurance';

const UserRouter = () => {
  const navigationType = useNavigationType();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (navigationType === 'PUSH' && searchParams) window.scrollTo(0, 0);
  }, [navigationType, searchParams]);

  return (
    <>
      <SideNav />
      <Routes>
        <Route path={SESSIONS_PAGE_ROUTE} element={<SessionsView />} />
        <Route path={`${SESSIONS_PAGE_ROUTE}/:sessionId`} element={<SessionView />} />
        <Route path={`${SESSIONS_PAGE_ROUTE}/:sessionId/:externalId`} element={<InsuranceView />} />
        <Route path="/*" element={<Navigate to={SESSIONS_PAGE_ROUTE} />} />
      </Routes>
    </>
  );
};

export default UserRouter;
