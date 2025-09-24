// components/layout/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">MyApp</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/users">Users</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
