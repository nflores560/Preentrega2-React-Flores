import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item/Item';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        
      </Routes>
      </BrowserRouter>
     
      {/* <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemDetailContainer />
      <Item />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/> */}
    </div>
  );
}

export default App;
