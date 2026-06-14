import { useState } from "react";
import {CircleAlert} from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { useRepository } from "../state/repositoryStore";

export default function RepositorySearch() {
  const {
    owner,
    repo,
    setOwner,
    setRepo,
  } = useRepository();

  const [localOwner, setLocalOwner] =
    useState(owner);

  const [localRepo, setLocalRepo] =
    useState(repo);

  const [
  showRiskInfo,
  setShowRiskInfo,
] = useState(false);

  function analyzeRepository() {
    const trimmedOwner =
      localOwner.trim();

    const trimmedRepo =
      localRepo.trim();

    if (
      !trimmedOwner ||
      !trimmedRepo
    ) {
      return;
    }

    setOwner(trimmedOwner);
    setRepo(trimmedRepo);

    console.log(
      "Analyzing:",
      trimmedOwner,
      trimmedRepo
    );
  }

  return (
    <div
      className="
      glass
      rounded-3xl
      shadow-xl
      w-full
      mb-4
      px-8
      py-5
      "
    >
      <div
        className="
        flex
        flex-wrap
        items-center
        gap-6
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          flex-1
          "
        >
          <span
            className="
            font-bold
            text-lg
            whitespace-nowrap
            "
          >
            Owner:
          </span>

          <input
            value={localOwner}
            onChange={(e) =>
              setLocalOwner(
                e.target.value
              )
            }
            placeholder="Ex: kennykrichardson"
            className="
            flex-1
            px-4
            py-3
            rounded-xl
            border
            border-gray-200
            bg-white
            "
          />
        </div>

        <div
          className="
          flex
          items-center
          gap-3
          flex-1
          "
        >
          <span
            className="
            font-bold
            text-lg
            whitespace-nowrap
            "
          >
            Repo:
          </span>

          <input
            value={localRepo}
            onChange={(e) =>
              setLocalRepo(
                e.target.value
              )
            }
            placeholder="Ex: GeoTrail"
            className="
            flex-1
            px-4
            py-3
            rounded-xl
            border
            border-gray-200
            bg-white
            "
          />
        </div>

<div
  className="
  flex
  items-center
  gap-3
  "
>
  <AnimatedButton
    variant="primary"
    onClick={analyzeRepository}
  >
    ANALYZE REPOSITORY
  </AnimatedButton>

  <button
    type="button"
    onClick={() =>
      setShowRiskInfo(
        !showRiskInfo
      )
    }
    className="
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    border
    border-red-200
    bg-white
    hover:bg-red-50
    transition-all
    "
  >
    <CircleAlert
      size={20}
      className="
      text-red-500
      "
    />
  </button>
</div>

<div
  className={`
    overflow-hidden
    transition-all
    duration-300
    ${
      showRiskInfo
        ? "max-h-40 mt-4"
        : "max-h-0"
    }
  `}
>
  <div
    className="
    border-t
    border-gray-200
    pt-4
    text-sm
    text-gray-600
    "
  >
    Repositories with a
    single contributor
    receive higher risk
    scores due to increased
    dependency on one
    developer for project
    continuity and
    maintenance.
  </div>
</div>
      </div>
    </div>
  );
}