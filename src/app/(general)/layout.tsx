import { NavBar} from '../../components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar></NavBar>
      <main className='mt-20'>
        { children }
      </main>
    </>
  );
}