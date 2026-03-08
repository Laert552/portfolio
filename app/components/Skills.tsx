const skills = [
  {
    name: "Next.js",
    icon: "N",
    description: "App Router, SSR, SSG",
    color: "from-white/10 to-white/5",
    iconColor: "text-white",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description: "Strict typing, generics",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    name: "React",
    icon: "⚛",
    description: "Hooks, context, performance",
    color: "from-cyan-500/20 to-cyan-600/10",
    iconColor: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    icon: "TW",
    description: "Utility-first, responsive",
    color: "from-teal-500/20 to-teal-600/10",
    iconColor: "text-teal-400",
  },
  {
    name: "Git",
    icon: "G",
    description: "Version control, CI/CD",
    color: "from-orange-500/20 to-orange-600/10",
    iconColor: "text-orange-400",
  },
  {
    name: "Docker",
    icon: "D",
    description: "Containers, Compose",
    color: "from-sky-500/20 to-sky-600/10",
    iconColor: "text-sky-400",
  },
  {
    name: "Linux",
    icon: "L",
    description: "Shell scripting, Bash",
    color: "from-yellow-500/20 to-yellow-600/10",
    iconColor: "text-yellow-400",
  },
  {
    name: "Node.js",
    icon: "N",
    description: "REST APIs, Express",
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative rounded-xl border border-gray-800 bg-gradient-to-br ${skill.color} p-5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5`}
            >
              <div className={`text-2xl font-bold mb-3 ${skill.iconColor}`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {skill.name}
              </h3>
              <p className="text-gray-500 text-xs">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
