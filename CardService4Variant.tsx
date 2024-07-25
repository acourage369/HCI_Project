import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardService4VariantType = {
  className?: string;
  icon?: string;
  repairDevices?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propBorderRadius?: CSSProperties["borderRadius"];
};

const CardService4Variant: FunctionComponent<CardService4VariantType> = ({
  className = "",
  icon,
  repairDevices,
  propWidth,
  propMinWidth,
  propBorderRadius,
}) => {
  const cardService4Variant2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      borderRadius: propBorderRadius,
    };
  }, [propWidth, propMinWidth, propBorderRadius]);

  return (
    <div
      className={`w-[634px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-backgroundcolor flex flex-row items-start justify-start py-0 px-0 box-border min-w-[634px] max-w-full text-left text-3xl text-black font-heading-5 mq450:min-w-full mq1000:flex-1 ${className}`}
      style={cardService4Variant2Style}
    >
      <div className="w-[648px] rounded-lg flex flex-row items-center justify-center py-4 px-3.5 box-border gap-[24px] max-w-[103%] shrink-0 mq450:flex-wrap">
        <img className="h-20 w-20 relative" alt="" src={icon} />
        <div className="flex-1 flex flex-col items-start justify-start py-5 pr-5 pl-0 box-border gap-[8px] min-w-[335px] max-w-full">
          <b className="relative leading-[120%] inline-block min-w-[122px] mq725:text-lg mq725:leading-[21px]">
            {repairDevices}
          </b>
          <div className="w-[515px] relative text-base leading-[170%] font-paragraph hidden max-w-full">
            2hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardService4Variant;