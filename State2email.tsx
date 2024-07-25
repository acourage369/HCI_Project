import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type State2emailType = {
  className?: string;
  home?: string;
  riarrowDropDownLine?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const State2email: FunctionComponent<State2emailType> = ({
  className = "",
  home,
  riarrowDropDownLine,
  propPadding,
}) => {
  const state2emailStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <button
      className={`cursor-pointer py-2 px-[38px] bg-backgroundcolor self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-end border-[2px] border-solid border-darkslategray ${className}`}
      style={state2emailStyle}
    >
      <div className="flex flex-row items-start justify-start p-2.5 gap-[10px]">
        <div className="relative text-base font-paragraph text-black text-left inline-block min-w-[65px] whitespace-nowrap">
          {home}
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={riarrowDropDownLine}
        />
      </div>
    </button>
  );
};

export default State2email;