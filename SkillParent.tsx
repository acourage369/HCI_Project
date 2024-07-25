import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FOOTER from "./FOOTER";

export type SkillParentType = {
  className?: string;
};

const SkillParent: FunctionComponent<SkillParentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onMobifixTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onReadMoreTextClick = useCallback(() => {
    navigate("/appointmentbook");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[74px] max-w-full text-left text-19xl text-coolgray-900 font-heading-5 mq450:gap-[18px] mq975:gap-[37px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <div className="w-[1351px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full mq450:gap-[56px] mq725:gap-[28px]">
          <div className="flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit mq725:text-4xl mq725:leading-[27px] mq975:text-11xl mq975:leading-[36px]">
                Our Repairs are Quick and Affordable
              </h1>
              <div className="w-[535.9px] relative text-base leading-[170%] font-paragraph text-coolgray-600 inline-block max-w-full">
                At our repair service, we prioritize efficiency and
                cost-effectiveness. Our team is dedicated to providing fast
                solutions without compromising quality. Whether you need a quick
                fix for your appliance or a more complex repair, we have the
                expertise to get the job done right.
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
              <div className="rounded-lg bg-primary flex flex-row items-center justify-center py-3.5 px-4 whitespace-nowrap">
                <b
                  className="relative text-base leading-[120%] font-heading-5 text-backgroundcolor text-left cursor-pointer"
                  onClick={onReadMoreTextClick}
                >
                  Book Appoinment
                </b>
              </div>
            </button>
          </div>
        </div>
      </div>
      <FOOTER
        vector="/vector.svg"
        infoIcons="/vector-21.svg"
        vector1="/vector-31.svg"
        vector2="/vector-4.svg"
        mailIcon="/mail-icon.svg"
        group="/group-11@2x.png"
        onHomeTextClick={onMobifixTextClick}
      />
    </section>
  );
};

export default SkillParent;