import AnimatedButton from "./AnimatedButton";
import ExportReportButton from "./ExportReportButton";

interface CommandCenterHeroProps {
  healthScore: number;
  velocityScore: number;
  contributors: number;
  riskLabel: string;
}

export default function CommandCenterHero({
  healthScore,
  velocityScore,
  contributors,
  riskLabel,
}: CommandCenterHeroProps) {
  return (
    <div
      className="
      relative
      mb-8
      rounded-3xl
      overflow-hidden

      bg-gradient-to-r
      from-[#0A0A0A]
      via-[#161616]
      to-[#1F1F1F]

      text-white
      shadow-2xl
      "
    >
      <div
        className="
        absolute
        top-0
        right-0

        w-[500px]
        h-[500px]

        rounded-full

        bg-red-500/10

        blur-[80px]
        "
      />

      <div className="p-10 relative z-10">
        <div
          className="
          inline-flex
          px-4
          py-2
          rounded-full

          bg-red-600/20
          border
          border-red-500/30

          text-red-300
          text-sm
          "
        >
          Repository Command Center
        </div>

        <h1
          className="
          mt-5
          text-6xl
          xl:text-7xl
          font-black
          "
        >
          Engineering Intelligence
        </h1>

        <p
          className="
          mt-4
          text-zinc-400
          max-w-3xl
          "
        >
          Analyze repository health,
          contributor concentration,
          productivity trends,
          engineering velocity,
          and long-term project risk.
        </p>

        <div
          className="
          grid
          grid-cols-4
          gap-8
          mt-10
          "
        >
          <div>
            <div className="text-zinc-500">
              Health Score
            </div>

            <div
              className="
              text-5xl
              font-black
              text-red-400
              "
            >
              {Math.round(healthScore)}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Velocity
            </div>

            <div
              className="
              text-5xl
              font-black
              "
            >
              {Math.round(velocityScore)}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Contributors
            </div>

            <div
              className="
              text-5xl
              font-black
              "
            >
              {contributors}
            </div>
          </div>

          <div>
            <div className="text-zinc-500">
              Risk
            </div>

            <div
              className="
              text-5xl
              font-black
              text-red-400
              "
            >
              {riskLabel}
            </div>
          </div>
        </div>

        <div
          className="
          flex
          gap-4
          mt-10
          "
        >
          <AnimatedButton variant="primary">
            Analyze Repository
          </AnimatedButton>

          <AnimatedButton variant="secondary">
            Compare Repository
          </AnimatedButton>

            <ExportReportButton />
        
        </div>
      </div>
    </div>
  );
}