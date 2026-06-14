import {
  useEffect,
  useState,
} from "react";

import {
  getInsights,
} from "../api/insightApi";

export function useInsights(
  owner: string,
  repo: string
) {
  const [
    insights,
    setInsights,
  ] = useState<any>(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getInsights(
            owner,
            repo
          );

        setInsights(
          data
        );
      } catch (
        error
      ) {
        console.error(
          error
        );
      } finally {
        setLoading(false);
      }
    }
     if (!owner || !repo)
    return;
    load();
  }, [owner, repo]);

  return {
    insights,
    loading,
  };
}