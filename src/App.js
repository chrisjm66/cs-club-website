
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import Mission from './components/Mission'
import Events from './components/Events'
import Resources from './components/Resources'

// This function defines the routes to the different webpages of our app. The route element defines what Javascript/React files to run based on the link the user is currently on.
function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}> { /* The Layout element is the building blocks of every webpage in the site - it adds the header to the top of the page. */ }
              <Route index element={<Home />} /> { /* Every nested element in the layout route leads to another webpage. */}
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/our-mission' element={<Mission />} />
              <Route path='/events' element={<Events />} />
              <Route path='/resources' element={<Resources />} />

            </Route>
        </Routes>
    </>
  );
}

export default App;
