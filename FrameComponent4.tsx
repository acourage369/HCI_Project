import { FunctionComponent } from "react";
import Content from "./Content";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-start justify-start pt-[90px] pb-[91px] pr-7 pl-[29px] box-border gap-[10px] min-w-[255px] max-w-[312px] text-center text-3xl text-coolgray-900 font-heading-5 mq975:pt-[58px] mq975:pb-[59px] mq975:box-border ${className}`}
    >
      <Content
        icon="/icon.svg"
        customerSupport="Great Team"
        weHaveAOfComputerExpertRe="We have a of computer expert ready to solve your problem "
      />
      <div className="self-stretch w-[255px] hidden flex-col items-center justify-start gap-[24px]">
        <img className="w-20 h-20 relative" alt="" src="/icon-1.svg" />
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
          <b className="self-stretch h-[26px] relative leading-[120%] inline-block mq975:text-lg mq975:leading-[21px]">
            Customer Support
          </b>
          <div className="self-stretch flex-1 relative text-base leading-[170%] font-paragraph text-coolgray-600">
            The self-interest been children. I knowing train the instruments,
            actually
          </div>
        </div>
      </div>
      <div className="self-stretch w-[255px] hidden flex-col items-center justify-start gap-[24px]">
        <img className="w-20 h-20 relative" alt="" src="/icon-2.svg" />
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
          <b className="self-stretch h-[26px] relative leading-[120%] inline-block mq975:text-lg mq975:leading-[21px]">
            Quality Guarantee
          </b>
          <div className="self-stretch flex-1 relative text-base leading-[170%] font-paragraph text-coolgray-600">{`Must understood. Handpainted, who very unmolested periodic your film design `}</div>
        </div>
      </div>
      <div className="self-stretch w-[255px] hidden flex-col items-center justify-start gap-[24px] font-manrope">
        <img className="w-20 h-20 relative" alt="" src="/icon-3.svg" />
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
          <b className="self-stretch h-[26px] relative leading-[120%] inline-block mq975:text-lg mq975:leading-[21px]">
            Free Delivery
          </b>
          <div className="self-stretch flex-1 relative text-base leading-[170%] font-paragraph text-coolgray-600">
            The slept control by first be right, and left men's own tin, without
            at the in project
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;