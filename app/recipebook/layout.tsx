import { ReactNode } from 'react';
import { RecipeBookSidebar } from '@/components/RecipeBookSidebar';

export default function RecipeBookLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <RecipeBookSidebar />
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}