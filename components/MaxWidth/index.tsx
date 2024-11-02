type Props = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidth = ({ children, className = '' }: Props) => {
  return (
    <div className={`max-w-[90rem] my-0 mx-auto h-full ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidth;
