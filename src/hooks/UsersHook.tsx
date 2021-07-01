import { useContext } from 'react';
import { UsersContext, UsersContextData } from '../context/UsersContext';

export function useUsersContext(): UsersContextData {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error(
      'useUsersContext must be used within a UsersContextProvider.',
    );
  }

  const { users, isUserLoading, handleGetUser, handleRegisterUsers } = context;

  return {
    users,
    isUserLoading,
    handleGetUser,
    handleRegisterUsers,
  };
}
