const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full p-32 dark:bg-dark ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
