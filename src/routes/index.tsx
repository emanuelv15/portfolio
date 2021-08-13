import { Dispatch, SetStateAction } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";

interface RoutesProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

export function Routes({ theme, setTheme }: RoutesProps) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <Home {...props} theme={theme} setTheme={setTheme} />
        )}
      />
    </Switch>
  );
}
