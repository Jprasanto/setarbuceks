import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { Provider } from "react-redux";
import store from './store/index.js'

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
