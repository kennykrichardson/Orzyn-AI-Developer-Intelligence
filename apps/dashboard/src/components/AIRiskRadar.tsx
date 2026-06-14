interface Props {
  riskScore: number;
  busFactor: number;
}

export default function AIRiskRadar({
  riskScore,
  busFactor,
}: Props) {
  const level =
    riskScore > 70
      ? "HIGH"
      : riskScore > 40
      ? "MEDIUM"
      : "LOW";

  return (
    <div
      className="
      glass
      rounded-3xl
      p-6
      shadow-xl
      "
    >
      <h2 className="text-2xl font-bold">
        AI Risk Radar
      </h2>

      <div className="mt-6">
        <div className="text-gray-500">
          Risk Level
        </div>

        <div
          className="
          text-5xl
          font-black
          text-red-500
          "
        >
          {level}
        </div>
      </div>

      <div className="mt-6">
        <div>
          Risk Score:
          {" "}
          {riskScore}
        </div>

        <div>
          Bus Factor:
          {" "}
          {busFactor}
        </div>
      </div>

      <div
        className="
        mt-6
        text-gray-600
        "
      >
        {riskScore > 40
          ? "Contributor concentration risk increasing."
          : "Repository risk remains stable."}
      </div>
    </div>
  );
}