import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/ContactUs'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {
  return (
      <BrowserRouter>
       
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Header/>
            <About />
            <Services/>
            <Contact/>
            <Footer />
          </Route>


          <Route exact path='/Form'  component={Form}>
            <Navbar/>
            <Form/>
          </Route>
        </Switch>    
      </BrowserRouter>
  )
}

export default App
