export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-gray-400 text-sm border-t">
      © {new Date().getFullYear()} Epoxy Metrics. All rights reserved.
    </footer>
  );
}