import { Routes, Route } from 'react-router-dom'
import Authentication from './routes/authentication/authentication.component';

import Home from './routes/home/home.compononent'
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return(
    <h2>I am the shop page</h2>
  )
}

const App = () => {
  return (
    <Routes>
    <Route path = '/' element={<Navigation />} >
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop/>} />
      <Route path='auth' element={<Authentication />} />
    </Route>
    </Routes> 
  );
}

export default App
