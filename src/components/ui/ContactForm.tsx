"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
}

export default function ContactForm() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ subject, setSubject ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ formState, setFormState ] = useState<FormState>({ status: "idle", message: null });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading", message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({
          status: "success", message: data.message ||
            "Your message has been sent successfully.!"
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setFormState({
          status: "error", message: data.message ||
            "An error occurred. Please try again."
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormState({
        status: "error",
        message: "Unable to connect to server. Please try again later."
      });
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    }),
  };

  return (
    <motion.form
      onSubmit={ handleSubmit }
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.2 } }
      variants={ { visible: { transition: { staggerChildren: 0.1 } } } }
    >
      <motion.div variants={ inputVariants } custom={ 0 }>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          className="block w-full px-4 py-3 rounded-md shadow-sm bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
          placeholder="Enter your name"
        />
      </motion.div>
      <motion.div variants={ inputVariants } custom={ 1 }>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          className="block w-full px-4 py-3 rounded-md shadow-sm bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
          placeholder="Enter your email address"
        />
      </motion.div>
      <motion.div variants={ inputVariants } custom={ 2 }>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={ subject }
          onChange={ (e) => setSubject(e.target.value) }
          className="block w-full px-4 py-3 rounded-md shadow-sm bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
          placeholder="Subject about cooperation opportunities..."
        />
      </motion.div>
      <motion.div variants={ inputVariants } custom={ 3 }>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={ 4 }
          required
          value={ message }
          onChange={ (e) => setMessage(e.target.value) }
          className="block w-full px-4 py-3 rounded-md shadow-sm bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
          placeholder="Enter your message content..."
        ></textarea>
      </motion.div>
      <motion.div variants={ inputVariants } custom={ 4 }>
        <button
          type="submit"
          disabled={ formState.status === "loading" }
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
        >
          { formState.status === "loading" && <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" /> }
          { formState.status !== "loading" && <Send size={ 20 } className="-ml-1 mr-3 h-5 w-5" /> }
          Send Message
        </button>
      </motion.div>

      { formState.message && (
        <motion.div
          initial={ { opacity: 0, y: 10 } }
          animate={ { opacity: 1, y: 0 } }
          className={ `mt-4 p-3 rounded-md text-sm flex items-center
            ${formState.status === "success" ? "bg-green-500 bg-opacity-20 text-green-300" :
              formState.status === "error" ? "bg-red-500 bg-opacity-20 text-red-300" : ""
            }` }
        >
          { formState.status === "success" && <CheckCircle className="mr-2 h-5 w-5" /> }
          { formState.status === "error" && <AlertTriangle className="mr-2 h-5 w-5" /> }
          { formState.message }
        </motion.div>
      ) }
    </motion.form>
  );
}
