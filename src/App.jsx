import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

// Routes
import {routes} from './router/index';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          {
            routes.map(({url, component: Component}, i) => (
              <Route key={i} path={url} element={<Component />} />
            ))
          }
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
