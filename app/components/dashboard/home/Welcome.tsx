const mockUser = {
  firstName: "Kevin",
  gmail: "kevinluo@gmail.com",
};

export const Welcome = () => {
  return (
    <div className="mb-8 border-b-primary bg-accent md:mb-10 flex-shrink-0 text-white">
      <div className="flex w-full flex-col overflow-hidden md:flex-row">
        <div className="flex flex-col px-4 pt-6 md:w-2/3 md:px-9 md:pt-10 lg:px-10">
          <div className="text-2xl lg:text-4xl robin-variable-cut font-[420] mb-6">
            Welcome!
          </div>
          <div className="text-md lg:text-lg font-variable font-[420] mb-3 robin-variable">
            What is Robin?
          </div>
          <div className="text-overline font-body pb-6 robin-text md:pb-10 opacity-80">
            Robin allows you to detect fraudulence for any healthcare claims and
            providers, while providing you with in-depth analysis of anomalies
            and fraud indicators. Get started by choosing which Robin models you
            want to experiment with!
          </div>
        </div>
      </div>
    </div>
  );
};
