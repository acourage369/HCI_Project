import { FunctionComponent, useCallback } from "react";
import ReplaceDevice from "./ReplaceDevice";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-13xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <div className="w-[1269.1px] flex flex-row items-start justify-center gap-[120.5px] max-w-full mq450:gap-[30px] mq975:gap-[15px] mq1000:flex-wrap mq1000:gap-[60px]">
        <img
          className="w-[476.6px] relative max-h-full object-cover shrink-0 max-w-full mq1000:flex-1"
          loading="lazy"
          alt=""
          src="/img@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border min-w-[437px] max-w-full mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] shrink-0 max-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[31px] mq975:text-lgi mq975:leading-[23px]">
                <p className="m-0">{`We’re here to help you to Fixed all type `}</p>
                <p className="m-0">{`Phone, iPhone and Laptops. `}</p>
              </h1>
              <div className="self-stretch relative text-base leading-[170%] font-paragraph text-coolgray-600">
                We specialize in repairing all types of phones, including
                iPhones, and laptops with professional and reliable service.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-base mq450:gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[40px] mq450:flex-wrap mq450:gap-[20px]">
                <ReplaceDevice
                  icon="/icon-16.svg"
                  replaceDevice="Replace Device"
                  delicacyForHumanAsSalesme="The were a claim hair was deep may she this carpeting "
                />
                <ReplaceDevice
                  icon="/icon-17.svg"
                  replaceDevice="Repair Device"
                  delicacyForHumanAsSalesme="Right systems textile either self-interest. Object hadn't"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full mq450:gap-[16px]">
                <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[341px] pl-0 box-border gap-[24px] max-w-full mq450:flex-wrap mq450:pr-[170px] mq450:box-border mq975:pr-5 mq975:box-border">
                  <img
                    className="h-[70px] w-[70px] relative"
                    alt=""
                    src="/icon-18.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[153px]">
                    <b className="relative leading-[120%]">
                      Buy and Sell Device
                    </b>
                    <div className="self-stretch relative leading-[170%] font-paragraph text-coolgray-600">{`Last how absolutely have attention and torn of up `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <button
                className="cursor-pointer [border:none] p-2.5 bg-deepskyblue rounded-lg flex flex-col items-start justify-start"
                onClick={onButtonClick}
              >
                <div className="flex flex-row items-center justify-center py-[3px] px-1.5">
                  <b className="relative text-base inline-block font-heading-5 text-backgroundcolor text-center min-w-[106px]">
                    View Services
                  </b>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[117px] flex flex-row items-start justify-start">
                <div className="flex-1 rounded-lg bg-backgroundcolor flex flex-row items-center justify-center py-[11px] px-3.5 whitespace-nowrap border-[2px] border-solid border-deepskyblue">
                  <b className="relative text-base leading-[120%] inline-block font-heading-5 text-deepskyblue text-left min-w-[85px]">
                    Contact Us
                  </b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;