import axios from 'axios';
import React, { createContext, useState, useCallback, useEffect } from 'react';

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UsersContextData {
  users: Array<UserData>;
  handleGetUser: (UserId: number) => UserData | undefined;
  handleRegisterUsers: (userList: Array<UserData>) => void;
}

export const UsersContext = createContext({} as UsersContextData);

export const UsersContextProvider: React.FC = ({ children, ...props }) => {
  const [users, setUsers] = useState<Array<UserData>>([]);

  const handleRegisterUsers = useCallback((userList: Array<UserData>) => {
    setUsers(userList);
  }, []);

  function handleGetUser(UserId: number) {
    return users.find(user => user.id === UserId);
  }

  useEffect(() => {
    const loadData = async () => {
      const usersFromApi = await axios
        .get<Array<UserData>>('https://jsonplaceholder.typicode.com/users')
        .then(usersRes => usersRes.data);

      setUsers(usersFromApi);
    };

    loadData();
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, handleGetUser, handleRegisterUsers }}
      {...props}
    >
      {children}
    </UsersContext.Provider>
  );
};
