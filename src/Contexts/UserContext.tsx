import { createContext } from 'react';
import { useState } from 'react';

const UserContext = createContext<any>(0);

const UserStorage = ({ children }: any) => {
  const [userData, setUserData] = useState<Storage>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : null
  );
  const [config, setConfig] = useState(
    localStorage.getItem('user') ? { headers: { 'Authorization': `Bearer ${userData?.token}` } } : null
  );

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        config,
        setConfig
      }}>
      {children}
    </UserContext.Provider>
  );
};
  
export { UserContext, UserStorage };
