'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NewRecipePage() {
  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center mb-6">
          <Link href="/recipebook">
            <button className="mr-4 px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Recipes
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">New Recipe</h1>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipe Title *
              </label>
              <input
                type="text"
                placeholder="Enter recipe title"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ingredients *
              </label>
              <textarea
                placeholder="Enter ingredients, one per line"
                rows={8}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructions *
              </label>
              <textarea
                placeholder="Enter cooking instructions step by step"
                rows={8}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <Link href="/recipebook">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                Create Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}