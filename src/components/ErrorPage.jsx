export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}
