import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type AuthenticationGuardPropTypes = {
  component: any;
};

const AuthenticationGuard = ({ component }: AuthenticationGuardPropTypes) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <p>loading...</p>,
  });

  return <Component />;
};

export default AuthenticationGuard;
