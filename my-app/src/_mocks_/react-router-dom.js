import React from 'react';

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const MemoryRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => <div>{element}</div>;
export const Link = ({ children }) => <a href="#">{children}</a>;

export const useNavigate = () => jest.fn();
export const useParams = () => ({});
export const useLocation = () => ({});
