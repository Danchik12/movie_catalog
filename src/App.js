import Header from './components/elements/Header/Header'
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {Info} from './components/Info/Info'
import {Bookmarks} from './components/Bookmarks/Bookmarks'
import {NavigateBar} from './components/UI/Navigation/NavigateBar'
import Catalog from './components/Catalog/Catalog'
import {useSelector} from 'react-redux'
function App() {

  const {isLoading,search } = useSelector((state) => state.movie)
  return (
    <div className="App">

    <Header/>
    <div className='d-flex'>
    <NavigateBar />
    <Routes>
    
    <Route path='/' exact element={<Home/>} />
    <Route path='/bookmarks' exact element={<Bookmarks/>}/>
    <Route  path='/search' exact element={<Catalog items={search}/>}/>
    <Route path='/info/:id' exact  element={<Info/>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
