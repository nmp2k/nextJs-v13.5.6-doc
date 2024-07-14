const AppOnly = ({ children }) => {
  return (
    <>
      <div className="app-only sec">
        <h5 className="tooltip">app routing</h5>
        {children}
        <hr />
      </div>
    </>
  );
};

export default AppOnly;
