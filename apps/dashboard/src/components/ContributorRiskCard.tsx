interface ContributorRiskCardProps {
  busFactor: number;
  riskScore: number;
}

export default function ContributorRiskCard({
  busFactor,
  riskScore,
}: ContributorRiskCardProps) {
  return (
    <div
      className="
      glass
      rounded-2xl
      border
      border-gray-200
      p-6
      "
    >
      <h2 className="text-xl font-semibold mb-5">
        Contributor Risk
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">
            Bus Factor
          </p>
          <p className="text-4xl font-bold">
            {busFactor}
          </p>
        </div>
      </div>
    </div>
  );
}