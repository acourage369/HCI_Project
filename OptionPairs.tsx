import { FunctionComponent } from "react";

export type OptionPairsType = {
  className?: string;
  learnMoreAboutClarizentSe?: string;
  scopeMyProject?: string;
};

const OptionPairs: FunctionComponent<OptionPairsType> = ({
  className = "",
  learnMoreAboutClarizentSe,
  scopeMyProject,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-base text-coolgray-600 font-paragraph ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
          <input className="m-0 w-4 h-4 relative rounded-sm" type="checkbox" />
        </div>
        <div className="flex-1 relative leading-[170%] inline-block min-w-[213px] max-w-full">
          {learnMoreAboutClarizentSe}
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
          <input className="m-0 w-4 h-4 relative rounded-sm" type="checkbox" />
        </div>
        <div className="flex-1 relative leading-[170%] inline-block min-w-[102px] max-w-full">
          {scopeMyProject}
        </div>
      </div>
    </div>
  );
};

export default OptionPairs;