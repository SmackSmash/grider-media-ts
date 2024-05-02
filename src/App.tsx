import Header from './components/Header';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <main className='container mx-auto p-4'>
      <Header />
      <UsersList />
    </main>
  );
};

export default App;
