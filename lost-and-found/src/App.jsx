import React from 'react'
import LostItemList from './Components/LostItemList'
import Signup from './Components/signup'
import FormInput from './Components/FormInput'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>

      
       <h1>Lost Items</h1>
      <LostItemList/>
      <Signup/>
      <Footer />
      
    


    </div>
  )
}

export default App