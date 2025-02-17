const NavLogo = () => {
  return (
    <div className="flex items-center py-2">
      <a href="/" className="h-12 md:h-20 transition-all duration-200">
        <img 
          src="/Navigo_logo.png" 
          alt="NaviGo Financial Advisory" 
          className="h-full w-auto object-contain"
        />
      </a>
    </div>
  )
}

export default NavLogo
