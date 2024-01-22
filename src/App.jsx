import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

// Routes
import {routes} from './router/index';
import { QueryClient, QueryClientProvider } from "react-query";
import { setupGeneralAxios } from "./app/axios";

const queryClient = new QueryClient()
setupGeneralAxios();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
