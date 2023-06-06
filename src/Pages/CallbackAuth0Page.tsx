import React, { useCallback, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { GLOBAL_CONST } from "@/utils/constants";

const CallbackAuth0Page = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const checkCallback = useCallback(async () => {
    try {
      if (isAuthenticated) {
        let callbackPage = "";

        callbackPage =
          localStorage.getItem(`${GLOBAL_CONST.LS_CALLBACK_PAGE}`) || "";
        callbackPage === "" ? navigate(`/`) : navigate(`${callbackPage}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    checkCallback();
  }, [checkCallback]);

  return (
    <>
      <h1>callback page</h1>
    </>
  );
};

export default CallbackAuth0Page;
