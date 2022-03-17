import React from 'react';
import ContactForm from './components/Contact';
import About from './components/About';
import Nav from './components/Nav';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}

export default App;
