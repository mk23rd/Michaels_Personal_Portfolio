
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 blur-3xl opacity-70 dark:from-indigo-900/40 dark:to-slate-900/30"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-50 to-indigo-100 blur-3xl opacity-70 dark:from-indigo-900/40 dark:to-slate-900/30"></div>
      </div>

      <div className="section-container flex flex-col items-center justify-center text-center">
        <div className="relative overflow-hidden mb-2">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-foreground/80 animate-fade-in">
            Hi, I'm Michael
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="overflow-hidden">
            <h1 className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-text-reveal opacity-0",
              "reveal-delay-1"
            )}>
              Recent <span className="text-gradient">Graduate</span> From Hilcoe School Of Computer Science And Technology
            </h1>
            <span><br /></span>

          </div>

          <div className="overflow-hidden">
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-text-reveal opacity-0",
              "reveal-delay-2"
            )}>
            Hi, I’m Michael — a recent graduate from Hilcoe School of Computer Science and Technology, passionate about solving real-world problems through code and cloud technologies.

Over the past four years, I’ve built a solid foundation in software development, data structures, and systems design, while also earning my AWS Cloud Practitioner certification. I’m currently working toward the AWS Solutions Architect certification, deepening my skills in cloud architecture and scalable application design.

What drives me is a mix of curiosity, determination, and a strong “get things done” mindset. Whether I’m learning a new framework, debugging complex code, or collaborating on a team project, I stay focused on delivering quality results and continuously improving.

I’m especially interested in opportunities that allow me to grow as a software developer — including internships, junior roles, or collaborative tech projects. I’m excited to contribute, learn, and grow alongside others who are passionate about technology.

If you’re looking for someone who’s motivated, adaptable, and ready to tackle new challenges — let’s connect!
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className={cn(
                "px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all",
                "transform hover:translate-y-[-2px] hover:shadow-lg",
                "animate-fade-in opacity-0 reveal-delay-3"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all",
                "transform hover:translate-y-[-2px]",
                "animate-fade-in opacity-0 reveal-delay-4"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>

        <a 
          href="#projects" 
          className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center",
            "w-10 h-10 rounded-full border border-border animate-floating"
          )}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
