
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Hello from './components/Hello';
import Usestate from './components/Usestate'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/hello" element={<Hello />} /> */}
        <Route path="/cart" element={<Usestate />} /> 
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/configureStore';
// import Usestate from './Usestate';

// function App() {
//   return (
//     <Provider store={store}>
//       <Usestate />
//     </Provider>
//   );
// }

// export default App;
