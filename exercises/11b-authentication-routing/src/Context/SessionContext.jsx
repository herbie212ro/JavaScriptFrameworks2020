import React, {useState, createContext} from React;
import { getSessionCookie, setSessionCookie } from "../utils/Cookies.util";

export const CookieContext = createContext(); /* creating CookieContext */

export const CookieProvider = ({children}) => {

const [uuid, setUUID] = useState(getSessionCookie());

const set = newUUID => {

  setSessionCookie(newUUID);

    setUUID(newUUID);


};

return (
    <CookieContext.Provider value={[uuid, set]}>
      {children}
    </CookieContext.Provider>
  );
  };