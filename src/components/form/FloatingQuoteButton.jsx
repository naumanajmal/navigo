const FloatingQuoteButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button clicked'); // Debug log
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hidden"
    >
      Get a Quote
    </button>
  )
}

export default FloatingQuoteButton
