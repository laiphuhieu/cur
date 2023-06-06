import React, { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

type AuthenticationGuardPropTypes = {
  component: ComponentType;
};

const AuthenticationGuard = ({ component }: AuthenticationGuardPropTypes) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <p>loading...</p>,
  });

  return <Component />;
};

export default AuthenticationGuard;
