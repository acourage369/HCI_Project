import { FunctionComponent } from "react";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <div className="w-[1320px] flex flex-row items-start justify-start gap-[115px] max-w-full mq450:gap-[57px] mq725:gap-[29px] mq1000:flex-wrap">
        <div className="w-[533px] flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border min-w-[533px] max-w-full mq450:pt-[27px] mq450:box-border mq450:min-w-full mq1000:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[40px] mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[32px] mq450:gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq725:text-5xl mq725:leading-[29px] mq975:text-13xl mq975:leading-[38px]">{`We’re here to help you to Fixed all Phone, Laptops. `}</h1>
              <h3 className="m-0 self-stretch relative text-5xl leading-[170%] font-normal font-paragraph text-coolgray-600 mq725:text-lgi mq725:leading-[33px]">
                We’re here to help you fix all phones and laptops efficiently,
                professionally, and affordably, ensuring your devices work
                perfectly again.
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[40px] text-9xl mq450:flex-wrap mq450:gap-[20px]">
              <div className="w-[238.4px] flex flex-col items-start justify-start gap-[16px] min-w-[238.4px] mq450:flex-1">
                <img
                  className="w-[70px] h-[70px] relative"
                  loading="lazy"
                  alt=""
                  src="/icon1.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <h2 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit inline-block min-w-[111px] mq725:text-3xl mq725:leading-[27px]">
                    Delivery
                  </h2>
                  <h3 className="m-0 self-stretch relative text-5xl leading-[41px] font-normal font-paragraph text-coolgray-600 mq725:text-lgi mq725:leading-[33px]">
                    In our all Services
                  </h3>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border min-w-[166px] mq725:gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="w-[70px] h-[70px] relative"
                    alt=""
                    src="/icon-19.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit mq725:text-3xl mq725:leading-[27px]">
                      A Grade Parts
                    </h2>
                    <h3 className="m-0 self-stretch relative text-5xl leading-[41px] font-normal font-paragraph text-coolgray-600 mq725:text-lgi mq725:leading-[33px]">
                      In our all devices
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[129px] rounded-lg bg-rose-500 hidden flex-row items-center justify-center py-3.5 px-4 box-border gap-[8px] whitespace-nowrap text-base text-backgroundcolor">
              <b className="flex-1 relative leading-[120%]">Read More</b>
              <img
                className="h-3.5 w-[7px] relative"
                alt=""
                src="/vector-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[585px] flex-1 flex flex-row items-start justify-start relative min-w-[437px] max-w-full mq450:min-w-full">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[52px] rounded-xl max-h-full w-[372px] object-cover"
              alt=""
              src="/box4@2x.png"
            />
            <div className="absolute top-[42px] left-[375px] rounded-xl w-56 h-[277px] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0px] top-[20px] [transform:scale(1.223)]"
                loading="lazy"
                alt=""
                src="/box3@2x.png"
              />
            </div>
            <div className="absolute top-[155px] left-[0px] rounded-xl w-[212px] h-[223px] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[0px] top-[20px] [transform:scale(1.236)]"
                alt=""
                src="/box2@2x.png"
              />
            </div>
            <div className="absolute top-[247px] left-[312px] rounded-xl w-[360px] h-[338px] z-[2] flex items-center justify-center">
              <img
                className="w-full h-full z-[2] object-contain absolute left-[0px] top-[20px] [transform:scale(1.148)]"
                alt=""
                src="/box1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;