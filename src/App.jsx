import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import _ from "lodash";

import { ChakraProvider } from "@chakra-ui/react";

// Routes
import {routes} from './router/index';
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthGuard } from "./app/authGuard";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Switch>
            
            {/* Public Routes */}
            <Route element={<AuthGuard isPrivate={false} />}>
              {_.map(_.filter(routes, { isProtected:false }), ({url, component: Component}, key) => {
                return (
                  <Route
                    exact={true}
                    key={key}
                    path={url}
                    element={<Component />}
                  />
                );
              })}
            </Route>
            
            {/* Private Route - Require Authentication */}
            <Route element={<AuthGuard isPrivate />}>
              {_.map(_.filter(routes,{ isProtected:true }), ({url, component: Component}, key) => {
                return (
                  <Route
                    exact={true}
                    key={key}
                    path={url}
                    element={<Component />}
                  />
                );
              })}
            </Route>
            
          </Switch>  
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
