interface TrendCardProps {
  title: string;
  value: number | string;
  trend: string;
}

export default function TrendCard({
  title,
  value,
  trend,
}: TrendCardProps) {
  const positive =
    trend === "growing";

  return (
    <div
      className="
      glass
      rounded-2xl
      border
      border-gray-200
      p-5
      "
    >
      <h3 className="text-gray-500">
        {title}
      </h3>

      <div className="mt-3 text-4xl font-bold">
        {value}%
      </div>

      <div
        className={`mt-2 font-medium ${
          positive
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {trend}
      </div>
    </div>
  );
}