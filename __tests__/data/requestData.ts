export const requestMockData = {
  auth: {
    credentials: {
      id: '123',
      user: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      jwt: 'token',
    },
    isAuthenticated: true, // Required property
    isAuthorized: true, // Optional but useful
    artifacts: {}, // Required property
    error: new Error(), // Required property
    strategy: 'jwt', // Optional but useful
    mode: 'required', // Optional
  },
};
