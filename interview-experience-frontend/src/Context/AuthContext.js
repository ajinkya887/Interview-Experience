// import React, { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

//   useEffect(() => {
//     if (authToken) {
//       localStorage.setItem('token', authToken);
//     } else {
//       localStorage.removeItem('token');
//     }
//   }, [authToken]);

//   return (
//     <AuthContext.Provider value={{ authToken, setAuthToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthProvider, AuthContext };
