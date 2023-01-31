

import { RouterProvider } from 'react-router';
import './App.css';
import Router from './routes/Routes';



function App() {

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
