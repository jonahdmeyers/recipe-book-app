'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

function getSessionId(): string {
  if (typeof window === 'undefined') {
    return 'server-session';
  }
  
  let sessionId = localStorage.getItem('recipebook-session-id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('recipebook-session-id', sessionId);
  }
  return sessionId;
}

export default function RecipeBookPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Recipe Book</h1>
            <p className="text-gray-600 mt-1">0 recipes</p>
          </div>
          
          <Link href="/recipebook/new">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              New Recipe
            </button>
          </Link>
        </div>

        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No recipes yet
          </h3>
          <p className="text-gray-600 mb-6">
            Start building your recipe collection by adding your first recipe.
          </p>
          <Link href="/recipebook/new">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}