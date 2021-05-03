
import { Provider } from 'react-redux';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import store from './store'
import './Styles/App.scss';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import AddContacts from './components/contacts/AddContacts';
import EditContacts from './components/contacts/EditContacts';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar/>
      <div className ="container">
        <div className="py-3">
        <Switch>
          <Route exact path = "/" component={Contacts} />
          <Route exact path = "/contacts/add" component={AddContacts} />
          <Route exact path = "/contacts/edit/:id" component={EditContacts} />
        </Switch>
        </div>
      </div>
      
    </div>

      </Router>
          </Provider>
  );
}

export default App;
