import { AuthUser } from "@/models/auth.model";
import firebase from "firebase/compat/app";
import "firebase/auth";

interface EmailSignInProps {
  email: string;
  password: string;
}

const mapErrorCodeToMessage = (code: string): string => {
  switch (code) {
    case "auth/invalid-email":
      return "Invalid Email or Password";
    case "auth/user-disabled":
      return "User Disabled";
    case "auth/user-not-found":
      return "Invalid Email or Password";
    case "auth/wrong-password":
      return "Invalid Email or Password";
    case "auth/email-already-in-use":
      return "Email Already In Use";
    case "auth/weak-password":
      return "Weak Password";
    case "auth/network-request-failed":
      return "Network Request Failed";
    default:
      return "Signin failed.";
  }
};

const setResponse = async (
  getUser: firebase.User | null
): Promise<AuthUser | null> => {
  const getUserToken = await getUser?.getIdToken();
  if (getUserToken && getUser) {
    return {
      token: getUserToken,
      user: {
        uid: getUser.uid,
        displayName: getUser.displayName,
        photoURL: getUser.photoURL,
        email: getUser.email,
      },
    };
  }
  return null;
};

export const signInWithEmail = async (
  user: EmailSignInProps
): Promise<AuthUser | null> => {
  return new Promise<AuthUser | null>(async (resolve) => {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);
      const getUser = result.user;
      return resolve(setResponse(getUser));
    } catch (errorSignIn: any) {
      try {
        switch (errorSignIn.code) {
          case "auth/user-not-found":
            const result = await firebase
              .auth()
              .createUserWithEmailAndPassword(user.email, user.password);
            const getUser = result.user;
            return resolve(setResponse(getUser));
          default:
            throw { code: errorSignIn.code };
        }
      } catch (error: any) {
        return resolve({
          token: "",
          user: { uid: "" },
          error: mapErrorCodeToMessage(error.code),
        });
      }
    }
  });
};
export const signInWithGoogle = async (): Promise<AuthUser | null> => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const getUser = result.user;
    return setResponse(getUser);
  } catch (error: any) {
    return {
      token: "",
      user: { uid: "" },
      error: mapErrorCodeToMessage(error.code),
    };
  }
};

export const signInWithFacebook = async (): Promise<AuthUser | null> => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const getUser = result.user;
    return setResponse(getUser);
  } catch (error: any) {
    return {
      token: "",
      user: { uid: "" },
      error: mapErrorCodeToMessage(error.code),
    };
  }
};

export const getUserData = async (): Promise<AuthUser | null> => {
  return new Promise<AuthUser | null>((resolve) => {
    firebase.auth().onAuthStateChanged(async (getUser) => {
      resolve(setResponse(getUser));
    });
  });
};

export const signOut = async (): Promise<void> => {
  return firebase.auth().signOut();
};
