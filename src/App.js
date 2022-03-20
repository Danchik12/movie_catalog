import Header from './components/elements/Header/Header'
import {Routes,Route} from 'react-router-dom'
import {Main} from './components/elements/Main/Main'
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' exact element={<Main/>} />
  
    </Routes>
    </div>
  );
}

export default App;
