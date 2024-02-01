import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShowList, ShowSummary } from './components';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShowList />} />
      <Route exact path='/show/:id' element={<ShowSummary />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
