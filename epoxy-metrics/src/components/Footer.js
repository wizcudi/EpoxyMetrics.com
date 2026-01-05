export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-dark text-base border-t">
      © {new Date().getFullYear()} Epoxy Metrics. All rights reserved.
    </footer>
  );
}