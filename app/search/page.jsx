'use client'

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import { Search } from "lucide-react";
import Link from "next/link";
import { searchResults } from "@/constants/searchData";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      
      setTimeout(() => {
        const filtered = query ? searchResults.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        ) : [];
        
        setResults(filtered);
        setLoading(false);
      }, 500);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Search Results" 
          subtitle={`${results.length} results found for "${query}"`} 
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 relative">
                <form action="/search" method="get">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="q"
                    placeholder="Refine your search..."
                    className="w-full py-3 px-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={query}
                  />
                </form>
              </div>
              
              {loading ? (
                <div className="text-center py-10">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="mt-2 text-gray-600">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-8">
                  {results.map(result => (
                    <div key={result.id} className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link href={result.url} className="text-xl font-semibold text-blue-900 hover:text-blue-700">
                            {result.title}
                          </Link>
                          <p className="text-gray-600 mt-2">{result.description}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Link href={result.url} className="text-sm text-blue-600 hover:underline">
                          View more
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    We couldn&apos;t find any matches for &quot;{query}&quot;. Please try another search term.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}

