export const MetricCount = () => {
  return (
    <div>
      <div className="uppercase text-lg text-primary">Statistics</div>
      <div className="stats text-white stats-vertical bg-black">
        <div className="stat ps-0">
          <div className="stat-title">Total Flagged Providers</div>
          <div className="stat-value text-[25px] text-primary">
            14 Providers
          </div>
          <div className="stat-desc opacity-80">21% more than expected</div>
        </div>
        <div className="stat border-t-primary ps-0">
          <div className="stat-title">Average Flagging Confidence</div>
          <div className="stat-value text-[25px] text-primary">90%</div>
          <div className="stat-desc opacity-80">10% more than average</div>
        </div>
        <div className="stat border-t-primary ps-0">
          <div className="stat-title">Latency</div>
          <div className="stat-value text-[25px] text-primary">131ms / row</div>
          <div className="stat-desc opacity-80">10% lower than average</div>
        </div>
      </div>
    </div>
  );
};
