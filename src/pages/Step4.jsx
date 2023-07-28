import Sidebar from "../components/Sidebar"
import { useFormData } from "../context/FormDataContext"
import { Link } from "react-router-dom"

const Step4 = () => {
  const { useFormDataValues } = useFormData()
  const { monthlyBilling, selectedPlanIndex, addons } = useFormDataValues()

  const plans = ["Arcade", "Advanced", "Pro"]
  const pricesMonthly = ["$9/mo", "$12/mo", "$15/mo"]
  const pricesYearly = ["$90/yr", "$120/yr", "$150/yr"]

  const getMonthlyTotal = () => {
    let total = 0
    if (selectedPlanIndex === 0) total += 9
    if (selectedPlanIndex === 1) total += 12
    if (selectedPlanIndex === 2) total += 15
    if (addons.online) total += 1
    if (addons.storage) total += 2
    if (addons.customizable) total += 2

    return `$${total}/mo`
  }

  const getYearlyTotal = () => {
    let total = 0
    if (selectedPlanIndex === 0) total += 90
    if (selectedPlanIndex === 1) total += 120
    if (selectedPlanIndex === 2) total += 150
    if (addons.online) total += 10
    if (addons.storage) total += 20
    if (addons.customizable) total += 20

    return `$${total}/yr`
  }

  return (
    <>
      <Sidebar selectedIndex={3} />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[28.5rem] flex flex-col">
          <div className="w-full">
            <h3 className="text-3xl text-[32px] mt-10 font-[700] dark_blue_text">
              Finishing up
            </h3>
            <p className="text-base mt-2.5 font-[400] light_gray_text">
              Double-check everything looks OK before confirming.
            </p>
            <div className="mt-9 p-6 flex flex-col gap-4 h-72f very_light_bg rounded-lg">
              <div className="flex mb-3 items-center dark_blue_text font-[700]">
                <div className="w-full flex flex-col">
                  <h5>{`${plans[selectedPlanIndex]} ${
                    monthlyBilling ? "(Monthly)" : "(Yearly)"
                  }`}</h5>
                  <div className="flex">
                    <Link to="/step-2">
                      <p className="underline font-[400] light_gray_text decoration-2">
                        Change
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="">
                  {monthlyBilling
                    ? pricesMonthly[selectedPlanIndex]
                    : pricesYearly[selectedPlanIndex]}
                </div>
              </div>
              <div className="border-t w-full"></div>
              <div className="light_gray_text flex gap-3 flex-col">
                {addons.online && (
                  <div className="flex items-center">
                    <p className="w-full">Online service</p>
                    <p className="dark_blue_text">{`+$1${
                      monthlyBilling ? "/mo" : "0/yr"
                    }`}</p>
                  </div>
                )}
                {addons.storage && (
                  <div className="flex items-center">
                    <p className="w-full">Larger storage</p>
                    <p className="dark_blue_text">{`+$2${
                      monthlyBilling ? "/mo" : "0/yr"
                    }`}</p>
                  </div>
                )}
                {addons.customizable && (
                  <div className="flex items-center">
                    <p className="w-full">Customizable</p>
                    <p className="dark_blue_text">{`+$2${
                      monthlyBilling ? "/mo" : "0/yr"
                    }`}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center p-6">
              <p className="w-full light_gray_text">{`Total (per ${
                monthlyBilling ? "month" : "year"
              })`}</p>
              <p className="blue_text font-[700] text-xl">
                {monthlyBilling ? getMonthlyTotal() : getYearlyTotal()}
              </p>
            </div>
          </div>
          <div className="flex flex-grow items-end justify-between pt-6 pb-4 select-none">
            <Link to="/step-3">
              <button className="rounded-lg light_gray_text hover:bg-neutral-100 px-6 py-3 font-[500]">
                Go Back
              </button>
            </Link>
            <Link to="/thank-you">
              <button className="rounded-lg blue_bg text-white px-6 py-3 font-[500]">
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step4
