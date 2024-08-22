const CustomSpinner = ({addClass}) => {
  return (
    <div className="spinner-wave">
      {Array.from({ length: 4 }).map(() => (
        <div className={`spinner-wave-dot ${addClass}`} />
      ))}
    </div>
  );
};

export default CustomSpinner;
