import { NavBar} from '../../components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavBar></NavBar>
      <main >
        { children }
      </main>
    </>
  );
}