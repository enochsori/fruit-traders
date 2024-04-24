import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import DataContextProvider from './context/DataContext';

function App() {
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <Outlet />
      </DataContextProvider>
    </>
  );
}

export default App;
