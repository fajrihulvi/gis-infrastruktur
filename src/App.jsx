import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from './Layouts/AdminLayout';

// Routes
import {routes} from './router/index';

const adminContent = (elemet) => {
  return (
    <AdminLayout>
      {elemet}
    </AdminLayout>
  )
}

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          {
            routes.map(({url, component: Component, isAdmin}, i) => (
              <Route 
                key={i} 
                path={url} 
                element={
                  isAdmin ? adminContent(<Component />) : <Component />
                } />
            ))
          }
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
