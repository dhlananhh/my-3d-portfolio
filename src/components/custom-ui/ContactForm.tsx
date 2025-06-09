"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiSend, FiLoader, FiAlertTriangle } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast"; // Import useToast

interface FormState {
  status: "idle" | "loading" | "success" | "error";
}

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ subject, setSubject ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ honeypot, setHoneypot ] = useState("");
  const [ formStatus, setFormStatus ] = useState<FormState[ "status" ]>("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    if (!WEB3FORMS_ACCESS_KEY) {
      setFormStatus("error");
      toast({
        title: "Configuration Error",
        description: "Form submission is currently unavailable. Missing configuration.",
        variant: "destructive",
      });
      console.error("Web3Forms Access Key is not defined.");
      return;
    }

    if (!name || !email || !subject || !message) {
      setFormStatus("idle");
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus("idle");
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (honeypot) {
      setFormStatus("error");
      toast({
        title: "Spam Detected",
        description: "Your submission was flagged as spam.",
        variant: "destructive",
      });
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
        setFormStatus("success");
        toast({
          title: "Message Sent!",
          description: data.message || "Your message has been sent successfully!",
          variant: "default",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setHoneypot("");
        setFormStatus("idle");
      } else {
        console.error("Web3Forms submission error:", data);
        setFormStatus("error");
        toast({
          title: "Submission Error",
          description: data.message || "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormStatus("error");
      toast({
        title: "Connection Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      if (formStatus !== 'success') {
        setTimeout(() => setFormStatus("idle"), 300);
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
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
        <motion.div
          variants={ inputVariants }
          custom={ 0 }
          className="p-3 rounded-md bg-yellow-500 bg-opacity-20 text-yellow-300 text-sm flex items-center"
        >
          <FiAlertTriangle className="mr-2 h-5 w-5 flex-shrink-0" />
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.485 2.495c.646-1.133 2.384-1.133 3.03 0l6.28 11.025c.64 1.125-.202 2.565-1.515 2.565H3.72c-1.313 0-2.155-1.44-1.515-2.565L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          Form submission configuration is pending. Site admin needs to set up the Access Key.
        </motion.div>
      ) }

      <motion.div variants={ inputVariants } custom={ 0 }>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
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
          disabled={ formStatus === "loading" }
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 1 }>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
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
          disabled={ formStatus === "loading" }
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 2 }>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
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
          disabled={ formStatus === "loading" }
        />
      </motion.div>

      <motion.div variants={ inputVariants } custom={ 3 }>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300 mb-1.5"
        >
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
          disabled={ formStatus === "loading" }
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
        <Button
          type="submit"
          disabled={ formStatus === "loading" || !WEB3FORMS_ACCESS_KEY }
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white
          bg-gradient-to-r from-green-400 via-teal-500 to-blue-600
          hover:from-green-500 hover:via-teal-600 hover:to-blue-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800
          focus:ring-teal-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300
          group transform hover:scale-[1.02]"
        >
          { formStatus === "loading" && (
            <FiLoader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          ) }
          { formStatus !== "loading" && (
            <FiSend
              size={ 20 }
              className="-ml-1 mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          ) }
          Send Message
        </Button>
      </motion.div>
    </motion.form>
  );
}
