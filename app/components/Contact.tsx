"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Phone, Linkedin, CheckCircle2, Loader2 } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xojjajdr", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setIsSubmitting(false);
        alert("Ada masalah saat mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Terjadi kesalahan koneksi.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden text-white scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">Ready to Elevate <br/> Your Team?</h2>
              <div className="text-slate-400 text-lg leading-relaxed space-y-4">
                <p>Whether you need a <strong>Strategic HR Partner</strong> for the long run, or an expert <strong>Consultant</strong> for specific recruitment & assessment projects.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Full-time</span>
                  <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Freelance</span>
                  <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Project-based</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "akbarwah.work@gmail.com", href: "mailto:akbarwah.work@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akbarwap", href: "https://www.linkedin.com/in/akbarwap" },
                { icon: Phone, label: "WhatsApp", value: "+62 857-2466-3707", href: "https://wa.me/6285724663707" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors border border-slate-700">
                        <Icon className="text-teal-400 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-teal-400 transition-colors">{item.label}</p><p className="text-white font-medium text-lg">{item.value}</p></div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl text-slate-900 dark:text-white shadow-2xl dark:border dark:border-slate-800 transition-colors min-h-[450px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center flex flex-col items-center justify-center py-8">
                  <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center mb-6"><CheckCircle2 size={40} /></div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Send Another Message</button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                      <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                      <textarea rows={4} name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-all" required />
                    </div>
<button 
  type="submit" 
  disabled={isSubmitting} 
  className="w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg bg-slate-900 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500 hover:shadow-teal-200 dark:hover:shadow-teal-900 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95"
>
  {isSubmitting ? (
    <>
      <Loader2 className="animate-spin" size={20} />
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">© 2026 Akbarwap. All rights reserved.</div>
      </div>
    </section>
  );
}