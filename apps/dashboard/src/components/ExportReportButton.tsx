import AnimatedButton from "./AnimatedButton";

export default function ExportReportButton() {
  const exportJson = () => {
    const data = {
      health: 80,
      velocity: 52,
      risk: 20,
    };

    const blob =
      new Blob(
        [
          JSON.stringify(
            data,
            null,
            2
          ),
        ],
        {
          type:
            "application/json",
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        "a"
      );

    a.href = url;

    a.download =
      "orzyn-report.json";

    a.click();
  };

  return (
    <AnimatedButton variant="primary"
      onClick={exportJson}
    >
      EXPORT REPORT
    </AnimatedButton>
  );
}