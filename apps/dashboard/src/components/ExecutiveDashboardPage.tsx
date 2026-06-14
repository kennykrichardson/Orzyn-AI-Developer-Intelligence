import DashboardLayout from "../layout/DashboardLayout";

export default function ExecutiveDashboardPage() {
  return (
    <DashboardLayout>
      <div
        className="
        space-y-6
        "
      >
        <h1
          className="
          text-5xl

          font-black
          "
        >
          Executive Overview
        </h1>

        <div
          className="
          grid

          grid-cols-4

          gap-6
          "
        >
          <div className="glass rounded-3xl p-6 shadow-xl">
            Health: 84
          </div>

          <div className="glass rounded-3xl p-6 shadow-xl">
            Risk: Low
          </div>

          <div className="glass rounded-3xl p-6 shadow-xl">
            Contributors: 67
          </div>

          <div className="glass rounded-3xl p-6 shadow-xl">
            Velocity: 52
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}