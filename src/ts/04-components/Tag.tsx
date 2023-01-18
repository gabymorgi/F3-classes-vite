interface TagI {
  children: React.ReactNode;
}

const Tag = ({ children }: TagI) => {
  return <div className="class-4-tag">{children}</div>;
};

export default Tag;
