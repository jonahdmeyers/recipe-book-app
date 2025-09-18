'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search, Folder, Settings, Home } from 'lucide-react';

export function RecipeBookSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <Link href="/recipebook" className="text-xl font-bold text-gray-900">
          Recipe Book
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-10 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
        </form>

        <div className="space-y-2">
          <Link
            href="/recipebook"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <Home className="h-4 w-4" />
            <span>All Recipes</span>
          </Link>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Your Recipes
          </h3>
          
          <div className="space-y-1">
            <Link href="/recipebook/new">
              <button className="w-full justify-start text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}