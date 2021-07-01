import React, { createContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersContextData {
  users: Array<UserData>;
  isUserLoading: boolean;
  handleGetUser: (UserId: number) => UserData | undefined;
  handleRegisterUsers: (userList: Array<UserData>) => void;
}

export const UsersContext = createContext({} as UsersContextData);

export const UsersContextProvider: React.FC = ({ children, ...props }) => {
  const [users, setUsers] = useState<Array<UserData>>([]);
  const [isUserLoading, setUserLoading] = useState(false);

  const handleRegisterUsers = useCallback((userList: Array<UserData>) => {
    setUsers(userList);
  }, []);

  function handleGetUser(UserId: number) {
    return users.find(user => user.id === UserId);
  }

  useEffect(() => {
    const loadData = async () => {
      setUserLoading(true);
      const usersFromApi = await axios
        .get<Array<UserData>>('https://jsonplaceholder.typicode.com/users')
        .then(usersRes => usersRes.data);

      setUsers(usersFromApi);
      setUserLoading(false);
    };

    loadData();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, isUserLoading, handleGetUser, handleRegisterUsers }}
      {...props}
    >
      {children}
    </UsersContext.Provider>
  );
};
