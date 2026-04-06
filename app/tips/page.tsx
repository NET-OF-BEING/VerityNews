import type { Metadata } from "next";
import TipForm from "@/components/TipForm";

export const metadata: Metadata = {
  title: "Tip Line",
  description:
    "Submit an anonymous tip to VerityNews. Help us investigate corporate misconduct, safety failures, and systemic abuse.",
};

export default function TipsPage() {
  return (
    <div className="hex-bg mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
        </span>
        <span className="tag-cyber border-red/20 text-red">Secure Channel</span>
      </div>
      <h1 className="mb-6 font-heading text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-light">
        Submit a Tip
      </h1>
      <p className="mb-4 max-w-xl text-base leading-relaxed text-muted">
        Have information about corporate misconduct, safety failures, or
        systems that put people at risk? We want to hear from you.
      </p>
      <p className="mb-12 text-sm text-dim">
        All submissions are confidential. Contact details are optional — include
        them only if you want us to follow up with you directly.
      </p>

      <TipForm />

      <div className="mt-12 border-t border-border pt-8">
        <h3 className="mb-3 font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Privacy & Security
        </h3>
        <div className="space-y-3 text-sm leading-relaxed text-muted">
          <p>
            We do not log IP addresses or track submissions. Your identity will
            never be revealed without your explicit consent.
          </p>
          <p>
            For maximum security, consider using a VPN and a temporary email
            address. We recommend{" "}
            <a
              href="https://proton.me/mail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline decoration-cyan/30 hover:decoration-cyan"
            >
              ProtonMail
            </a>{" "}
            for encrypted communication.
          </p>
        </div>
      </div>
    </div>
  );
}
