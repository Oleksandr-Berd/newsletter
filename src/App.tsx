
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const MainPage = lazy(() => import("./page/MainPage/MainPage"))



const App: React.FC=()=> {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
