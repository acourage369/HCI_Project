import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type CALLOUTBOXType = {
  className?: string;
};

const CALLOUTBOX: FunctionComponent<CALLOUTBOXType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-secondary flex flex-row flex-wrap items-center justify-center py-28 px-[300px] box-border max-w-full [row-gap:20px] text-left text-13xl text-coolgray-900 font-heading-5 mq450:pl-[75px] mq450:pr-[75px] mq450:box-border mq975:pt-[73px] mq975:pb-[73px] mq975:box-border mq1000:pl-[150px] mq1000:pr-[150px] mq1000:box-border ${className}`}
    >
      <div className="h-[155px] flex flex-row items-start justify-start">
        <div className="h-40 w-[5px] relative bg-secondary box-border border-r-[5px] border-solid border-secondary" />
      </div>
      <div className="flex-1 shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] bg-backgroundcolor flex flex-row items-center justify-start p-10 box-border gap-[10px] min-w-[855px] max-w-full mq725:flex-wrap mq725:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[720px] max-w-full mq725:min-w-full">
          <h1 className="m-0 w-[1011px] relative text-inherit leading-[120%] font-bold font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[31px] mq975:text-lgi mq975:leading-[23px]">
            Get your laptop fix in 24 hours
          </h1>
          <div className="self-stretch relative text-base leading-[170%] font-paragraph text-coolgray-600">
            We have strong feelings about planning. So strong, in fact, that we
            believe they deserve their own manifesto.
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-3.5 px-4 bg-secondary rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200"
          onClick={onBtnClick}
        >
          <b className="relative text-base leading-[120%] inline-block font-heading-5 text-backgroundcolor text-left min-w-[85px]">
            Contact Us
          </b>
        </button>
      </div>
    </section>
  );
};

export default CALLOUTBOX;