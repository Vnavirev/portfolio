import React, { useState } from 'react';
import { RetroStar, ClapperboardIcon } from './RetroGraphics';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or company.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message or inquiry details.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters so your inquiry is clear.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save state for honest user review & direct copy
    setSubmittedMessage({ ...formData });
  };

  const handleCopy = () => {
    if (!submittedMessage) return;
    const textToCopy = `To: Vaishnavi Revadkar\nFrom: ${submittedMessage.name} <${submittedMessage.email}>\nSubject: ${submittedMessage.subject}\n\n${submittedMessage.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleReset = () => {
    setSubmittedMessage(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#FFF8E8] border-b-4 border-[#171719] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono-code text-xs font-bold bg-[#FF300F] text-[#FFF0C7] px-3.5 py-1.5 border-2 border-[#171719] shadow-retro-sm uppercase tracking-widest">
            05 / YOUR CUE
          </span>
          <RetroStar size={18} color="#007F86" />
          <span className="font-mono-code text-xs font-bold text-[#007F86] uppercase tracking-wider hidden sm:inline">
            INQUIRIES &bull; AUDITIONS &bull; COLLABORATIONS
          </span>
        </div>

        {/* Main Dramatic Vermilion Panel */}
        <div className="bg-[#FF300F] border-4 border-[#171719] p-6 sm:p-10 lg:p-12 shadow-retro-xl text-[#FFF8E8] relative overflow-hidden">
          
          {/* Halftone texture overlay */}
          <div className="halftone-dots absolute inset-0 opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="font-mono-code text-xs font-black uppercase tracking-widest text-[#FFB879] bg-[#171719] px-3 py-1 border border-[#FFF8E8] inline-block mb-3">
                  SCENE 05 &bull; THE CALL SHEET
                </span>

                <h2 className="font-display text-3xl sm:text-5xl text-[#FFF8E8] leading-tight tracking-tight uppercase text-shadow-ink-md">
                  Every good story starts with a conversation.
                </h2>

                <p className="font-body text-base sm:text-lg text-[#FFF0C7] mt-4 leading-relaxed font-medium">
                  Have an idea, a creative opportunity, or something interesting to build? Let&apos;s connect and see what the next scene looks like.
                </p>
              </div>

              {/* Editorial Callout Box */}
              <div className="bg-[#FFF0C7] text-[#171719] border-3 border-[#171719] p-5 shadow-retro-sm">
                <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#171719]">
                  <ClapperboardIcon width={24} height={20} />
                  <span className="font-display text-xs text-[#007F86] uppercase">
                    OPEN FOR DIALOGUE
                  </span>
                </div>
                <ul className="text-xs font-mono-code space-y-1.5 font-bold text-[#171719]">
                  <li>&bull; Theatre, Monologue &amp; On-Camera Projects</li>
                  <li>&bull; Creative Coding &amp; Foundational Software Talks</li>
                  <li>&bull; Collaborative Experiments at the Art-Tech Intersection</li>
                </ul>
              </div>

              {/* Slogan */}
              <div className="pt-2">
                <span className="font-display text-2xl sm:text-3xl text-[#FFB879] tracking-wider text-shadow-ink-sm uppercase">
                  THE END? NOT EVEN CLOSE.
                </span>
              </div>
            </div>

            {/* Right Column: Semantic, Functional Contact Form */}
            <div className="lg:col-span-7 bg-[#FFF8E8] border-3 border-[#171719] p-6 sm:p-8 text-[#171719] shadow-retro-lg">
              
              {submittedMessage ? (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="p-4 bg-[#FFB879] border-2 border-[#171719] text-[#171719]">
                    <span className="font-display text-lg block mb-1">
                      MESSAGE STAGED SUCCESSFULLY!
                    </span>
                    <p className="font-body text-sm leading-relaxed">
                      Your message has been verified and formatted for delivery. (Note: To ensure authentic communication without unverified backend dispatchers, you can copy your complete dispatch below to send via your favorite email client).
                    </p>
                  </div>

                  {/* Formatted Message Preview */}
                  <div className="bg-[#FFF0C7] border-2 border-[#171719] p-4 font-mono-code text-xs space-y-2">
                    <div><strong>From:</strong> {submittedMessage.name} &lt;{submittedMessage.email}&gt;</div>
                    <div><strong>Subject:</strong> {submittedMessage.subject}</div>
                    <div className="border-t border-[#171719] pt-2 whitespace-pre-wrap">
                      <strong>Message:</strong><br />
                      {submittedMessage.message}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-5 py-2.5 bg-[#007F86] text-[#FFF8E8] font-display text-sm border-2 border-[#171719] shadow-retro-sm btn-tactile cursor-pointer"
                    >
                      {copied ? 'COPIED TO CLIPBOARD!' : 'COPY DISPATCH TEXT'}
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-[#FFF0C7] text-[#171719] font-display text-sm border-2 border-[#171719] shadow-retro-sm btn-tactile cursor-pointer"
                    >
                      DRAFT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block font-display text-xs sm:text-sm uppercase tracking-wider text-[#171719] mb-1">
                      YOUR NAME / CALL SIGN <span className="text-[#FF300F]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Director Jane Doe"
                      className="w-full bg-[#FFF0C7] border-2 border-[#171719] px-3.5 py-2.5 text-sm font-body text-[#171719] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF300F] shadow-inner"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="text-xs font-mono-code font-bold text-[#FF300F] mt-1" role="alert">
                        &uarr; {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block font-display text-xs sm:text-sm uppercase tracking-wider text-[#171719] mb-1">
                      YOUR EMAIL ADDRESS <span className="text-[#FF300F]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@cinema.org"
                      className="w-full bg-[#FFF0C7] border-2 border-[#171719] px-3.5 py-2.5 text-sm font-body text-[#171719] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF300F] shadow-inner"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-xs font-mono-code font-bold text-[#FF300F] mt-1" role="alert">
                        &uarr; {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-subject" className="block font-display text-xs sm:text-sm uppercase tracking-wider text-[#171719] mb-1">
                      SUBJECT / PRODUCTION TYPE <span className="text-[#FF300F]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Role in Upcoming Short Film / Tech Collaboration"
                      className="w-full bg-[#FFF0C7] border-2 border-[#171719] px-3.5 py-2.5 text-sm font-body text-[#171719] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF300F] shadow-inner"
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p className="text-xs font-mono-code font-bold text-[#FF300F] mt-1" role="alert">
                        &uarr; {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block font-display text-xs sm:text-sm uppercase tracking-wider text-[#171719] mb-1">
                      MESSAGE / SCRIPT TREATMENT <span className="text-[#FF300F]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, dates, or concepts..."
                      className="w-full bg-[#FFF0C7] border-2 border-[#171719] px-3.5 py-2.5 text-sm font-body text-[#171719] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF300F] shadow-inner resize-y"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs font-mono-code font-bold text-[#FF300F] mt-1" role="alert">
                        &uarr; {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button with physical tactile press */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF300F] text-[#FFF0C7] font-display text-base tracking-wide border-3 border-[#171719] shadow-retro-md btn-tactile hover:bg-[#FF741F] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT DISPATCH</span>
                    <span className="text-lg">&rarr;</span>
                  </button>

                  <p className="text-[11px] font-mono-code text-stone-600 text-center pt-1">
                    Direct validation enabled &bull; No spam bots allowed
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
