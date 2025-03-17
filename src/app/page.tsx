import { getApp } from '@/actions/appStore';
import DesktopOrMobile from './(appStore)/template/DesktopOrMobile';

const Home = async () => {
  const data = await getApp(100);
  return (
    <main className="w-full h-svh flex justify-center items-center">
      <DesktopOrMobile data={data} />
    </main>
  );
};
export default Home;
