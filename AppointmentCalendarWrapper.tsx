import { FunctionComponent } from "react";
import Property1Variant from "./Property1Variant";
import State2email from "./State2email";
import State2State1 from "./State2State1";
import State2State from "./State2State";

export type AppointmentCalendarWrapperType = {
  className?: string;
};

const AppointmentCalendarWrapper: FunctionComponent<
  AppointmentCalendarWrapperType
> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[64px] max-w-full text-left text-5xl text-black font-inter mq450:gap-[32px] mq725:gap-[16px] mq1000:flex-wrap ${className}`}
    >
      <div className="w-[502px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch shadow-[0px_100px_80px_rgba(0,_0,_0,_0.07),_0px_41.8px_33.42px_rgba(0,_0,_0,_0.05),_0px_22.3px_17.87px_rgba(0,_0,_0,_0.04),_0px_12.5px_10.02px_rgba(0,_0,_0,_0.04),_0px_6.7px_5.32px_rgba(0,_0,_0,_0.03),_0px_2.8px_2.21px_rgba(0,_0,_0,_0.02)] rounded-2xl bg-backgroundcolor flex flex-col items-start justify-start p-[30px] gap-[12px] mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
            <div className="relative font-black inline-block min-w-[121px] mq725:text-lgi">
              May 2023
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-row items-start justify-start p-4">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/chevron-wrapper.svg"
                />
              </div>
              <img
                className="h-[46px] w-[46px] object-contain min-h-[46px]"
                alt=""
                src="/chevron@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start text-center text-sm">
            <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq725:flex-wrap">
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0 min-w-[24px]">
                  Mo
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[1] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0">
                  Tu
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[2] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0 min-w-[24px]">
                  We
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[3] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0">
                  Th
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[4] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0">
                  Fr
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[5] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0">
                  Sa
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-5 box-border min-w-[63px] max-w-[64px] z-[6] ml-[-1px]">
                <div className="self-stretch h-6 relative font-semibold flex items-center justify-center shrink-0">
                  Su
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] z-[7] mt-[-1px] mq725:flex-wrap">
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  1
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[1] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  2
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[2] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  3
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[3] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  4
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[4] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  5
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[5] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  6
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[6] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  7
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] z-[8] mt-[-1px] mq725:flex-wrap">
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  8
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[1] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  9
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[2] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  10
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[3] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  11
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[4] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  12
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[5] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  13
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[6] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  14
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] z-[9] mt-[-1px] mq725:flex-wrap">
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  15
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[1] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  16
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[2] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  17
                </div>
              </div>
              <div className="flex-1 bg-active box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[3] ml-[-1px] text-backgroundcolor border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative font-semibold flex items-center justify-center shrink-0">
                  18
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[4] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  19
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[5] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  20
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[6] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  21
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] z-[10] mt-[-1px] mq725:flex-wrap">
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  22
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[1] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  23
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[2] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  24
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[3] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  25
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[4] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  26
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[5] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  27
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[6] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  28
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] z-[11] mt-[-1px] text-darkgray mq725:flex-wrap">
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] text-black border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  29
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[1] ml-[-1px] text-black border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  30
                </div>
              </div>
              <div className="flex-1 box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[2] ml-[-1px] text-black border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  31
                </div>
              </div>
              <div className="flex-1 bg-inactive box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[3] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  1
                </div>
              </div>
              <div className="flex-1 bg-inactive box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[4] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  2
                </div>
              </div>
              <div className="flex-1 bg-inactive box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[5] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  3
                </div>
              </div>
              <div className="flex-1 bg-inactive box-border flex flex-col items-center justify-center py-[18px] px-[19px] min-w-[63px] max-w-[64px] z-[6] ml-[-1px] border-[1px] border-solid border-stroke">
                <div className="w-6 h-6 relative flex items-center justify-center shrink-0">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-8xs overflow-hidden flex flex-col items-start justify-start p-5 gap-[20px] border-[1px] border-dashed border-blueviolet">
        <Property1Variant vector="/vector-14.svg" propBackgroundColor="#fff" />
        <Property1Variant vector="/vector-24.svg" />
      </div>
      <div className="w-[599px] rounded-8xs box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[31px] px-[17px] max-w-full border-[1px] border-dashed border-blueviolet mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="w-[552px] flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-end justify-start gap-[20px] min-w-[132px]">
            <State2email
              home="9:00am"
              riarrowDropDownLine="/riarrowdropdownline.svg"
              propPadding="2px 41px 3px"
            />
            <State2email
              home="10:00am"
              riarrowDropDownLine="/riarrowdropdownline.svg"
            />
            <State2State1
              am="11:00am"
              propPadding="12px 49px 13px 52px"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <State2State1
              am="3:00pm"
              propPadding="13px 52px 12px"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <State2State1
              am="12:00am"
              propPadding="13px 50px 12px"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0">
              <State2State1
                am="2:00pm"
                propPadding="13px 53px 12px 56px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[20px] min-w-[132px]">
            <State2State
              riarrowDropDownLine="/riarrowdropdownline.svg"
              am="10:00am"
              propAlignSelf="unset"
              propFlex="unset"
              propWidth="170px"
            />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-1">
              <State2State1
                am="1:00pm"
                propPadding="18px 53px 18px 56px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-1">
              <State2State1
                am="10:00am"
                propPadding="12px 47px 13px 54px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0">
              <State2State
                riarrowDropDownLine="/riarrowdropdownline.svg"
                am="1:00pm"
                propAlignSelf="unset"
                propFlex="1"
                propWidth="unset"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[3px]">
              <State2State1
                am="2:00pm"
                propPadding="13px 52px 12px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0.5">
              <State2State1
                am="11:00am"
                propPadding="13px 49px 12px 52px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[19.6px] min-w-[132px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <State2State1
                am="1:00pm"
                propPadding="12px 53px 13px 56px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <State2State1
                am="12:00am"
                propPadding="19px 45px"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
            <State2State1
              am="11:00am"
              propPadding="12px 47px 13px"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <State2State1
              am="10:00am"
              propPadding="13px 45px 12px"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <State2State1 am="11:00am" />
            <State2State
              riarrowDropDownLine="/riarrowdropdownline.svg"
              am="12:00am"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendarWrapper;