interface Props {
  insights: string[];
}
import EmptyState from "./EmptyState";

export default function InsightsPanel({
  insights,
}: Props) {
  const colors = [
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
  ];

if (
  !insights ||
  insights.length === 0
) {
  return (
    <EmptyState
      title="No Insights Yet"
      description="
      Run repository analysis
      to generate intelligence.
      "
    />
  );
}

  return (
    <div
      className="
      glass

      rounded-3xl

      shadow-xl

      p-8
      "
    >
      <h2
        className="
        text-2xl
        font-bold

        mb-6
        "
      >
        AI Insights
      </h2>

      <div className="space-y-5">
        {insights.map(
          (
            insight,
            index
          ) => (
            <div
              key={index}
              className="
              flex
              items-start
              gap-4

              py-4

              border-b
              border-gray-100
              "
            >
              <div
                className={`
                h-3
                w-3

                rounded-full

                mt-2

                ${
                  colors[
                    index %
                      colors.length
                  ]
                }
                `}
              />

              <p
                className="
                text-gray-700

                leading-relaxed
                "
              >
                {insight}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}