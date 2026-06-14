interface RepositoryHeaderProps {
  name: string;
  owner: string;
  description: string;
  language: string;
  stars: number;
}

export default function RepositoryHeader({
  name,
  owner,
  description,
  language,
  stars,
}: RepositoryHeaderProps) {
  return (
    <div
      className="
      rounded-3xl
      p-8
      mb-8

      bg-gradient-to-r
      from-[#C1121F]
      to-[#E63946]

      text-white

      shadow-2xl
      "
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-red-100">
            Repository Overview
          </p>

          <h1 className="text-5xl font-bold mt-2">
            {owner}/{name}
          </h1>

          <p className="mt-4 text-red-100 max-w-2xl">
            {description}
          </p>
        </div>

        <div
          className="
          glass/20
          backdrop-blur-md

          rounded-2xl
          px-6
          py-4
          "
        >
          <div className="text-sm">
            Stars
          </div>

          <div className="text-3xl font-bold">
            {stars.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}