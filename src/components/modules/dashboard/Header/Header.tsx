import React from 'react';
import { IMAGES } from 'src/constants/images';
import { Button } from 'src/components/global/Button/Button';
import { useAuthContext } from 'src/context/AuthContext';

export function Header() {
  const { logout } = useAuthContext();
  return (
    <header className="flex justify-between items-center px-[112px] py-5 bg-black text-xs md:text-sm lg:text-base text-white inter whitespace-nowrap">
      <div className="flex items-center ">
        <img src={IMAGES.LOGO} alt="Logo" />
      </div>
      <Button
        className="w-max bg-transparent border-white border rounded-full px-4 py-2 hover:bg-headerButtonHover hover:border-headerButtonHover"
        onClick={logout}
        label="Log out"
      />
    </header>
  );
}

export default Header;
