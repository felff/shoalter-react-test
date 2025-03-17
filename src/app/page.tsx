import { getApp } from '@/actions/appStore';

const Home = async () => {
  const data = await getApp();
  console.log(data);

  return (
    <main className="w-full h-svh flex justify-center items-center"></main>
  );
};
export default Home;
