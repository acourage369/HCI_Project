import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNavTextContainerClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNavTextContainerClick1 = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  const onNavTextContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavTextContainerClick3 = useCallback(() => {
    navigate("/appointmentbook");
  }, [navigate]);

  const onNavTextContainerClick4 = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-coolgray-900 font-poppins ${className}`}
    >
      <div
        className="w-[1320px] bg-gray1 overflow-hidden shrink-0 flex flex-row items-start justify-between gap-[20px] max-w-full"
        data-scroll-to="nAVBARContainer"
      >
        <div className="flex flex-row items-start justify-start relative gap-[10px]">
          <h1 className="m-0 relative text-inherit leading-[120%] italic font-extrabold font-inherit shrink-0 mq1000:hidden">
            <p className="m-0 whitespace-pre-wrap">{`Comp    ter `}</p>
            <p className="m-0 text-darkorange whitespace-pre-wrap"> Doctor</p>
          </h1>
          <img
            className="h-[43px] w-[34.6px] absolute !m-[0] top-[-2px] right-[51.4px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/group@2x.png"
          />
        </div>
        <div className="w-[824px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border max-w-full text-base text-black font-paragraph mq975:w-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq975:hidden">
            <div className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] text-deepskyblue">
              <a className="[text-decoration:underline] relative text-[inherit] inline-block min-w-[46px]">
                Home
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div
              className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
              onClick={onNavTextContainerClick}
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[46px]">
                About
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div
              className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[31px] gap-[10px] cursor-pointer"
              onClick={onNavTextContainerClick1}
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[38px]">
                Faq’s
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div
              className="overflow-hidden flex flex-row items-start justify-start p-2.5 gap-[10px] cursor-pointer"
              onClick={onNavTextContainerClick2}
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[61px]">
                Services
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div
              className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[5px] gap-[10px] cursor-pointer"
              onClick={onNavTextContainerClick3}
            >
              <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
                Book Appointment
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div
              className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-[11px] gap-[10px] cursor-pointer"
              onClick={onNavTextContainerClick4}
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]">
                Contact
              </a>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/riarrowdropdownline.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img
                className="w-[31px] h-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/basilsearchsolid.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;