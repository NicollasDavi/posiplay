// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#F99F1B] shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/student/home" className="text-2xl font-bold text-white">Posiplay</Link>
        <div className="space-x-6">
          <Link href="/student/home" className="text-white hover:text-gray-800">Home</Link>
          <Link href="/student/courses" className="text-white hover:text-gray-800">Aulas</Link>
          <Link href="/student/materials" className="text-white hover:text-gray-800">Materiais</Link>
          <Link href="/student/writing" className="text-white hover:text-gray-800">Redações</Link>
          <Link href="/student/simulations" className="text-white hover:text-gray-800">Simulados</Link>
          <Link href="/student/questions" className="text-white hover:text-gray-800">Questões</Link>
        </div>
      </div>
    </nav>
  );
}
