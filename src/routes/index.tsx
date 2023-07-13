import React, { PropsWithChildren } from "react";
import {
  Route,
  useNavigate,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import AuthenticationGuard from "@/components/AuthenticationGuard";
import {
  AppState,
  Auth0Provider,
  Auth0ProviderOptions,
} from "@auth0/auth0-react";
import {
  AUTH0_AUDIENCE_URL,
  AUTH0_CALLBACK_URL,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
} from "@/config/app.config";
import SamplePage from "@/Pages/SamplePage";
import CallbackAuth0Page from "@/Pages/CallbackAuth0Page";
import PageDashboard from "@/Pages/PageDashboard";
import Instance from "@/Pages/Instance/Instance";
import World from "@/Pages/World/World";
import Galleries from "@/Pages/Gallery/Galleries";
import EditGallery from "@/Pages/Gallery/EditGallery";
import MessageBalls from "@/Pages/MessageBalls/MessageBalls";
import Recoil from "@/Pages/Recoil/Recoil";
// const LazyGallery = React.lazy(() => import("@/Pages/Galleries"));

const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

// https://stackoverflow.com/questions/73934043/how-to-use-auth0-provider-with-the-new-createbrowsererouter-in-v6-4/73938067?noredirect=1#comment130573558_73938067
const Auth0Layout = () => (
  <Auth0ProviderWithRedirectCallback
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    authorizationParams={{
      audience: AUTH0_AUDIENCE_URL,
      scope: "profile email read:users",
      redirect_uri: AUTH0_CALLBACK_URL,
    }}
    cacheLocation="localstorage"
  >
    <Outlet />
  </Auth0ProviderWithRedirectCallback>
);

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Auth0Layout />}>
        {/* Sample page */}
        <Route path="/sample-page" element={<SamplePage />} />

        <Route
          path="/dashboard"
          element={<AuthenticationGuard component={PageDashboard} />}
        />
        <Route path="/callback" element={<CallbackAuth0Page />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}

        {/* Sample page */}
        <Route
          path="/instance"
          element={<AuthenticationGuard component={Instance} />}
        />
        <Route
          path="/world"
          element={<AuthenticationGuard component={World} />}
        />
        <Route
          path="/gallery"
          element={<AuthenticationGuard component={Galleries} />}
        />
        <Route
          path="/gallery/edit/:galleryId"
          element={<AuthenticationGuard component={EditGallery} />}
        />
        <Route
          path="message"
          element={<AuthenticationGuard component={MessageBalls} />}
        />
        <Route path="recoil" element={<Recoil />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRoutes;
