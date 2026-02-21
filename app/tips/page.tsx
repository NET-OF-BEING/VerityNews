import type { Metadata } from "next";
import TipForm from "@/components/TipForm";

export const metadata: Metadata = {
  title: "Tip Line",
  description:
    "Submit an anonymous tip to VerityNews. Help us investigate corporate misconduct, safety failures, and systemic abuse.",
};

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        Tip Line
      </div>
      <h1 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
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

      {/* Privacy notice */}
      <div className="mt-12 border-t border-border pt-8">
        <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Privacy & Security
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
              className="text-blue underline decoration-blue/30 hover:decoration-blue"
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
