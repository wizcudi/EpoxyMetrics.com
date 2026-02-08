import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full rounded-lg p-8 text-center">
        <div className="mb-6">
          {/* Green Checkmark Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full">
            <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Submission Received!</h1>
        <p className="mb-8">
          Thanks for reaching out. We have received your details and will be in touch shortly to discuss your marketing strategy.
        </p>

        <Link
          href="/"
          className="inline-block w-full font-bold py-3 px-4"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}