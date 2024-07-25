import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type State2StateType = {
  className?: string;
  riarrowDropDownLine?: string;
  am?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
};

const State2State: FunctionComponent<State2StateType> = ({
  className = "",
  riarrowDropDownLine,
  am,
  propAlignSelf,
  propFlex,
  propWidth,
}) => {
  const state2State218Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propWidth]);

  return (
    <button
      className={`cursor-pointer pt-[13px] pb-3 pr-[49px] pl-[52px] bg-backgroundcolor self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-darkslategray ${className}`}
      style={state2State218Style}
    >
      <div className="h-[190px] w-[65px] hidden flex-row items-center justify-center p-2.5 box-border gap-[10px]">
        <div className="w-[45px] relative text-base font-paragraph text-black text-left hidden">
          Name
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={riarrowDropDownLine}
        />
      </div>
      <div className="relative text-base font-paragraph text-black text-left inline-block min-w-[65px] whitespace-nowrap z-[1]">
        {am}
      </div>
    </button>
  );
};

export default State2State;