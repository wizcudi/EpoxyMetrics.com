import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          {/* Green Checkmark Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h1>
        <p className="text-gray-600 mb-8">
          Thanks for reaching out. We have received your details and will be in touch shortly to discuss your marketing strategy.
        </p>

        <Link 
          href="/" 
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}