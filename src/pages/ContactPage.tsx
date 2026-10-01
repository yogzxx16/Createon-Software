import React, { useState } from 'react';
import { SITE_METADATA } from '../data/siteContent';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    discipline: 'web_product',
    scope: '',
    timeline: '2_4_months',
  });

  const [copiedToast, setCopiedToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.scope.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and What you are building).');
      return;
    }

    setErrorMessage('');
    setSubmitting(true);

    // Simulate clean dispatch without exposing keys
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO & CONTACT FORM (Matching Stitch UI Image 10)
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101c2e] border border-white/[0.08] rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-ping" />
                <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                  HAVE AN IDEA?
                </span>
              </div>

              <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white uppercase leading-[1.02]">
                LET’S BUILD<br />
                <span className="text-[#ff6b00]">SOMETHING.</span>
              </h1>

              <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-md pt-2 leading-relaxed">
                Have an idea, a business or a product that deserves a better digital experience? Tell us what you're thinking.
              </p>
            </div>

            {/* Coordinates and Protocol Cards */}
            <div className="space-y-5 pt-4">
              <div className="bg-[#101c2e] border border-white/[0.08] p-6 rounded-xl space-y-5 shadow-sm">
                {/* Coordinates */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ff6b00] text-xl mt-0.5">location_on</span>
                  <div className="space-y-0.5">
                    <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] block">
                      Studio Coordinates
                    </span>
                    <span className="font-['DM_Sans'] text-sm sm:text-base text-white font-medium">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* Email with copy */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ff6b00] text-xl mt-0.5">mail</span>
                  <div className="space-y-0.5 w-full">
                    <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] block">
                      Direct Transmission
                    </span>
                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${SITE_METADATA.email}`}
                        className="font-['Space_Grotesk'] text-lg sm:text-xl text-white hover:text-[#ff6b00] transition-colors flex items-center gap-1 group"
                      >
                        {SITE_METADATA.email}
                        <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">
                          arrow_outward
                        </span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy Address"
                        className="text-[#94a3b8] hover:text-white transition-colors p-1"
                      >
                        <span className="material-symbols-outlined text-base">content_copy</span>
                      </button>
                    </div>
                    {copiedToast && (
                      <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#fabd00] tracking-widest uppercase transition-opacity duration-300 block pt-1">
                        Copied to clipboard
                      </span>
                    )}
                  </div>
                </div>

                {/* Operating Rhythms */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#fabd00] text-xl mt-0.5">schedule</span>
                  <div className="space-y-0.5">
                    <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] block">
                      Operating Rhythms
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-white">
                      {SITE_METADATA.operatingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Protocol Note */}
              <div className="bg-[#1f2a3d]/60 border border-white/[0.08] p-4 rounded-lg space-y-1">
                <div className="flex items-center gap-1.5 text-[#ff6b00]">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-semibold">
                    DIRECT DIALOGUE PROTOCOL
                  </span>
                </div>
                <p className="font-['DM_Sans'] text-xs text-[#94a3b8] leading-relaxed">
                  We respond directly within 24 hours. No sales intermediaries or automated bot loops — you talk directly with the team who designs and builds.
                </p>
              </div>

              {/* Capacity Slot */}
              <div className="flex items-center justify-between py-2.5 px-4 bg-[#142032] border border-white/[0.06] rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fabd00] animate-pulse" />
                  <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-white">
                    Q2 STUDIO BANDWIDTH
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] font-medium uppercase tracking-wider">
                  2 Slots Remaining
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Form Intake */}
          <div className="lg:col-span-7">
            <div className="bg-[#101c2e] border border-white/[0.08] p-6 sm:p-10 lg:p-12 rounded-xl shadow-2xl relative overflow-hidden">
              {/* Header Tab */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] uppercase tracking-widest font-bold">
                    [ 01 ]
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white uppercase tracking-wider font-semibold">
                    DISCOVERY ENQUIRY INTAKE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2a3549]" />
                  <span className="w-2 h-2 rounded-full bg-[#2a3549]" />
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
                </div>
              </div>

              {submitted ? (
                <div className="bg-[#071325] border border-emerald-500/30 p-8 rounded-xl text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
                    Transmission Received
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                    Our team has logged your dispatch. An architect will review your project parameters and reply directly to <span className="text-white font-medium">{formData.email}</span> within 24 operational hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        discipline: 'web_product',
                        scope: '',
                        timeline: '2_4_months',
                      });
                    }}
                    className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#ff6b00] hover:underline pt-2 font-bold"
                  >
                    SEND ANOTHER INQUIRY ↵
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 font-['DM_Sans'] text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="client-name"
                        className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block"
                      >
                        NAME <span className="text-[#ff6b00]">*</span>
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#071325] text-white border border-white/[0.1] focus:border-[#ff6b00] px-4 py-3 rounded text-sm font-['DM_Sans'] focus:outline-none transition-all placeholder:text-[#64748b]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="client-email"
                        className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block"
                      >
                        EMAIL <span className="text-[#ff6b00]">*</span>
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#071325] text-white border border-white/[0.1] focus:border-[#ff6b00] px-4 py-3 rounded text-sm font-['DM_Sans'] focus:outline-none transition-all placeholder:text-[#64748b]"
                      />
                    </div>
                  </div>

                  {/* Company / Project */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="client-org"
                      className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block"
                    >
                      COMPANY / PROJECT
                    </label>
                    <input
                      id="client-org"
                      type="text"
                      placeholder="Your company or project name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#071325] text-white border border-white/[0.1] focus:border-[#ff6b00] px-4 py-3 rounded text-sm font-['DM_Sans'] focus:outline-none transition-all placeholder:text-[#64748b]"
                    />
                  </div>

                  {/* Core Capability Required (Matching Stitch UI Image 10) */}
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block">
                      CORE CAPABILITY REQUIRED
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { key: 'web_product', label: 'Web App / SaaS' },
                        { key: 'mobile', label: 'Mobile Native' },
                        { key: 'brand_experience', label: 'Editorial Site' },
                        { key: 'ecommerce', label: 'E-Commerce' },
                      ].map((discipline) => (
                        <button
                          key={discipline.key}
                          type="button"
                          onClick={() => setFormData({ ...formData, discipline: discipline.key })}
                          className={`p-2.5 rounded text-center font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider transition-all duration-150 border ${
                            formData.discipline === discipline.key
                              ? 'bg-[#ff6b00] text-[#081426] border-[#ff6b00] font-bold'
                              : 'bg-[#071325] text-[#94a3b8] hover:text-white border-white/[0.08]'
                          }`}
                        >
                          {discipline.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What are you building? */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="project-scope"
                      className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block"
                    >
                      WHAT ARE YOU BUILDING? <span className="text-[#ff6b00]">*</span>
                    </label>
                    <textarea
                      id="project-scope"
                      rows={4}
                      required
                      placeholder="Tell us about your goals, scope, and timeline..."
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-[#071325] text-white border border-white/[0.1] focus:border-[#ff6b00] p-4 rounded text-sm font-['DM_Sans'] focus:outline-none transition-all placeholder:text-[#64748b] resize-y"
                    />
                  </div>

                  {/* Estimated Timeline */}
                  <div className="space-y-2">
                    <label className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8] block">
                      ESTIMATED TIMELINE
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: '1_2_months', label: '1-2 months' },
                        { key: '2_4_months', label: '2-4 months' },
                        { key: 'flexible', label: 'Flexible' },
                      ].map((time) => (
                        <button
                          key={time.key}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: time.key })}
                          className={`p-2.5 rounded text-center font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider transition-all duration-150 border ${
                            formData.timeline === time.key
                              ? 'bg-[#ff6b00] text-[#081426] border-[#ff6b00] font-bold'
                              : 'bg-[#071325] text-[#94a3b8] hover:text-white border-white/[0.08]'
                          }`}
                        >
                          {time.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 font-['JetBrains_Mono'] text-sm uppercase tracking-widest bg-[#ff6b00] text-[#081426] font-bold py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-200 active:scale-[0.99] shadow-md group disabled:opacity-50"
                    >
                      <span>{submitting ? 'TRANSMITTING DISPATCH...' : 'START A CONVERSATION'}</span>
                      <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1.5">
                        arrow_forward
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-center">
                      <span className="material-symbols-outlined text-xs text-[#fabd00]">lock</span>
                      <p className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] tracking-wide">
                        Tell us a little about your project. We'll take it from there.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM 3 STEPS (Matching Stitch UI Image 10)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 01 */}
          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-bold">
                [ STEP 01 ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
                Architectural Alignment
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              We review functional constraints, tech stack specifications, and user goals before proposing an immutable execution scope.
            </p>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#fabd00] font-medium pt-2 border-t border-white/[0.06]">
              Turnaround: 48h
            </span>
          </div>

          {/* Step 02 */}
          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-bold">
                [ STEP 02 ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
                Engineering Sprint
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              Direct weekly releases straight into staging environments. Zero boilerplate layers; purely bespoke engineering.
            </p>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#fabd00] font-medium pt-2 border-t border-white/[0.06]">
              Continuous CI/CD
            </span>
          </div>

          {/* Step 03 */}
          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-bold">
                [ STEP 03 ]
              </span>
              <h2 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
                Production Handover
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              Full ownership of source repositories, comprehensive documentation, and architectural telemetry guarantees.
            </p>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#fabd00] font-medium pt-2 border-t border-white/[0.06]">
              Complete Ownership
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
