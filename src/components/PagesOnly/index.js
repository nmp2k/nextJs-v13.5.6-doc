const PagesOnly = ({ children }) => {
  return (
    <>
      <div className="pages-only sec">
        <h5 className="tooltip">pages routing</h5>
        {children}
        <hr />
      </div>
    </>
  );
};

export default PagesOnly;
