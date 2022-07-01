import './App.css';
import { Provider } from "react-redux";
import { store } from './redux/store';
import AppRouter from './router';

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
