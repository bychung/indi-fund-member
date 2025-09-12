import { Suspense } from 'react';
import FindEmailContent from './FindEmailContent';

export default function FindEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <FindEmailContent />
    </Suspense>
  );
}
