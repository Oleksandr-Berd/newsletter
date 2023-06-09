
import { Route, Routes, useNavigate } from 'react-router-dom';
import { lazy, useState } from 'react';

import { GlobalStyles } from './utilities/GlobalStyles';
import SharedLayout from './components/SharedLayout/SharedLayout';

const MainPage = lazy(() => import("./page/MainPage/MainPage"))
const Success = lazy(() => import('components/Success/Success'))



const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
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
        </Route>
        <Route path='success' element={<Success email={data} />} />
      </Routes>
    </div>
  );
}

export default App;
