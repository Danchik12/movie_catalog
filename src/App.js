import Header from './components/elements/Header/Header'
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {Bookmarks} from './components/Bookmarks/Bookmarks'
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/bookmarks' exact element={<Bookmarks/>}/>
    </Routes>
    </div>
  );
}

export default App;
