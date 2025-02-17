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
      className="fixed bottom-6 right-6 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors md:hidden"
    >
      Get a Quote
    </button>
  )
}

export default FloatingQuoteButton
