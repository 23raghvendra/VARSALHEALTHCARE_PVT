'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Search, ArrowRight } from "lucide-react";
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
  const searchInputRef = useRef(null);
  const isMobile = useMobile();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/investors", label: "Investors" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ];

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
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src={logo} 
            alt="Varsal Healthcare Logo" 
            width={120}
            height={56}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => setShowSearch(true)} 
            className="text-gray-600 hover:text-varsal-darkblue transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>

        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setShowSearch(true)} 
            className="text-gray-600 hover:text-varsal-darkblue mr-4 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Button 
            variant="ghost" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
            <div className="relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full py-4 px-12 text-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button 
                  type="button" 
                  onClick={() => setShowSearch(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </form>
            </div>
            
            {searchQuery && (
              <div className="border-t">
                {searchSuggestions.length > 0 ? (
                  <div>
                    <div className="p-2">
                      <p className="text-sm text-gray-500 px-2 py-1">Suggested Results</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {searchSuggestions.map(suggestion => (
                        <div 
                          key={suggestion.id}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleSuggestionClick(suggestion.url)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-900">{suggestion.title}</h3>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-1">{suggestion.description}</p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                              {suggestion.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 flex justify-between items-center bg-gray-50">
                      <p className="text-sm text-gray-500">Press Enter to see all results</p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-varsal-darkblue hover:text-varsal-blue flex items-center"
                        onClick={handleSearchSubmit}
                      >
                        View all results <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
                    <p className="text-xs text-gray-400 mt-1">Try with a different search term</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
