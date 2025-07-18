"use client"

import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>
      <div className="container relative z-20">
        <div className="text-center mb-16">
          <AnimatedText text="Cómo Funciona" className="text-3xl md:text-4xl font-bold mb-4" as="h2" />
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Una experiencia de compra conversacional que guía a sus clientes desde la búsqueda hasta la compra
          </motion.p>
        </div>

        {/* 🎥 Supademo en lugar del ChatInterface */}
        <motion.div
          className="relative box-content max-h-[80vh] w-full aspect-[2.1641] py-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <iframe
            src="https://app.supademo.com/embed/cmctexb5r17mo9st8dos81eb8?embed_v=2"
            loading="lazy"
            title="Demo KreadoresPro"
            allow="clipboard-write"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
