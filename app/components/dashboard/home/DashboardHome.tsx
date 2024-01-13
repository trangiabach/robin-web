import { Models } from "./Models";
import { Welcome } from "./Welcome";

export const DashboardHome = () => {
  return (
    <div className="mx-3 flex h-full w-full flex-grow flex-col overflow-y-auto rounded-lg border-primary md:ml-0">
      <Welcome />
      <Models />
    </div>
  );
};
