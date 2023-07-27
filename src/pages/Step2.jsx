import Sidebar from "../components/Sidebar"
import { useFormData } from "../context/FormDataContext"
import { Link } from "react-router-dom"

const Step1 = () => {
  const { useFormDataValues, changeMonthlyBilling, changeSelectedPlanIndex } =
    useFormData()
  const { monthlyBilling, selectedPlanIndex } = useFormDataValues()

  const plans = [
    {
      title: "Arcade",
      yearlyPrice: "$90/yr",
      monthlyPrice: "$9/mo",
      icon: "/icon-arcade.svg"
    },
    {
      title: "Advanced",
      yearlyPrice: "$120/yr",
      monthlyPrice: "$12/mo",
      icon: "/icon-advanced.svg"
    },
    {
      title: "Pro",
      yearlyPrice: "$150/yr",
      monthlyPrice: "$15/mo",
      icon: "/icon-pro.svg"
    }
  ]

  return (
    <>
      <Sidebar selectedIndex={1} />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[28.5rem] flex flex-col">
          <div className="w-full">
            <h3 className="text-3xl text-[32px] mt-10 font-[700] dark_blue_text">
              Select your plan
            </h3>
            <p className="text-base mt-2.5 font-[400] light_gray_text">
              You have the option of monthly or yearly billing.
            </p>
            <div className="mt-9 pt-0.5 flex gap-4">
              {plans.map((item, index) => {
                return (
                  <button
                    type="button"
                    key={`plans${index}`}
                    className={`border cursor-pointer select-none hover:dark_blue_border box_radius w-1/4 flex-grow flex flex-col px-4 pt-5 pb-4 ${
                      index === selectedPlanIndex
                        ? "dark_blue_border bg-slate-100"
                        : "border_color"
                    }`}
                    onClick={() => {
                      changeSelectedPlanIndex(index)
                    }}
                  >
                    <div className="w-10 h-10">
                      <img src={item.icon} alt="card icon" />
                    </div>
                    <h5 className="mt-9 dark_blue_text font-[700]">
                      {item.title}
                    </h5>
                    <p className="mt-0.5 light_gray_text text-sm">
                      {monthlyBilling ? item.monthlyPrice : item.yearlyPrice}
                    </p>
                    <p
                      className={`mt-1.5 font-[500] dark_blue_text text-sm ${
                        monthlyBilling && "hidden"
                      }`}
                    >
                      2 months free
                    </p>
                  </button>
                )
              })}
            </div>
            <div className="w-full flex-grow select-none">
              <div className="box_radius flex bg-slate-50 w-full font-[700] light_gray_text h-12 mt-8 items-center justify-center">
                <button
                  type="button"
                  onClick={() => {
                    changeMonthlyBilling(true)
                  }}
                  className={`text-sm min-w-[5.5rem] text-center box_radius py-2 px-4 cursor-pointer hover:bg-slate-100 ${
                    monthlyBilling && "dark_blue_text"
                  }`}
                >
                  Monthly
                </button>
                <div
                  className={`flex dark_blue_bg rounded-full h-5 w-9 p-1 mx-2 ${
                    !monthlyBilling && "justify-end"
                  }`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    changeMonthlyBilling(false)
                  }}
                  className={`text-sm min-w-[5.5rem] text-center box_radius py-2 px-4 cursor-pointer hover:bg-slate-100 ${
                    !monthlyBilling && "dark_blue_text"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-end justify-between pt-6 pb-4 select-none">
            <Link to="/">
              <button className="rounded-lg light_gray_text hover:bg-neutral-100 px-6 py-3 font-[500]">
                Go Back
              </button>
            </Link>
            <Link to="/step-3">
              <button className="rounded-lg dark_blue_bg text-white px-6 py-3 font-[500]">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1
