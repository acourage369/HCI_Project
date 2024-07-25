import { FunctionComponent } from "react";
import Content from "./Content";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-start justify-start pt-[91px] pb-[90px] pr-7 pl-[29px] box-border gap-[10px] min-w-[255px] max-w-[312px] text-center text-3xl text-coolgray-900 font-heading-5 mq975:pt-[59px] mq975:pb-[58px] mq975:box-border ${className}`}
    >
      <div className="h-[219px] w-[255px] relative hidden">
        <img
          className="absolute h-[36.53%] w-[31.37%] top-[0%] right-[34.31%] bottom-[63.47%] left-[34.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon-8.svg"
        />
        <div className="absolute top-[104px] left-[0px] w-[255px] flex flex-col items-center justify-start gap-[8px]">
          <b className="self-stretch h-[26px] relative leading-[120%] inline-block mq975:text-lg mq975:leading-[21px]">
            Great Team
          </b>
          <div className="self-stretch flex-1 relative text-base leading-[170%] font-paragraph text-coolgray-600">{`We have a of computer expert ready to solve your problem `}</div>
        </div>
      </div>
      <div className="self-stretch w-[255px] hidden flex-col items-center justify-start gap-[24px]">
        <img className="w-20 h-20 relative" alt="" src="/icon-9.svg" />
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
      <Content
        icon="/icon-10.svg"
        customerSupport="Quality Guarantee"
        weHaveAOfComputerExpertRe="Must understood. Handpainted, who very unmolested periodic your film design "
        propPadding="unset"
      />
      <div className="self-stretch w-[255px] hidden flex-col items-center justify-start gap-[24px] font-manrope">
        <img className="w-20 h-20 relative" alt="" src="/icon-11.svg" />
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

export default FrameComponent2;