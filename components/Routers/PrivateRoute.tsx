//@ts-nocheck
import React from 'react';
import { useRouter } from 'next/router';

const privateRoute = (WrappedComponent) => {
  const PrivateRoute = (props) => {
    const router = useRouter();

    // Check if the user is authenticated
    const isAuthenticated = true; // Replace with your authentication logic

    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      router.push('/login'); // Replace '/login' with your login page route
      return null;
    }

    // Render the protected component if authenticated
    return <WrappedComponent {...props} />;
  };

  return PrivateRoute;
};

export default privateRoute;