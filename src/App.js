import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShowList, ShowSummary } from './components';

function App() {
  return (
    <>
    <div id="header"><h1>Show Vault</h1></div>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShowList />} />
      <Route exact path='/show/:id' element={<ShowSummary />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
