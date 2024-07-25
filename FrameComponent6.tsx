import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start pt-[161px] pb-[322px] pr-5 pl-[105px] box-border bg-[url('/public/frame-419@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[825px] max-w-full text-center text-13xl text-backgroundcolor font-paragraph mq450:pl-[26px] mq450:pt-[105px] mq450:pb-[209px] mq450:box-border mq1000:pl-[52px] mq1000:box-border ${className}`}
    >
      <div className="w-[1333px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="w-[800px] rounded-lg flex flex-col items-start justify-end pt-[147px] px-0 pb-0 box-border gap-[40px] max-w-full z-[1] mq975:gap-[20px]">
          <div className="self-stretch h-[115px] relative hidden" />
          <h1 className="m-0 self-stretch relative text-inherit leading-[170%] font-normal font-inherit mq450:text-7xl mq450:leading-[44px] mq975:text-lgi mq975:leading-[33px]">
            Book an appointment to repair your electronic gadgets
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <button
                className="cursor-pointer [border:none] py-3.5 px-4 bg-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg overflow-hidden flex flex-row items-center justify-center gap-[8px] whitespace-nowrap hover:bg-steelblue"
                onClick={onBtnClick}
              >
                <b className="relative text-base leading-[120%] inline-block font-heading-5 text-backgroundcolor text-left min-w-[106px]">
                  View Services
                </b>
                <img
                  className="h-3.5 w-[7px] relative hidden"
                  alt=""
                  src="/vector.svg"
                />
              </button>
              <button
                className="cursor-pointer p-0 bg-backgroundcolor rounded-lg flex flex-col items-center justify-center border-[2px] border-solid border-deepskyblue"
                onClick={onButtonClick}
              >
                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                  <b className="relative text-base inline-block font-heading-5 text-deepskyblue text-center min-w-[85px]">
                    Contact Us
                  </b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-0 relative text-77xl leading-[120%] font-bold font-heading-5 inline-block max-w-full mt-[-321px] mq450:text-29xl mq450:leading-[69px] mq975:text-10xl mq975:leading-[46px]">
        24/7 Repair Service Available
      </h1>
    </div>
  );
};

export default FrameComponent6;