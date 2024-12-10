// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext'; // assuming AuthContext is in the 'context' folder

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { authToken } = useContext(AuthContext);

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authToken ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
