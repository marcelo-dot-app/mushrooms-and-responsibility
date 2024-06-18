const Paragraph = ({ children, className }: any) => {
  return (
    <div className={`my-7 ${className}`}>
      <p className={`text-jet text-md leading-7 md:text-lg md:leading-8`}>
        {children}
      </p>
    </div>
  )
};

export default Paragraph;