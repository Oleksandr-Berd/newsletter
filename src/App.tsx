
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy, useState } from 'react';

const MainPage = lazy(() => import("./page/MainPage/MainPage"))
const Success = lazy(() => import('components/Success/Success'))



const App: React.FC = () => {
  const [data, setData] = useState<string>('');
  const navigate = useNavigate()

  const handleSubmit = (value: { email: string }) => {
    const { email } = value
    setData(email)
    navigate("success")
  }
  
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage handleSubmit={handleSubmit} />} />  
          <Route path='success' element={<Success email={data} />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
