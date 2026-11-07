import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus("");
  };

  const submit = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message
    ].join("\n");
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("Your default email app should open with this message ready to send.");
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-glow" />
      <div className="container">
        <SectionHeading
          eyebrow="LET'S CONNECT"
          title={<>Have an opportunity in mind?<br /><span className="gradient-text">Let's start a conversation.</span></>}
          description="I'm interested in connecting with teams and people working on meaningful software."
        />

        <div className="contact-layout">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-detail-intro">
              <span className="contact-mini-label">CONTACT INFORMATION</span>
              <h3>Let's make<br /><span className="gradient-text">something useful.</span></h3>
              <p>Reach out by email or phone, or connect with me on a professional network.</p>
            </div>
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span className="contact-method-icon"><Mail size={18} /></span>
              <span><small>EMAIL ME</small><strong>{profile.email}</strong></span>
              <ArrowUpRight size={16} />
            </a>
            <a className="contact-method" href={`tel:+91${profile.phone}`}>
              <span className="contact-method-icon"><Phone size={18} /></span>
              <span><small>CALL ME</small><strong>{profile.phone}</strong></span>
              <ArrowUpRight size={16} />
            </a>
            <div className="contact-method contact-method-static">
              <span className="contact-method-icon"><MapPin size={18} /></span>
              <span><small>LOCATION</small><strong>{profile.location}</strong></span>
            </div>
            <div className="contact-social-row">
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <span>CONNECT WITH ME</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-panel"
            onSubmit={submit}
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-heading"><div><span className="contact-mini-label">SEND A MESSAGE</span><h3>Write to me<span>.</span></h3></div><span className="form-icon"><Send size={18} /></span></div>
            <div className="form-row">
              <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Enter your name" required /></label>
              <label>Your email<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
            </div>
            <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" required /></label>
            <label>Message<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell me a little about your message..." required /></label>
            <button className="button button-primary form-submit" type="submit">Send Message <ArrowUpRight size={16} /></button>
            {status && <p className="form-status" role="status">{status}</p>}
            <p className="form-note">This form opens your default email application. No message is stored on a server.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
