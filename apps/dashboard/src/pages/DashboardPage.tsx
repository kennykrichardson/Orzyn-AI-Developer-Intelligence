import DashboardLayout from "../layout/DashboardLayout";

import RepositoryHeader from "../components/RepositoryHeader";

import MetricCard from "../components/MetricCard";

import InsightsPanel from "../components/InsightsPanel";

import HealthChart from "../components/HealthChart";

import VelocityChart from "../components/VelocityChart";

import TrendCard from "../components/TrendCard";

import ContributorRiskCard from "../components/ContributorRiskCard";

import RecentSnapshotsTable from "../components/RecentSnapshotsTable";

import CommandCenterHero from "../components/CommandCenterHero";

import ActivityFeed from "../components/ActivityFeed";

import HoverCard from "../components/HoverCard";

import RepositoryTimeline from "../components/RepositoryTimeline";

import ForecastChart from "../components/ForecastChart";

import ReactMarkdown from "react-markdown";

import { useAnalytics } from "../hooks/useAnalytics";
import {useContributors} from "../hooks/useContributors";
import {useTrends} from "../hooks/useTrends";
import { useRepository } from "../state/repositoryStore";
import { useRepositoryInfo } from "../hooks/useRepositoryInfo";
import {useInsights} from "../hooks/useInsights";
import Loader from "../components/Loader";

export default function DashboardPage() {  
  const {
  owner,
  repo,
} = useRepository();

const { trends } =
  useTrends(owner, repo);

const {
  contributors,
} =
  useContributors(
    owner,
    repo
  );

const {
  repository,
} = useRepositoryInfo(
  owner,
  repo
);

console.log(
  "Repository:",
  owner,
  repo
);

const {
  analytics,
  history,
  loading,
} = useAnalytics(
  owner,
  repo
);
const {
  insights,
  summary,
} = useInsights(
  owner,
  repo
);
///

console.log(
  "Analytics",
  analytics
);

console.log(
  "History",
  history
);

console.log(
  "Insights",
  insights
);

  return (
      <DashboardLayout>

<div>
  {loading && (
    <div
      className="
      flex
      justify-center
      mb-4
      "
    >
      <Loader />
    </div>
  )}

<CommandCenterHero
  healthScore={
    analytics?.health_score ?? 0
  }
  velocityScore={
    analytics?.velocity_score ?? 0
  }
  busFactor={
    analytics?.bus_factor ?? 0
  }
  riskScore={
    analytics?.risk_score ?? 0
  }
/>
</div>
      <div
        className="
        grid

        xl:grid-cols-12

        gap-6
        "
      >
        <div
          className="
          xl:col-span-9

          space-y-6
          "
        >
<RepositoryHeader
  name={
    repository?.name ??
    repo
  }
  owner={
    repository?.owner ??
    owner
  }
  description={
    repository?.description ??
    "No description available"
  }
  language={
    repository?.language ??
    "Unknown"
  }
  stars={
    repository?.stars ?? 0
  }
/>

          <div
            className="
            grid

            xl:grid-cols-4
            md:grid-cols-2
            grid-cols-1

            gap-5
            "
          >
<MetricCard
  title="Health Score"
  value={analytics?.health_score ?? 0}
  subtitle="Current"
/>

<MetricCard
  title="Productivity"
  value={analytics?.productivity_score ?? 0}
  subtitle="Current"
/>

<MetricCard
  title="Velocity"
  value={analytics?.velocity_score ?? 0}
  subtitle="Current"
/>

<MetricCard
  title="Risk"
  value={analytics?.risk_score ?? 0}
  subtitle={
    (analytics?.risk_score ?? 0) >= 70
      ? "High Risk"
      : (analytics?.risk_score ?? 0) >= 40
      ? "Moderate Risk"
      : "Low Risk"
  }
/>
          </div>

          <h2
            className="
            text-2xl

            font-bold
            "
          >
            Engineering Trends
          </h2>

          <div
            className="
            grid

            xl:grid-cols-2

            gap-6
            "
          >
            <div className="h-[380px]">
              <HealthChart
                history={history ?? []}
              />
            </div>

            <div className="h-[380px]">
              <VelocityChart
                history={history ?? []}
              />
            </div>
          </div>

          <div
            className="
            grid

            xl:grid-cols-3
            md:grid-cols-2
            grid-cols-1

            gap-6
            "
          >
            <HoverCard>
<TrendCard
  title="Health Growth"
value={
  Number(
    trends?.health_growth ?? 0
  )
}
  trend={
    trends?.health_trend ??
    "stable"
  }
/>
            </HoverCard>

            <HoverCard>
<TrendCard
  title="Productivity Growth"
value={
  Number(
    trends?.productivity_growth ??
      0
  )
}
  trend={
    trends?.productivity_trend ??
    "stable"
  }
/>
            </HoverCard>

            <HoverCard>
<ContributorRiskCard
  busFactor={
    analytics?.bus_factor ??
    0
  }
  riskScore={
    analytics?.risk_score ??
    0
  }
/>
            </HoverCard>
          </div>

          <div className="glass p-8 rounded-3xl">
  <h2
  className="text-3xl font-black">
    AI Repository Overview
  </h2>

<div
  className="
  prose
  prose-lg
  max-w-none
  prose-headings:font-black
  prose-headings:text-black
  prose-p:text-gray-700
  prose-li:text-gray-700
  "
>
  <ReactMarkdown>
    {summary}
  </ReactMarkdown>
</div>
</div>

        <InsightsPanel
          insights={
            insights || []
          }
        />

<div
  className="
  grid
  xl:grid-cols-2
  gap-6
  mb-6
  "
>
  <ForecastChart
  history={history}
/>

  <RepositoryTimeline
  history={history}
/>
</div>

          <RecentSnapshotsTable
            snapshots={history}
          />
        </div>

        <div
          className="
          xl:col-span-3

          space-y-6

          sticky
          top-8

          self-start
          "
        >
          <HoverCard>
<ActivityFeed
  activities={[
    {
      title:
        `Analyzed ${owner}/${repo}`,
      time: "Current Session",
    },

    {
      title:
        `Health Score: ${
          analytics?.health_score ?? 0
        }`,
      time: "Analytics",
    },

    {
      title:
        `Velocity: ${
          analytics?.velocity_score ?? 0
        }`,
      time: "Analytics",
    },

    {
      title:
        `Risk Score: ${
          analytics?.risk_score ?? 0
        }`,
      time: "Analytics",
    },
  ]}
/>
          </HoverCard>
         <HoverCard>
<div
  className="
  glass
  rounded-3xl
  p-6
  shadow-xl
  "
>
  <h3
    className="
    text-xl
    font-bold
    mb-4
    "
  >
    Repository Status
  </h3>

  <div className="space-y-4">
    <div>
      <p className="text-gray-500">
        Health
      </p>

<p
  className="
  font-bold
  text-2xl
  "
>
  {(analytics?.health_score ?? 0) >= 70
    ? "Excellent"
    : (analytics?.health_score ?? 0) >= 40
    ? "Stable"
    : "Needs Attention"}
</p>
    </div>

    <div>
      <p className="text-gray-500">
        Last Analysis
      </p>

      <p>
        Live
      </p>
    </div>

    <div>
      <p className="text-gray-500">
        Contributors
      </p>

      <p>
        {
          analytics?.bus_factor ??
          0
        }
      </p>
    </div>
  </div>
</div>
          </HoverCard>
        </div>
      </div>
    </DashboardLayout>
  );
}