import { ModelOption } from "./ModelOption";
import { ModelOptionsContainer } from "./ModelOptionContainer";
import { SiGoogleanalytics } from "react-icons/si";
import { SiAffine } from "react-icons/si";
import { GetHelp } from "./GetHelp";

export const ModelNavbar = () => {
  return (
    <div className="mx-3">
      <div className="flex justify-between rounded-lg border-primary p-3">
        <div className="flex w-full items-center justify-between">
          <ModelOptionsContainer>
            <ModelOption name="Metrics" icon={SiGoogleanalytics} />
            <ModelOption name="Fine-tuning" icon={SiAffine} />
          </ModelOptionsContainer>
          <div className="hidden md:block">
            <div className="flex w-full items-center justify-between space-x-2">
              <GetHelp />
              <ModelOption
                name="Robin-hunt Overview"
                className="min-w-[95px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
