import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-dark">
      {/* Newsletter band */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-1 font-serif text-lg font-bold text-light">
                Get every investigation in your inbox
              </h3>
              <p className="text-sm text-muted">
                No spam. Just original reporting, as it drops.
              </p>
            </div>
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 font-serif text-xl font-bold">
              <span className="text-light">Verity</span>
              <span className="text-blue">News</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              AI-Powered Truth in a Post-Truth World.
            </p>
          </div>

          {/* Investigate */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
              Investigate
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted hover:text-blue">
                Home
              </Link>
              <Link href="/topics" className="text-sm text-muted hover:text-blue">
                Topics
              </Link>
              <Link href="/archive" className="text-sm text-muted hover:text-blue">
                Archive
              </Link>
              <Link href="/search" className="text-sm text-muted hover:text-blue">
                Search
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
              About
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted hover:text-blue">
                Our Mission
              </Link>
              <Link href="/team" className="text-sm text-muted hover:text-blue">
                Editorial Board
              </Link>
              <Link href="/tips" className="text-sm text-muted hover:text-blue">
                Submit a Tip
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
              About This Publication
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              VerityNews uses AI to assist research and analysis. All articles
              are human-reviewed and sourced from public records, court
              documents, and verified reporting.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-[11px] text-dim">
            &copy; {new Date().getFullYear()} VerityNews. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-dim">
            Truth, Verified with Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
