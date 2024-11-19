import "@styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";

// Import the routes file

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
