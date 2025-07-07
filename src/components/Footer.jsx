// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-white  py-6 text-gray-600">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ayush Ghole. All rights reserved.
        </p>
        <div className="mt-2 sm:mt-0 space-x-4">ayushghole@gmail.com</div>
      </div>
    </footer>
  );
}
