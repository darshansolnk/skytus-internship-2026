const ReusableButton = ({ text, className, onClick }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ReusableButton;