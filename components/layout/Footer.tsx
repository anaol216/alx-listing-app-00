// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}
