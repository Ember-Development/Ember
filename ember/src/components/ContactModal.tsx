import { X, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
};

export default function ContactModal({
  isOpen,
  onClose,
  selectedService,
}: ContactModalProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      // Reset status when modal opens
      setSubmitStatus("idle");
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    setSubmitStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gunnarsmith3@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            phone: formData.get("phone"),
            service: formData.get("service") || selectedService,
            budget: formData.get("budget"),
            timeline: formData.get("timeline"),
            message: formData.get("message"),
            _subject: `New Inquiry: ${formData.get("service") || selectedService || "General"}`,
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        // Auto-close after 3 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-10 my-8 w-full max-w-lg rounded-3xl border border-black/[0.04] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="mb-3 h-0.5 w-12 rounded-full bg-[var(--color-primary)]" />
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Let's build something great
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Share your project details and we'll get back to you with a tailored
            proposal within 24-48 hours.
          </p>
        </div>

        {/* Status Message */}
        {submitStatus === "success" && (
          <div className="mb-4 rounded-2xl border border-green-200 bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-green-600" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-green-900">
                  Message sent successfully!
                </h3>
                <p className="mt-1 text-sm text-green-700">
                  Thanks for reaching out! We'll review your project details and
                  get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 shrink-0 text-red-600" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-900">
                  Something went wrong
                </h3>
                <p className="mt-1 text-sm text-red-700">
                  Please try again or email us directly. We apologize for the
                  inconvenience.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Name *
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Email *
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Company / Organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {selectedService && (
            <div>
              <label
                htmlFor="service"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Service Interested In
              </label>
              <input
                id="service"
                name="service"
                type="text"
                value={selectedService}
                readOnly
                className="w-full rounded-2xl border border-black/10 bg-neutral-50 px-3 py-2 text-sm text-neutral-600"
              />
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="budget"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="">Select budget</option>
                <option value="under-5k">Under $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k-plus">$100k+</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2-months">1-2 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-plus-months">6+ months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-left text-xs font-medium tracking-[0.16em] text-neutral-500 uppercase"
            >
              Project Details *
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 transition-all outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
              placeholder="Tell us about your project goals, features needed, target audience, etc..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                submitStatus === "submitting" || submitStatus === "success"
              }
              className="flex-1 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-black shadow-md shadow-[rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitStatus === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : submitStatus === "success" ? (
                "Sent!"
              ) : (
                "Send message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
