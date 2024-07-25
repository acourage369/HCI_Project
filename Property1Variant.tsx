import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Property1VariantType = {
  className?: string;
  vector?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1Variant: FunctionComponent<Property1VariantType> = ({
  className = "",
  vector,
  propBackgroundColor,
}) => {
  const property1Variant2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`rounded-lg bg-hover flex flex-row items-start justify-start p-4 box-border w-[50px] h-[50px] ${className}`}
      style={property1Variant2Style}
    >
      <img className="h-[18px] w-[18px] relative" alt="" src={vector} />
    </div>
  );
};

export default Property1Variant;