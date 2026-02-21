import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-dark">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 font-serif text-xl font-bold">
              <span className="text-light">Verity</span>
              <span className="text-blue">News</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              AI-Powered Truth in a Post-Truth World. We follow the money,
              expose the systems, and hold power accountable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-muted hover:text-blue">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted hover:text-blue"
              >
                About
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
              About This Publication
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              VerityNews uses artificial intelligence to assist research,
              fact-checking, and analysis. All articles are human-reviewed and
              sourced from public records, court documents, and verified
              reporting.
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
