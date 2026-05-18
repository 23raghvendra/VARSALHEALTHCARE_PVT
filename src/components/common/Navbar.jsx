'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Search, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { searchResults } from "@/constants/searchData";
import logo from "@/Assets/Logo/LOGO.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const isMobile = useMobile();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = searchResults.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const handleSuggestionClick = (url) => {
    setShowSearch(false);
    setSearchQuery("");
    router.push(url);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white backdrop-blur-sm shadow-sm py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image 
            src={logo} 
            alt="Varsal Healthcare Logo" 
            width={120}
            height={56}
            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {!showSearch ? (
          <>
            <nav className="hidden lg:flex items-center space-x-1 animate-fade-in">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                      isActive 
                        ? 'text-varsal-darkblue bg-varsal-light' 
                        : 'text-gray-700 hover:text-varsal-darkblue hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-varsal-lightblue transform origin-left transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                );
              })}
              <button 
                onClick={() => setShowSearch(true)} 
                className="ml-2 p-2 rounded-lg text-gray-600 hover:text-varsal-darkblue hover:bg-gray-50 transition-all duration-200"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </nav>

            <div className="flex items-center lg:hidden animate-fade-in">
              <button 
                onClick={() => setShowSearch(true)} 
                className="p-2 rounded-lg text-gray-600 hover:text-varsal-darkblue hover:bg-gray-50 mr-2 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Button 
                variant="ghost" 
                size="sm"
                className="p-2 text-black hover:text-varsal-darkblue hover:bg-gray-50 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 ml-4 lg:ml-12 relative flex items-center justify-end h-12 md:h-14 animate-fade-in">
            <div className="relative w-full max-w-md">
              <form onSubmit={handleSearchSubmit} className="relative w-full h-10 md:h-11 flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 focus-within:ring-2 focus-within:ring-varsal-lightblue focus-within:border-varsal-lightblue transition-all shadow-sm">
                <Search size={18} className="text-gray-400 min-w-[18px]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products, categories..."
                  className="w-full bg-transparent border-none focus:outline-none px-3 text-sm md:text-base text-gray-800 placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-gray-400 hover:text-gray-600 p-1 mr-1 transition-colors"
                    aria-label="Clear input"
                  >
                    <X size={14} />
                  </button>
                )}
                <div className="h-5 w-px bg-gray-200 mx-1"></div>
                <button 
                  type="button" 
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                  className="text-gray-500 hover:text-gray-800 p-1.5 ml-1 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </form>

              {searchQuery && (
                <div className="absolute top-[calc(100%+12px)] left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-[70vh] flex flex-col animate-slide-up">
                  {searchSuggestions.length > 0 ? (
                    <div className="flex flex-col overflow-hidden">
                      <div className="px-5 py-3 bg-gray-50 border-b flex-shrink-0">
                        <p className="text-sm font-medium text-gray-600">
                          {searchSuggestions.length} {searchSuggestions.length === 1 ? 'Result' : 'Results'} Found
                        </p>
                      </div>
                      <div className="overflow-y-auto flex-1 p-2">
                        {searchSuggestions.map(suggestion => (
                          <div 
                            key={suggestion.id}
                            className="p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-all duration-200 mb-1 group"
                            onClick={() => handleSuggestionClick(suggestion.url)}
                          >
                            <div className="flex justify-between items-start gap-3">
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-varsal-blue transition-colors text-sm md:text-base">
                                  {suggestion.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 line-clamp-1 mt-0.5">{suggestion.description}</p>
                              </div>
                              <span className="text-[10px] md:text-xs px-2 py-1 bg-varsal-light text-varsal-darkblue rounded-full font-medium whitespace-nowrap border border-blue-100 mt-0.5">
                                {suggestion.category}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center bg-gray-50 border-t flex-shrink-0">
                        <p className="text-xs text-gray-500">Press Enter for all results</p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-8 text-xs text-varsal-darkblue hover:text-varsal-blue hover:bg-varsal-light font-medium"
                          onClick={handleSearchSubmit}
                        >
                          View All <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 md:p-12 text-center flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-gray-700 font-medium text-sm md:text-base mb-1">No results found</p>
                      <p className="text-xs md:text-sm text-gray-500">Try searching with different keywords</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen && !showSearch ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-1 bg-white border-t">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-varsal-darkblue bg-varsal-light' 
                    : 'text-gray-700 hover:text-varsal-darkblue hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
