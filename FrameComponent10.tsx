import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onReadMoreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch rounded-xl bg-secondary overflow-hidden flex flex-col items-center justify-start py-[45px] px-5 box-border gap-[30px] max-w-full text-center text-21xl text-black font-inter ${className}`}
    >
      <div className="w-[788px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[622px] relative text-inherit font-bold font-inherit flex items-center justify-center shrink-0 mq450:text-13xl mq725:text-5xl">
          Find a laptop repair expert now!
        </h1>
      </div>
      <h3 className="m-0 w-[788px] relative text-5xl font-light font-inherit text-darkslategray flex items-center justify-center max-w-full mq725:text-lgi">
        Book an appointment with us now and let us repair your laptop for you
      </h3>
      <div className="w-[788px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[360px] flex flex-row items-start justify-between max-w-full gap-[20px] mq725:flex-wrap mq725:justify-center">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
            <div className="rounded-lg bg-primary flex flex-row items-start justify-start py-3.5 px-4 whitespace-nowrap">
              <b
                className="relative text-base leading-[120%] inline-block font-heading-5 text-backgroundcolor text-left min-w-[106px] cursor-pointer"
                onClick={onReadMoreTextClick}
              >
                View Services
              </b>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[117px] flex flex-row items-start justify-start">
            <div className="flex-1 rounded-lg bg-backgroundcolor flex flex-row items-start justify-start py-[11px] px-3.5 whitespace-nowrap border-[2px] border-solid border-deepskyblue">
              <b className="relative text-base leading-[120%] inline-block font-heading-5 text-deepskyblue text-left min-w-[85px]">
                Contact Us
              </b>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;