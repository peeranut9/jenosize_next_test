import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  isAuthenticatedSelector,
  isAuthenticatingSelector,
} from "@/store/slices/userSlice";
import { isClient } from "@/utils/staticCommon";

// eslint-disable-next-line react/display-name
const pageAuth = (WrappedComponent: React.FC) => (props: any) => {
  if (isClient()) {
    const router = useRouter();
    const { route } = router;
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const isAuthenticating = useSelector(isAuthenticatingSelector);

    if (isAuthenticating) {
      return null;
    }

    if (route !== "/signin") {
      if (!isAuthenticated) {
        router.push(`/signin`);
        return null;
      }
    } else {
      if (isAuthenticated) {
        router.push(`/`);
        return null;
      }
    }

    return <WrappedComponent {...props} />;
  }

  return null;
};

export default pageAuth;
