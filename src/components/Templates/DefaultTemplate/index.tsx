export interface IDefaultProviderProps {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: IDefaultProviderProps) => {
  return <>{children}</>;
};

export default DefaultTemplate;
