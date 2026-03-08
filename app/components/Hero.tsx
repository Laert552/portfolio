import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex-1 flex items-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left max-w-xl">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
              Frontend & DevOps Intern
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Jim <span className="text-indigo-400">Carrey</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Passionate about building clean, performant web experiences and
              automating infrastructure. Currently interning while completing a
              Computer Science degree, with a focus on React, TypeScript, and
              cloud-native tooling.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-colors"
              >
                Get in touch
              </a>
              <a
                href="#skills"
                className="px-6 py-3 rounded-lg border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                View skills
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 ring-4 ring-indigo-500/30 overflow-hidden">
              <Image
                src="/jim.jpg"
                alt="Jim Carrey"
                width={208}
                height={208}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
