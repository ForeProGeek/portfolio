export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {currentYear} Agboola Joshua. All rights reserved.
        </p>
        <p className="text-zinc-600 text-sm">
          Built with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
