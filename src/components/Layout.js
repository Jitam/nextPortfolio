const Layout = ({ children, className = "" }) => {
  return <div className={`w-full h-full p-32 ${className}`}>{children}</div>;
};

export default Layout;
