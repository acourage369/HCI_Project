import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBookAServiceClick = useCallback(() => {
    navigate("/appointmentbook");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[39px] pr-[21px] pl-5 box-border max-w-full text-left text-13xl text-coolgray-900 font-heading-5 ${className}`}
    >
      <div className="w-[1141px] shadow-[0px_4px_90px_rgba(163,_171,_185,_0.24)] rounded-13xl bg-backgroundcolor flex flex-col items-start justify-start pt-12 pb-[59px] pr-[306px] pl-12 box-border gap-[48px] max-w-full mq450:gap-[24px] mq450:pr-[76px] mq450:box-border mq975:pr-5 mq975:box-border mq1000:pl-6 mq1000:pr-[153px] mq1000:box-border">
        <div className="flex flex-col items-start justify-start gap-[8px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap">
            <img
              className="h-[32.5px] w-[32.5px] relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[31px] mq975:text-lgi mq975:leading-[23px]">
              Request a Service Repair
            </h1>
          </div>
          <h1 className="m-0 relative text-inherit leading-[170%] font-normal font-paragraph text-coolgray-600 mq450:text-7xl mq450:leading-[44px] mq975:text-lgi mq975:leading-[33px]">
            Book an appointment with us now
          </h1>
        </div>
        <form className="m-0 self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[406px] max-w-full mq450:flex-wrap mq450:min-w-full">
            <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
              <input
                className="w-[43px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[19px] relative leading-[120%] text-coolgray-600 text-left inline-block p-0"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start py-3.5 px-6 min-w-[195px] border-[1px] border-solid border-coolgray-300">
              <input
                className="w-[104px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-[19px] relative leading-[120%] text-coolgray-600 text-left inline-block p-0"
                placeholder="Email Address"
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer py-[3px] px-0 bg-backgroundcolor rounded-lg flex flex-col items-center justify-center border-[2px] border-solid border-deepskyblue">
            <div className="flex flex-row items-center justify-center p-2.5">
              <div
                className="relative text-base font-semibold font-inter text-deepskyblue text-center inline-block min-w-[118px] cursor-pointer"
                onClick={onBookAServiceClick}
              >
                Book A Service
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent5;