"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "Ap2CcQxqxl-Y_a7QA0Rdy5NGgF8OgcfLZ3jR5a-B-Jc",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Erro ao enviar mensagem");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-light text-zinc-600 dark:text-slate-400"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="
            mt-1
            block
            w-full
            rounded-lg
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-900/50
            px-4
            py-2
            text-zinc-900
            dark:text-slate-50
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            backdrop-blur-sm
          "
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-light text-zinc-600 dark:text-slate-400"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="
            mt-1
            block
            w-full
            rounded-lg
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-900/50
            px-4
            py-2
            text-zinc-900
            dark:text-slate-50
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            backdrop-blur-sm
          "
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-light text-zinc-600 dark:text-slate-400"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="
            mt-1
            block
            w-full
            rounded-lg
            border
            border-zinc-200
            dark:border-zinc-800
            bg-white/50
            dark:bg-zinc-900/50
            px-4
            py-2
            text-zinc-900
            dark:text-slate-50
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            backdrop-blur-sm
            resize-none
          "
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          w-full
          rounded-lg
          bg-blue-500
          px-4
          py-2
          text-white
          font-light
          hover:bg-blue-600
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500/20
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition-colors
        "
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </motion.button>

      {submitStatus === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-sm text-center"
        >
          Mensagem enviada com sucesso!
        </motion.p>
      )}

      {submitStatus === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm text-center"
        >
          Erro ao enviar mensagem. Tente novamente.
        </motion.p>
      )}
    </motion.form>
  );
};
