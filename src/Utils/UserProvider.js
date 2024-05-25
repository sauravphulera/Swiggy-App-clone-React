import React, { useState } from 'react';
import UserContext from './userContext';

export const UserProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState('admin');

	return (
		<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
			{children}
		</UserContext.Provider>
	);
};