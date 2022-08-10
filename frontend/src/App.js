import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <Router>

    <Header/>
    <main>
    <Container>
{/* <h1>Ecommerce App</h1> */}
<Route path='/' component={HomeScreen} exact/>
<Route path='/product/:id' component={ProductDetails} exact/>
</Container>
    </main>
    
    <Footer/>
    </Router>
  );
}

export default App;
