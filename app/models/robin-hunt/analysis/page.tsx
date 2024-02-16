import { MetricContainer } from "@/app/components/models/metrics/MetricsContainer";
import { MetricsControlPanel } from "@/app/components/models/metrics/MetricsControlPanel";
import { MetricsDashboard } from "@/app/components/models/metrics/MetricsDashboard";

export default function AnalysisPage() {
  return (
    <MetricContainer>
      <MetricsDashboard />
      <MetricsControlPanel />
    </MetricContainer>
  );
}
