import { CtaButtonLink } from "@/components/link";
import { registerUrl } from "@/constants";
import { TopBar } from "./TopBar";

const heroTextHeight = 276;

export const Hero = () => (
  <main
    className="relative isolate flex flex-col items-center md:h-[300vh] w-full"
    style={
      {
        viewTimelineName: "--hero",
        "--hero-text-height": `${heroTextHeight}px`,
      } as React.CSSProperties
    }
  >
    <div className="dark flex w-full justify-center sticky top-4 px-4">
      <TopBar className="hidden md:flex" />
    </div>
    <div className="flex flex-col items-center px-4 gap-12 pb-44 md:sticky md:top-[calc(100vh/2-var(--hero-text-height)/2)] shrink-0 pt-32 md:pt-0">
      <h1 className="text-center uppercase font-bold text-balance text-white drop-shadow-md">
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both duration-800 delay-700">
          AUTOMATE YOUR SALES ON
        </span>
        <br />
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both delay-1900 duration-300">
          WHATSAPP WITHOUT WRITING{" "}
        </span>
        <br />
        <span className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm inline-block fill-mode-both delay-2500 duration-300">
          A SINGLE LINE OF CODE
        </span>
      </h1>
      <p className="text-center text-white/90 font-medium text-balance md:text-2xl max-w-4xl animate-in fade-in slide-in-from-bottom-10 blur-in-sm fill-mode-both delay-3000 duration-600 drop-shadow-sm">
        MunafaFlow is India’s easiest drag-and-drop commerce builder. Automatically capture leads, book appointments, and collect UPI payments natively inside WhatsApp.
      </p>

      <CtaButtonLink
        className="animate-in fade-in slide-in-from-bottom-10 blur-in-sm fill-mode-both delay-3300 duration-600 md:hidden"
        size="lg"
        href={registerUrl}
      >
        Start building
      </CtaButtonLink>
    </div>
    <div
      className="h-screen w-full sticky inset-0 px-0 rounded-3xl animate-magic-zoom opacity-0 hidden md:motion-reduce:hidden md:supports-[animation-timeline:scroll()]:block"
      style={{
        animationTimeline: "--hero",
        animationRange: "contain 0% exit-crossing 50%",
        background: "radial-gradient(circle at center, #25D366 0%, #128C7E 55%, #075E54 100%)",
      }}
    >
      <div
        className="size-full absolute top-0 animate-magic-zoom-blur bg-inherit"
        style={{
          animationTimeline: "--hero",
          animationRange: "contain 0% exit-crossing 50%",
        }}
      />
    </div>
  </main>
);
