const Header = ({children, className}: any) => {
  return (
    <div className={`${className}`}>
      <h1 className="text-2xl font-bold text-center my-7">
        {children}
      </h1>
    </div>
  )
};

export default Header;