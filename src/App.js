import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <>
        <Cart></Cart>
      </>
    </Provider>
  );
}

export default App;
