import Header from './components/Header';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <main className='p-4 container mx-auto'>
      <Header />
      <UsersList />
    </main>
  );
};

export default App;
