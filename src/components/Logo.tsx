const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="38"
        height="50"
        viewBox="0 0 38 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Mercê Cake"
      >
        {/* Heart on top */}
        <path
          d="M19 10.5C19 10.5 15.5 6 11.5 7.5C8.5 8.8 8 12.5 10 15L19 22L28 15C30 12.5 29.5 8.8 26.5 7.5C22.5 6 19 10.5 19 10.5Z"
          fill="#C9A84C"
        />
        {/* Top tier */}
        <rect x="12" y="22" width="14" height="7" rx="1.5" fill="#C9A84C" opacity="0.95" />
        <line x1="12" y1="25.5" x2="26" y2="25.5" stroke="white" strokeWidth="0.8" opacity="0.5" />
        {/* Middle tier */}
        <rect x="7" y="29" width="24" height="8" rx="1.5" fill="#C9A84C" opacity="0.78" />
        <line x1="7" y1="33" x2="31" y2="33" stroke="white" strokeWidth="0.8" opacity="0.5" />
        {/* Bottom tier */}
        <rect x="2" y="37" width="34" height="10" rx="2" fill="#C9A84C" opacity="0.60" />
        <line x1="2" y1="42" x2="36" y2="42" stroke="white" strokeWidth="0.8" opacity="0.5" />
        {/* Small dots decoração */}
        <circle cx="19" cy="44.5" r="1" fill="white" opacity="0.6" />
        <circle cx="14" cy="44.5" r="1" fill="white" opacity="0.4" />
        <circle cx="24" cy="44.5" r="1" fill="white" opacity="0.4" />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#5C3D2E',
            fontSize: '17px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            lineHeight: 1.1,
          }}
        >
          MERCÊ CAKE
        </span>
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            color: '#F4A7B9',
            fontSize: '10px',
            letterSpacing: '0.1em',
            lineHeight: 1.4,
          }}
        >
          Cakeria Artesansal
        </span>
      </div>
    </div>
  );
};

export default Logo;
