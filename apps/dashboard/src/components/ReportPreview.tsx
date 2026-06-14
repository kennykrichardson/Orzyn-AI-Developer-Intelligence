import { useRepository } from "../state/repositoryStore";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface ReportResponse {
  repository: {
    id: number;
    name: string;
    owner: string;
    language: string;
    stars: number;
  };

  metrics: {
    productivity_score: number;
    velocity_score: number;
    bus_factor: number;
    risk_score: number;
    health_score: number;
  };

  report: {
    summary: string;
    insights: string[];
  };
}

export default function ReportPreview() {
  const { owner, repo } =
    useRepository();

  const [reportData, setReportData] =
    useState<ReportResponse | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadReport() {
      try {
        setLoading(true);

        const response =
          await fetch(
            `http://localhost:8000/reports/${owner}/${repo}`
          );

        const data =
          (await response.json()) as ReportResponse;

        console.log(
          "REPORT DATA",
          data
        );

        setReportData(data);
      } catch (error) {
        console.error(
          "Report Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    if (owner && repo) {
      loadReport();
    }
  }, [owner, repo]);

  if (loading) {
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
          "
        >
          <Loader/>
        </h2>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div
        className="
        glass
        rounded-3xl
        shadow-xl
        p-8
        "
      >
        Failed to load report.
      </div>
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
        text-3xl
        font-black
        mb-8
        "
      >
        Executive Summary
      </h2>

      <p
        className="
        text-lg
        leading-8
        mb-10
        "
      >
        {reportData.report.summary}
      </p>

      <div
        className="
        grid
        md:grid-cols-5
        gap-4
        mb-10
        "
      >
        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Health
          </p>

          <p className="text-2xl font-bold">
            {
              reportData.metrics
                .health_score
            }
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Productivity
          </p>

          <p className="text-2xl font-bold">
            {
              reportData.metrics
                .productivity_score
            }
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Velocity
          </p>

          <p className="text-2xl font-bold">
            {
              reportData.metrics
                .velocity_score
            }
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Risk
          </p>

          <p className="text-2xl font-bold">
            {
              reportData.metrics
                .risk_score
            }
          </p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-gray-500">
            Bus Factor
          </p>

          <p className="text-2xl font-bold">
            {
              reportData.metrics
                .bus_factor
            }
          </p>
        </div>
      </div>

      <h3
        className="
        text-2xl
        font-bold
        mb-4
        "
      >
        Engineering Insights
      </h3>

      <div className="space-y-4">
        {reportData.report.insights.map(
          (
            insight,
            index
          ) => (
            <div
              key={index}
              className="
              glass
              rounded-2xl
              p-4
              "
            >
              {insight}
            </div>
          )
        )}
      </div>
    </div>
  );
}