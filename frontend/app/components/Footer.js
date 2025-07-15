import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/accessibility" className="hover:underline">
            Web Accessibility
          </Link>
          <Link href="/do-not-sell" className="hover:underline">
            Do Not Sell / Share My Personal Information
          </Link>
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Nigeria Wedding Coordinator. All rights
          reserved. Built by{" "}
          <span className="font-semibold animated-gradient bg-clip-text text-transparent">
            👨‍💻 Olumuyiwa Emmanuel Adesanya
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
