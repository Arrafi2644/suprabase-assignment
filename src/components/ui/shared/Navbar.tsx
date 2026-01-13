'use client';

import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import logo from '../../../../public/assets/super-base-logo.png';
import cart from '../../../../public/assets/cart.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'PROGRAMS & SERVICES', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl sticky top-0 left-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
          href="/"
          className="shrink-0">
           <Image
           src={logo}
           alt='logo'
           height={45}
           width={140}
           />
          </Link>

<div className='flex items-center gap-12'>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium  hover:text-[#070012] transition-colors tracking-wide ${link.name === "PROGRAMS & SERVICES" ? "text-[#070012]" :"text-[#555555]" }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Image 
              src={cart}
              alt='cart'
              height={19}
              width={15}
              />
            </Button>
            <Button 
              className="text-white font-semibold px-6 py-2 rounded-md text-sm tracking-wide bg-linear-to-br from-[#0B23FA] to-[#5D06E9]"
            >
              SIGN IN
            </Button>
          </div>
</div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
                <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Image 
              src={cart}
              alt='cart'
              height={19}
              width={15}
              />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-100">
                <div className="flex flex-col gap-6 mt-8 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button 
                    className="text-white font-semibold w-full py-2 rounded-md text-sm tracking-wide mt-4"
                    style={{ backgroundColor: '#4F46E5' }}
                  >
                    SIGN IN
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}