import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type State2State1Type = {
  className?: string;
  am?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const State2State1: FunctionComponent<State2State1Type> = ({
  className = "",
  am,
  propPadding,
  propAlignSelf,
  propFlex,
}) => {
  const state2State217Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propPadding, propAlignSelf, propFlex]);

  return (
    <button
      className={`cursor-pointer pt-[13px] px-[47px] pb-3 bg-backgroundcolor self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-end border-[2px] border-solid border-darkslategray hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-100 ${className}`}
      style={state2State217Style}
    >
      <div className="relative text-base font-paragraph text-black text-left inline-block min-w-[65px] whitespace-nowrap">
        {am}
      </div>
    </button>
  );
};

export default State2State1;