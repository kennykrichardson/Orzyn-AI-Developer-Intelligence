import {
  InsightData,
} from "../types/analytics";

const API_BASE =
  "http://localhost:8000";

export async function getInsights(
  owner: string,
  repo: string
): Promise<InsightData> {
  const response =
    await fetch(
      `${API_BASE}/insights/${owner}/${repo}`
    );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch insights"
    );
  }

  return response.json();
}