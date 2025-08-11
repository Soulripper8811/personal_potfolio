import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PerfectStore",
    description: "A Perfect storage for all yours files and pdf.",
    image: "/projects/perfectstore.png",
    tags: ["Nextjs", "TailwindCSS", "TypeScript", "Shadcn", "Appwrite", "SSR"],
    demoUrl: "https://perfect-store.vercel.app/sign-in",
    githubUrl: "https://github.com/Soulripper8811/perfectStore",
  },
  {
    id: 2,
    title: "AI Agentic Blog Generator",
    description:
      "Generate your favourite blog using AI with all its content and instructions using Agentic WorkFlow and Nextjs and Typescript.",
    image: "/projects/agentic_blog.jpeg",
    tags: [
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Expressjs",
      "PostgressSql",
      "OpenAI",
      "Replicate",
    ],
    demoUrl: "https://ai-agentic-blog.vercel.app/",
    githubUrl: "https://github.com/Soulripper8811/AiAgentic-Blog",
  },
  {
    id: 3,
    title: "AI Recipe Generator",
    description:
      "Generate your Favouirte food recipe using the AI With All its ingredients and Instructions.hosted on render require 1 min to start for first time",
    image: "/projects/recipe.png",
    tags: [
      "Reactjs",
      "Javascript",
      "TailwindCSS",
      "Expressjs",
      "MonogDB",
      "GENAI",
      "Gemini",
    ],
    demoUrl: "https://ai-recipe-generator-7932.onrender.com/",
    githubUrl: "https://github.com/Soulripper8811/Ai-recipe-generator",
  },
  {
    id: 4,
    title: "AI SaaS Generator",
    description:
      "An AI-powered SaaS generator that creates web applications with advanced features.",
    image: "/projects/aisaas.png",
    tags: [
      "TypeScript",
      "Next.js",
      "Prisma",
      " Shadcn",
      "TailwindCSS",
      "PostgreSQL",
      "openAi",
      "zustand",
      "replicate",
      "clerk",
    ],
    demoUrl: "https://ai-saas-generator-web.vercel.app/",
    githubUrl: "https://github.com/Soulripper8811/ai-saas-generator-web",
  },
  {
    id: 5,
    title: "Let's Connect-A social media platform",
    description:
      "A social media platform that connects people with similar interests.And allows users to share posts, images, and comments in real time.",
    image: "/projects/letsconnect.png",
    tags: [
      "Reactjs",
      "Nextjs",
      "Prisma",
      "TailwindCSS",
      "TypeScript",
      "UploadThing",
      "Shadcn",
      "PostgreSQL",
    ],
    demoUrl: "https://lets-connect-social-media.vercel.app/",
    githubUrl: "https://github.com/Soulripper8811/LetsConnect-socialMedia",
  },
  {
    id: 6,
    title: "AI Logo Maker",
    description:
      "An AI-powered logo maker that generates unique logos based on user input.User can select multiple styles and colors to create a personalized logo.",
    image: "/projects/logomaker.png",
    tags: [
      "Reactjs",
      "Nextjs",
      "TailwindCSS",
      "Javascript",
      "Shadcn",
      "Firebase",
      "GenAI",
    ],
    demoUrl: "https://ai-logo-maker-app.vercel.app/",
    githubUrl: "https://github.com/Soulripper8811/Ai-logo-maker",
  },
  {
    id: 7,
    title: "Note Taker",
    description:
      "A note taking app that allows users to take notes and organize them into categories. And it was deployed on render.com. so might require 1 minute for starting the server.",
    image: "/projects/notetaker.png",
    tags: ["Reactjs", "Javascript", "TailwindCSS", "Expressjs", "MonogDB"],
    demoUrl: "https://notetaker-k1md.onrender.com",
    githubUrl: "https://github.com/Soulripper8811/notetaker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Ideas In <span className="text-primary"> Flights </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Soulripper8811"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
