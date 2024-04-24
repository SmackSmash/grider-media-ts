import { useAppDispatch, useAppSelector } from './store';
import { addValue } from './store';

const App = () => {
  const testValues = useAppSelector(({ test }) => test);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addValue('Something'));
  };

  return (
    <main className='p-4'>
      <h1>App works</h1>
      <button className='bg-sky-600 px-4 py-2' onClick={handleClick}>
        Add test
      </button>
      {testValues.map(val => (
        <p>{val}</p>
      ))}
    </main>
  );
};

export default App;
