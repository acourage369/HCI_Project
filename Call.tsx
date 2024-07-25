import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CallType = {
  className?: string;
  icon?: string;
  directCallUs?: string;
  numberSeparator?: string;
  numberSeparator1?: string;
  showNumberSeparator?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Call: FunctionComponent<CallType> = ({
  className = "",
  icon,
  directCallUs,
  numberSeparator,
  numberSeparator1,
  showNumberSeparator,
  propWidth,
}) => {
  const callStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[139px] flex flex-col items-center justify-start gap-[16px] text-left text-3xl text-coolgray-900 font-heading-5 ${className}`}
      style={callStyle}
    >
      <img
        className="w-[50px] h-[50px] relative"
        loading="lazy"
        alt=""
        src={icon}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq725:text-lg mq725:leading-[21px]">
          {directCallUs}
        </h3>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[7px] text-base text-coolgray-600 font-lato">
          <div className="self-stretch relative leading-[170%] whitespace-nowrap">
            {numberSeparator}
          </div>
          {showNumberSeparator && (
            <div className="self-stretch relative leading-[170%] font-paragraph whitespace-nowrap">
              {numberSeparator1}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Call;