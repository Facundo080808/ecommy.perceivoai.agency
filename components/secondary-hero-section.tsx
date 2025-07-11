"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Users } from "lucide-react"

export function SecondaryHeroSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Transforma la experiencia de tus clientes hoy mismo
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Únete a las empresas líderes que ya están aprovechando el poder de la inteligencia artificial para
            revolucionar su eCommerce.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Zap, text: "Implementación en menos de 24 horas" },
              { icon: ShieldCheck, text: "Garantía de satisfacción de 30 días" },
              { icon: MessageSquare, text: "Soporte técnico personalizado" },
              { icon: Users, text: "Más de 500 clientes satisfechos" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full px-4 py-2"
              >
                <div className="bg-blue-500/20 p-1.5 rounded-full">
                  <item.icon className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <span className="flex items-center gap-2">
                Comenzar ahora
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>

            <Button size="lg" variant="outline">
              <span>Hablar con un experto</span>
            </Button>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "98%", label: "Satisfacción" },
            { value: "35%", label: "Aumento en conversiones" },
            { value: "24/7", label: "Soporte disponible" },
            { value: "500+", label: "Clientes activos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
