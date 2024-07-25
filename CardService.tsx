import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardServiceType = {
  className?: string;
  img?: string;
  iPhoneRepair?: string;
  inTheSoonManyPerfectedOfT?: string;
  buttonIcons?: string;

  /** Style props */
  propBoxShadow?: CSSProperties["boxShadow"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
};

const CardService: FunctionComponent<CardServiceType> = ({
  className = "",
  img,
  iPhoneRepair,
  inTheSoonManyPerfectedOfT,
  buttonIcons,
  propBoxShadow,
  propBorderRadius,
  propBackgroundColor,
  propPadding,
}) => {
  const cardServiceStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBoxShadow, propBorderRadius, propBackgroundColor, propPadding]);

  return (
    <div
      className={`w-[424px] flex flex-col items-start justify-start gap-[32px] min-w-[403px] max-w-full text-left text-3xl text-coolgray-900 font-heading-5 mq450:min-w-full ${className}`}
      style={cardServiceStyle}
    >
      <img
        className="self-stretch h-72 relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={img}
      />
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[22px] gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <h3 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-lg mq450:leading-[21px]">
            {iPhoneRepair}
          </h3>
          <div className="self-stretch relative text-base leading-[170%] font-paragraph text-coolgray-600 text-center">
            {inTheSoonManyPerfectedOfT}
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-center gap-[8px] text-base text-primary">
          <b className="relative leading-[120%] inline-block min-w-[82px]">
            Read More
          </b>
          <img className="h-3.5 w-[7px] relative" alt="" src={buttonIcons} />
        </div>
      </div>
    </div>
  );
};

export default CardService;