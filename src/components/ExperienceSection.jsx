import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Project Based Learning",
      company: "Self Learing",
      period: "2022 - 2025",
      description:
        "Learing different technologies and frameworks to enhance my skills and knowledge.",
      tags: ["Knowlegde", "SKill Enhancement", "Automation", "Framework"],
    },
    {
      role: "Full Stack Developer",
      company: "26ideas",
      period: "May 2024 - Nov 2024",
      description:
        "Developed and maintained web applications using Nextjs, Nestjs, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      tags: [
        "Market Research",
        "ChatGPT",
        "Automation",
        "CRM",
        "Typescript",
        "Nextjs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="
              absolute
              top-0
              left-5
              lg:left-1/2
              w-px
              bg-gray-300
              dark:bg-gray-700
              h-full
              z-0
            "
          />

          {experiences.map((exp, index) => {
            const isRight = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-16 flex flex-col lg:flex-row ${
                  isRight ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 lg:left-1/2 top-6 transform lg:-translate-x-1/2 z-10">
                  <div className="bg-primary p-2 rounded-full shadow-md">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content wrapper to create spacing */}
                <div className="w-full lg:w-1/2 flex">
                  {/* Experience Card */}
                  <div
                    className={`ml-10 lg:ml-0 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full lg:w-[90%] ${
                      isRight ? "lg:mr-6" : "lg:ml-6"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty div for the other side */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
