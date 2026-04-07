import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Code2,
  Cpu,
  Gamepad2,
  Globe,
  GraduationCap,
  Laptop,
  Layers3,
  Menu,
  MonitorSmartphone,
  MoveRight,
  Palette,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const areas = [
  {
    id: "ux",
    label: "UX/UI",
    icon: MonitorSmartphone,
    title: "Diseña experiencias claras, humanas y memorables",
    text: "Aprende a investigar, prototipar y construir interfaces que realmente respondan a las personas. La propuesta visual combina usabilidad, dirección de arte y pensamiento estratégico.",
    bullets: ["Arquitectura de información", "Prototipado interactivo", "Diseño visual y sistemas"],
  },
  {
    id: "games",
    label: "Videojuegos",
    icon: Gamepad2,
    title: "Convierte ideas en mundos interactivos",
    text: "Explora narrativa, mecánicas, dirección visual y desarrollo técnico para crear videojuegos con identidad propia. El enfoque mezcla creatividad, lógica y experiencia de usuario.",
    bullets: ["Diseño de juego", "Narrativa interactiva", "Producción y testing"],
  },
  {
    id: "webapps",
    label: "Web y apps",
    icon: Globe,
    title: "Crea productos digitales listos para el mundo real",
    text: "Desarrolla plataformas, sitios y aplicaciones con una visión contemporánea del diseño digital. El prototipo prioriza claridad, jerarquía visual y navegación intuitiva.",
    bullets: ["Front-end creativo", "Productos digitales", "Flujos y experiencias"],
  },
  {
    id: "physical",
    label: "Interactividad física",
    icon: Cpu,
    title: "Lleva la interactividad más allá de la pantalla",
    text: "Experimenta con instalaciones, interfaces físicas y tecnología emergente para crear experiencias inmersivas con un componente visual y sensorial fuerte.",
    bullets: ["Interfaces tangibles", "Instalaciones interactivas", "Tecnología emergente"],
  },
];

const highlights = [
  {
    icon: Palette,
    title: "Diseño + arte + programación",
    text: "Una formación híbrida pensada para perfiles creativos que también quieren construir y prototipar.",
  },
  {
    icon: Wand2,
    title: "Aprendizaje basado en proyectos",
    text: "La experiencia se presenta como una ruta práctica donde cada semestre se convierte en un portafolio vivo.",
  },
  {
    icon: Briefcase,
    title: "Perfil profesional versátil",
    text: "La interfaz del sitio comunica empleabilidad, adaptabilidad y preparación para industrias creativas y tecnológicas.",
  },
];

const roadmap = [
  {
    year: "Año 1",
    focus: "Fundamentos",
    text: "Bases de diseño, creatividad, visualidad, pensamiento crítico y primeras aproximaciones a medios digitales.",
  },
  {
    year: "Año 2",
    focus: "Herramientas y exploración",
    text: "Web, interfaces, narrativa, prototipos y una visión más clara de tus intereses como creador digital.",
  },
  {
    year: "Año 3",
    focus: "Especialización",
    text: "Proyectos más complejos en UX/UI, videojuegos, apps, interactividad física y experiencias inmersivas.",
  },
  {
    year: "Año 4",
    focus: "Portafolio y proyección",
    text: "Desarrollo de proyectos de alto nivel, identidad profesional y preparación para industria o emprendimiento.",
  },
];

