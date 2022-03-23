import Header from './components/elements/Header/Header'
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {Bookmarks} from './components/Bookmarks/Bookmarks'
import {NavigateBar} from './components/UI/Navigation/NavigateBar'
function App() {
  return (
    <div className="App">

    <Header/>
    <div className='d-flex'>
    <NavigateBar />
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/bookmarks' exact element={<Bookmarks/>}/>

    </Routes>
    </div>
    </div>
  );
}

export default App;
