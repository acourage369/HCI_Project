import { FunctionComponent } from "react";

export type ReplaceDeviceType = {
  className?: string;
  icon?: string;
  replaceDevice?: string;
  delicacyForHumanAsSalesme?: string;
};

const ReplaceDevice: FunctionComponent<ReplaceDeviceType> = ({
  className = "",
  icon,
  replaceDevice,
  delicacyForHumanAsSalesme,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-0 px-0 box-border gap-[24px] min-w-[205px] text-left text-base text-coolgray-900 font-heading-5 ${className}`}
    >
      <img className="h-[70px] w-[70px] relative shrink-0" alt="" src={icon} />
      <div className="w-[236.4px] flex flex-col items-start justify-start gap-[8px] shrink-0">
        <b className="relative leading-[120%] inline-block min-w-[116px]">
          {replaceDevice}
        </b>
        <div className="self-stretch relative leading-[170%] font-paragraph text-coolgray-600">
          {delicacyForHumanAsSalesme}
        </div>
      </div>
    </div>
  );
};

export default ReplaceDevice;