const ecosystem = [
  "COCOA como entorno interdisciplinario",
  "8 semestres en modalidad presencial",
  "Acceso a tecnología, laboratorios y herramientas contemporáneas",
  "Énfasis en creatividad, pensamiento crítico y diseño centrado en personas",
  "Conexión con networking, intercambio y cultura de proyectos",
  "Preparación para web, apps, videojuegos y experiencias interactivas",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="space-y-3">
      <Badge className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 transition duration-300 hover:scale-[1.03] hover:border-red-300 hover:bg-red-100">
        {eyebrow}
      </Badge>
      <div className="space-y-2">
        <h2 className="max-w-xl text-2xl font-semibold leading-tight text-black sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function USFQInteractiveMediaPrototype() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState("ux");

  const currentArea = useMemo(
    () => areas.find((area) => area.id === activeArea) || areas[0],
    [activeArea]
  );

  const CurrentIcon = currentArea.icon;

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 right-[-120px] h-[340px] w-[340px] rounded-full bg-red-500 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.04, 0.96, 1.04], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-120px] top-[420px] h-[280px] w-[280px] rounded-full bg-black blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,248,248,1)_45%,rgba(255,255,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-red-200 bg-red-50 shadow-[0_10px_30px_rgba(239,68,68,0.12)] transition duration-300 group-hover:scale-105">
              <Layers3 className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-black/45">USFQ · COCOA</p>
              <p className="text-sm font-semibold text-black">Medios Interactivos</p>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-6 md:flex">
            {[
              ["#propuesta", "Propuesta"],
              ["#areas", "Áreas"],
              ["#ruta", "Ruta"],
              ["#salida", "Salida profesional"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="group relative text-sm text-black/70 transition duration-300 hover:text-red-600"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden rounded-full bg-black text-white transition duration-300 hover:scale-[1.03] hover:bg-red-600 md:inline-flex"
              onClick={() => window.open("https://admision.usfq.edu.ec", "_blank")}
            >
              Postula
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-black/10 bg-white text-black transition duration-300 hover:scale-105 hover:bg-red-50 hover:text-red-600 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          className="overflow-hidden border-t border-black/8 md:hidden"
        >
          <div className="px-4 py-3">
            <div className="flex flex-col gap-2">
              {[
                ["#propuesta", "Propuesta"],
                ["#areas", "Áreas"],
                ["#ruta", "Ruta"],
                ["#salida", "Salida profesional"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.55 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 shadow-[0_10px_30px_rgba(239,68,68,0.08)]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Prototipo mobile first de alta conversión
              </motion.div>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-black sm:text-5xl lg:text-6xl">
                  Diseña el futuro de lo digital con una carrera hecha para crear, experimentar y construir.
                </h1>
                <p className="max-w-xl text-base leading-7 text-black/68 sm:text-lg">
                  Un prototipo conceptual para la carrera de Diseño de Medios Interactivos de la USFQ. La interfaz prioriza claridad, exploración y deseo de postulación desde la experiencia móvil.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="group h-12 rounded-full bg-red-600 px-6 text-white transition duration-300 hover:scale-[1.03] hover:bg-black"
                  onClick={() => window.open("https://admision.usfq.edu.ec", "_blank")}
                >
                  Quiero estudiar esto
                  <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-black/15 bg-white px-6 text-black transition duration-300 hover:scale-[1.03] hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                  onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explorar áreas
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
                {[
                  ["8", "semestres"],
                  ["COCOA", "ecosistema creativo"],
                  ["UX/UI", "web, apps y juegos"],
                ].map(([value, label], index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.4 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <Card className="rounded-3xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition duration-300 hover:border-red-200 hover:shadow-[0_24px_50px_rgba(239,68,68,0.12)]">
                      <CardContent className="p-4">
                        <div className="text-xl font-semibold text-black">{value}</div>
                        <div className="mt-1 text-xs leading-5 text-black/60">{label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              whileHover={{ y: -6 }}
              className="relative mx-auto w-full max-w-md"
            >
              <motion.div
                animate={{ opacity: [0.14, 0.25, 0.14], scale: [0.96, 1.02, 0.96] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 scale-95 rounded-[2.25rem] bg-red-500/25 blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
                <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-black text-white">
                  <div className="border-b border-white/10 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Landing concept</p>
                        <p className="mt-1 text-sm font-medium text-white">Mobile experience</p>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(239,68,68,0.2),rgba(255,255,255,0.03))] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <Badge className="rounded-full bg-white/10 text-[10px] text-white hover:bg-white/15">Explora tu perfil</Badge>
                        <Badge className="rounded-full bg-red-600 text-[10px] text-white hover:bg-red-600">Top choice</Badge>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">Una carrera para creadores digitales</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Diseño visual, interacción, código y proyectos aplicados en una sola experiencia.
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        [Gamepad2, "Videojuegos"],
                        [MonitorSmartphone, "UX/UI"],
                        [Globe, "Apps"],
                        [Cpu, "Interactividad"],
                      ].map(([Icon, label]) => (
                        <motion.div
                          key={label}
                          whileHover={{ y: -4, scale: 1.03 }}
                          className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3 transition duration-300 hover:bg-red-600/15"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 transition duration-300">
                            <Icon className="h-5 w-5 text-red-400" />
                          </div>
                          <p className="text-sm font-medium text-white">{label}</p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">¿Tu perfil encaja aquí?</p>
                          <p className="mt-1 text-xs text-white/55">Creatividad, curiosidad y deseo de construir</p>
                        </div>
                        <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-200">
                          Sí
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="propuesta" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                >
                  <Card className="group h-full rounded-[1.8rem] border border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition duration-300 hover:border-red-200 hover:shadow-[0_24px_60px_rgba(239,68,68,0.14)]">
                    <CardContent className="space-y-4 p-5 sm:p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 transition duration-300 group-hover:scale-110 group-hover:bg-red-100">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black transition duration-300 group-hover:text-red-700">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-black/65">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="areas" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionTitle
              eyebrow="Áreas clave"
              title="Una experiencia que te deja descubrir qué tipo de creador digital quieres ser"
              body="La navegación de esta sección fue pensada como un selector simple en móvil y como un panel exploratorio en escritorio. Reduce fricción, mejora lectura y deja que el contenido respire."
            />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {areas.map((area) => {
                  const Icon = area.icon;
                  const active = activeArea === area.id;
                  return (
                    <motion.button
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={area.id}
                      onClick={() => setActiveArea(area.id)}
                      className={`rounded-[1.3rem] border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-red-300 bg-red-50 shadow-[0_18px_40px_rgba(239,68,68,0.12)]"
                          : "border-black/10 bg-white hover:border-red-200 hover:bg-red-50/60"
                      }`}
                    >
                      <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-2xl transition duration-300 ${active ? "bg-red-100" : "bg-black/[0.04]"}`}>
                        <Icon className={`h-5 w-5 ${active ? "text-red-600" : "text-black/70"}`} />
                      </div>
                      <p className={`text-sm font-medium ${active ? "text-red-700" : "text-black/75"}`}>{area.label}</p>
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                key={currentArea.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                whileHover={{ y: -4 }}
              >
                <Card className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_70px_rgba(0,0,0,0.08)] transition duration-300 hover:shadow-[0_26px_70px_rgba(239,68,68,0.12)]">
                  <CardContent className="p-5 sm:p-7">
                    <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-start">
                      <div>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-red-50 transition duration-300 hover:scale-105 hover:bg-red-100">
                          <CurrentIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-semibold leading-tight text-black">{currentArea.title}</h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-black/68 sm:text-base">{currentArea.text}</p>
                      </div>

                      <div className="space-y-3 rounded-[1.5rem] border border-black/10 bg-black p-4 text-white">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/45">Lo que transmite esta sección</p>
                        {currentArea.bullets.map((bullet, index) => (
                          <motion.div
                            key={bullet}
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                          >
                            <BadgeCheck className="h-4 w-4 text-red-400" />
                            <span className="text-sm text-white/85">{bullet}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="ruta" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Ruta académica"
              title="Una estructura pensada para crecer por etapas"
              body="En lugar de saturar con una malla completa, el prototipo resume la experiencia por años para que la comprensión sea rápida en móvil y el recorrido se sienta alcanzable."
            />

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="group h-full rounded-[1.8rem] border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.05)] transition duration-300 hover:border-red-200 hover:shadow-[0_22px_50px_rgba(239,68,68,0.12)]">
                    <CardContent className="space-y-4 p-5">
                      <div className="flex items-center justify-between">
                        <Badge className="rounded-full bg-red-50 text-red-700 transition duration-300 hover:bg-red-100">{item.year}</Badge>
                        <BookOpen className="h-4 w-4 text-red-600 transition duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black group-hover:text-red-700">{item.focus}</h3>
                        <p className="mt-2 text-sm leading-6 text-black/65">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Experiencia"
                title="La página propone una carrera viva, no una lista fría de materias"
                body="El contenido se organiza para que la decisión de estudiar se sienta emocional y racional a la vez. Primero inspira. Luego explica. Finalmente invita a actuar."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {ecosystem.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-black/10 bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:border-red-200 hover:bg-red-50/50"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 transition duration-300 hover:bg-red-100">
                      <BadgeCheck className="h-4 w-4 text-red-600" />
                    </div>
                    <p className="text-sm leading-6 text-black/75">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ y: -6 }}>
              <Card className="overflow-hidden rounded-[2rem] border border-black/10 bg-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
                <CardContent className="p-5 sm:p-7">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-white/40">Perfil de egreso</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">Versátil, creativo y listo para industria</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 transition duration-300 hover:scale-105 hover:bg-red-500/25">
                        <GraduationCap className="h-5 w-5 text-red-400" />
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        {
                          icon: Code2,
                          title: "Piensa y ejecuta",
                          text: "No solo propone ideas. También las convierte en experiencias funcionales.",
                        },
                        {
                          icon: Users,
                          title: "Trabaja de forma interdisciplinaria",
                          text: "El diseño se presenta como colaboración entre creatividad, tecnología y estrategia.",
                        },
                        {
                          icon: Laptop,
                          title: "Construye portafolio desde la carrera",
                          text: "La estructura del sitio refuerza una narrativa de proyectos y salida profesional.",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.title}
                            whileHover={{ x: 4, scale: 1.01 }}
                            className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-red-400/30 hover:bg-white/10"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/12 transition duration-300 hover:scale-105">
                                <Icon className="h-5 w-5 text-red-400" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                                <p className="mt-1 text-sm leading-6 text-white/65">{item.text}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="salida" className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <motion.div whileHover={{ y: -4 }}>
            <Card className="overflow-hidden rounded-[2.2rem] border border-red-200 bg-[linear-gradient(135deg,rgba(254,242,242,1),rgba(255,255,255,1))] shadow-[0_18px_80px_rgba(239,68,68,0.1)]">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="space-y-4">
                    <Badge className="rounded-full bg-black px-3 py-1 text-white hover:bg-red-600">Salida profesional</Badge>
                    <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-black sm:text-4xl">
                      Diseña para marcas, productos, estudios creativos, tecnología y nuevas industrias digitales.
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-black/70 sm:text-base">
                      El cierre del prototipo resume una idea central: esta carrera no limita. Expande posibilidades. La interfaz termina con un llamado directo para convertir interés en acción.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "UX/UI Designer",
                      "Game Designer",
                      "Creative Developer",
                      "Product Designer",
                      "Interactive Artist",
                      "Digital Experience Designer",
                    ].map((role) => (
                      <motion.div
                        key={role}
                        whileHover={{ scale: 1.02, y: -4 }}
                        className="group flex items-center justify-between rounded-[1.4rem] border border-black/10 bg-white px-4 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition duration-300 hover:border-red-200 hover:bg-red-50"
                      >
                        <span className="text-sm font-medium text-black/85 group-hover:text-red-700">{role}</span>
                        <MoveRight className="h-4 w-4 text-red-600 transition duration-300 group-hover:translate-x-1" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/92 p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Button
            className="group h-12 flex-1 rounded-full bg-red-600 text-white transition duration-300 hover:scale-[1.02] hover:bg-black"
            onClick={() => window.open("https://admision.usfq.edu.ec", "_blank")}
          >
            Postula ahora
          </Button>
          <Button
            variant="outline"
            className="h-12 flex-1 rounded-full border-black/15 bg-white text-black transition duration-300 hover:scale-[1.02] hover:border-red-300 hover:bg-red-50 hover:text-red-700"
            onClick={() => window.open("https://www.usfq.edu.ec/es/carreras-de-pregrado/diseno-de-medios-interactivos", "_blank")}
          >
            Ver carrera
          </Button>
        </div>
      </div>
    </div>
  );
}
