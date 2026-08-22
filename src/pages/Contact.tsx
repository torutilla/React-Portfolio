import { SocialLinks } from "../utils/links.ts";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import WipeAnimator from "../components/animator/WipeAnimator.tsx";
import RevealAnimator from "../components/animator/RevealAnimator.tsx";

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-background text-text flex items-center px-6 py-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary mb-4">
            Contact
          </p>

          <WipeAnimator direction="bottom">
            <h1 className="font-title text-title leading-[0.95] uppercase max-w-5xl">
              Let's build
              <br />
              something
              <span className="text-primary">.</span>
            </h1>
          </WipeAnimator>

          <RevealAnimator delay={0.5}>
            <p className="font-body text-lg md:text-xl text-secondary-text max-w-2xl mt-8">
              Have a project, opportunity, or just want to talk? Feel free to
              reach out. I'd love to hear from you.
            </p>
          </RevealAnimator>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-placeholder-text mb-6">
              Get in touch
            </p>

            <RevealAnimator delay={0.1}>
              <a
                href="mailto:christianjohntrrs@gmail.com"
                className="group inline-block"
              >
                <span className="font-subtitle text-2xl md:text-3xl text-text transition-colors duration-300 group-hover:text-primary">
                  christianjohntrrs@gmail.com
                </span>

                <span className="block h-px w-full bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </RevealAnimator>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mt-12">
              {[
                { href: SocialLinks.gitHub, label: "GitHub" },
                { href: SocialLinks.linkedIn, label: "LinkedIn" },
              ].map(({ href, label }, index) => (
                <RevealAnimator key={href} delay={0.15 + index * 0.1}>
                  <a
                    href={href}
                    className="border border-border/30 px-5 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-button-text hover:border-primary"
                  >
                    {label} ↗
                  </a>
                </RevealAnimator>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            <RevealAnimator delay={0.1}>
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-placeholder-text mb-3"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-transparent border-b border-border/30 py-3 font-body text-text placeholder:text-placeholder-text focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
            </RevealAnimator>

            <RevealAnimator delay={0.2}>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-placeholder-text mb-3"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-transparent border-b border-border/30 py-3 font-body text-text placeholder:text-placeholder-text focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>
            </RevealAnimator>

            <RevealAnimator delay={0.3}>
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-widest text-placeholder-text mb-3"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-transparent border-b border-border/30 py-3 font-body text-text placeholder:text-placeholder-text focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
            </RevealAnimator>

            <RevealAnimator delay={0.4}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-4 bg-button-background text-button-text px-7 py-4 font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:bg-background-highlight disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}

                {status !== "sending" && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>
            </RevealAnimator>

            {status === "success" && (
              <p className="font-mono text-sm text-primary">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="font-mono text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
