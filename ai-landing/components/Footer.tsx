export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Airo. Tüm hakları saklıdır.</p>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#" className="hover:underline">Gizlilik</a>
          <a href="#" className="hover:underline">Şartlar</a>
          <a href="#" className="hover:underline">İletişim</a>
        </nav>
      </div>
    </footer>
  );
}