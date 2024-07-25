import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContentType = {
  className?: string;
  icon?: string;
  customerSupport?: string;
  weHaveAOfComputerExpertRe?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
  icon,
  customerSupport,
  weHaveAOfComputerExpertRe,
  propPadding,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] gap-[24px] text-center text-3xl text-coolgray-900 font-heading-5 ${className}`}
      style={contentStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img className="h-20 w-20 relative" loading="lazy" alt="" src={icon} />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <h3 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq975:text-lg mq975:leading-[21px]">
          {customerSupport}
        </h3>
        <div className="self-stretch relative text-base leading-[170%] font-paragraph text-coolgray-600">
          {weHaveAOfComputerExpertRe}
        </div>
      </div>
    </div>
  );
};

export default Content;