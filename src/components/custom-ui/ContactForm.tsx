"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLoader, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
}

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ subject, setSubject ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ honeypot, setHoneypot ] = useState("");
  const [ formState, setFormState ] = useState<FormState>({ status: "idle", message: null });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading", message: null });

    if (!WEB3FORMS_ACCESS_KEY) {
      setFormState({
        status: "error",
        message: "Form submission is currently unavailable. Missing configuration.",
      });
      console.error("Web3Forms Access Key is not defined.");
      return;
    }

    if (!name || !email || !subject || !message) {
      setFormState({ status: "error", message: "Please fill in all required fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormState({ status: "error", message: "Please enter a valid email address." });
      return;
    }
    if (honeypot) {
      setFormState({ status: "error", message: "Spam detected." });
      return;
    }

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", `New Contact from Portfolio: ${subject}`);
    formData.append("message", message);
    formData.append("botcheck", honeypot);
    formData.append("from_name", "My Portfolio Website");
    formData.append("replyto", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState({
          status: "success", message: data.message || "Your message has been sent successfully!"
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setHoneypot("");
      } else {
        console.error("Web3Forms submission error:", data);
        setFormState({
          status: "error",
          message: data.message || "An error occurred. Please try again."
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormState({
        status: "error",
        message: "Could not connect to the server. Please try again later."
      });
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
  };

  const inputBaseClasses =
    "block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base transition-colors duration-200";
  const inputBgFocusClasses =
    "bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500";

  return (
    <motion.form
      onSubmit={ handleSubmit }
      className="space-y-5 sm:space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.2 } }
      variants={ { visible: { transition: { staggerChildren: 0.05 } } } }
    >
      { !WEB3FORMS_ACCESS_KEY && (
        <div className="p-3 rounded-md bg-yellow-500 bg-opacity-20 text-yellow-300 text-sm flex items-center">
          <FiAlertTriangle className="mr-2 h-5 w-5 flex-shrink-0" />
          Form submission configuration is pending. Site admin needs to set up the Access Key.
        </div>
      ) }

      <motion.div variants={ inputVariants } custom={ 0 }>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          className={ `${inputBaseClasses} ${inputBgFocusClasses}` }
          placeholder="Your Name"
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 1 }>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          className={ `${inputBaseClasses} ${inputBgFocusClasses}` }
          placeholder="you@example.com"
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 2 }>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={ subject }
          onChange={ (e) => setSubject(e.target.value) }
          className={ `${inputBaseClasses} ${inputBgFocusClasses}` }
          placeholder="Subject about cooperation opportunities..."
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 3 }>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={ 4 }
          required
          value={ message }
          onChange={ (e) => setMessage(e.target.value) }
          className={ `${inputBaseClasses} ${inputBgFocusClasses}` }
          placeholder="Your detailed message here..."
        ></textarea>
      </motion.div>

      <div className="absolute w-0 h-0 overflow-hidden">
        <label htmlFor="honeypot">Do not fill this if you are human</label>
        <input
          type="text"
          name="honeypot"
          id="honeypot"
          tabIndex={ -1 }
          autoComplete="off"
          value={ honeypot }
          onChange={ (e) => setHoneypot(e.target.value) }
        />
      </div>

      <motion.div variants={ inputVariants } custom={ 4 }>
        <button
          type="submit"
          disabled={ formState.status === "loading" || !WEB3FORMS_ACCESS_KEY }
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white
          bg-gradient-to-r from-green-400 via-teal-500 to-blue-600
          hover:from-green-500 hover:via-teal-600 hover:to-blue-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800
          focus:ring-teal-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300
          group transform hover:scale-[1.02]"
        >
          { formState.status === "loading" && <FiLoader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" /> }
          { formState.status !== "loading" && <FiSend size={ 18 } className="-ml-1 mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> }
          Send Message
        </button>
      </motion.div>

      { formState.message && (
        <motion.div
          initial={ { opacity: 0, y: 10 } }
          animate={ { opacity: 1, y: 0 } }
          className={ `mt-4 p-3 rounded-md text-sm flex items-center shadow ${formState.status === "success" ? "bg-green-500 bg-opacity-25 text-green-300 border border-green-500/50" :
            formState.status === "error" ? "bg-red-500 bg-opacity-25 text-red-300 border border-red-500/50" : ""
            }` }
        >
          { formState.status === "success" && <FiCheckCircle className="mr-2 h-5 w-5 flex-shrink-0" /> }
          { formState.status === "error" && <FiAlertTriangle className="mr-2 h-5 w-5 flex-shrink-0" /> }
          { formState.message }
        </motion.div>
      ) }
    </motion.form>
  );
}
