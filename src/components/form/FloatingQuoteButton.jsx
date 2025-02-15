const FloatingQuoteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors md:hidden"
    >
      Get a Quote
    </button>
  )
}

export default FloatingQuoteButton
