const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
