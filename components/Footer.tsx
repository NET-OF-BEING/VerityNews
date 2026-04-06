import Link from "next/link";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-dark">
      {/* Newsletter band */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-heading text-lg font-bold text-light">
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

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 font-heading text-lg font-bold tracking-tight">
              <span className="text-light">VERITY</span>
              <span className="text-cyan">NEWS</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              AI-Powered Truth in a Post-Truth World.
            </p>
            {/* System status */}
            <div className="mt-4 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[2px] text-dim">
                Systems Online
              </span>
            </div>
          </div>

          {/* Investigate */}
          <div>
            <h4 className="mb-4 font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
              // Investigate
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted transition-colors hover:text-cyan">Home</Link>
              <Link href="/topics" className="text-sm text-muted transition-colors hover:text-cyan">Topics</Link>
              <Link href="/archive" className="text-sm text-muted transition-colors hover:text-cyan">Archive</Link>
              <Link href="/search" className="text-sm text-muted transition-colors hover:text-cyan">Search</Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
              // About
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted transition-colors hover:text-cyan">Our Mission</Link>
              <Link href="/team" className="text-sm text-muted transition-colors hover:text-cyan">Editorial Board</Link>
              <Link href="/tips" className="text-sm text-muted transition-colors hover:text-cyan">Submit a Tip</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
              // Methodology
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              VerityNews uses AI to assist research and analysis. All articles
              are human-reviewed and sourced from public records, court
              documents, and verified reporting.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-[10px] tracking-wider text-dim">
            &copy; {new Date().getFullYear()} VerityNews. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wider text-dim">
            <span className="text-cyan/40">[ </span>
            Truth, Verified with Intelligence
            <span className="text-cyan/40"> ]</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
