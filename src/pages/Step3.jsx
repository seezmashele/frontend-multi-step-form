import Sidebar from "../components/Sidebar"
import { useFormData } from "../context/FormDataContext"
import { Link } from "react-router-dom"

const Step3 = () => {
  const { useFormDataValues, changeAddons } = useFormData()
  const { monthlyBilling, addons } = useFormDataValues()

  const addonOptions = [
    {
      title: "Online service",
      yearlyPrice: "$10/yr",
      monthlyPrice: "$1/mo",
      selected: addons.online,
      description: "Access to multiplayer games",
      func: () => changeAddons({ ...addons, online: !addons.online })
    },
    {
      title: "Larger storage",
      yearlyPrice: "$20/yr",
      monthlyPrice: "$2/mo",
      selected: addons.storage,
      description: "Extra 1TB of cloud save",
      func: () => changeAddons({ ...addons, storage: !addons.storage })
    },
    {
      title: "Customizable profile",
      yearlyPrice: "$20/yr",
      monthlyPrice: "$2/mo",
      selected: addons.customizable,
      description: "Custom theme on your profile",
      func: () =>
        changeAddons({ ...addons, customizable: !addons.customizable })
    }
  ]

  return (
    <>
      <Sidebar selectedIndex={2} />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[28.5rem] flex flex-col">
          <div className="w-full">
            <h3 className="text-3xl text-[32px] mt-10 font-[700] dark_blue_text">
              Pick add-ons
            </h3>
            <p className="text-base mt-2.5 font-[400] light_gray_text">
              Add-ons help enhance your gaming experience.
            </p>
            <div className="mt-9 pt-0.5 flex flex-col gap-4">
              {addonOptions.map((item, index) => {
                return (
                  <button
                    type="button"
                    key={`plans${index}`}
                    className={`border transition-all duration-100 cursor-pointer select-none hover:dark_blue_border rounded-lg w-full flex-grow flex items-center px-5 py-4 ${
                      item.selected
                        ? "dark_blue_border bg-slate-100"
                        : "border_color"
                    }`}
                    onClick={item.func}
                  >
                    <div
                      className={`w-5 h-5 mr-5 border rounded flex-shrink-0 flex items-center justify-center ${
                        item.selected && "blue_bg"
                      }`}
                    >
                      <img src="/icon-checkmark.svg" alt="card icon" />
                    </div>
                    <div className="w-full text-start justify-center">
                      <h5 className="dark_blue_text text-base font-[700]">
                        {item.title}
                      </h5>
                      <p className="light_gray_text text-sm">
                        {item.description}
                      </p>
                    </div>
                    <p className="mt-0.5 blue_text text-sm font-[500]">
                      {monthlyBilling ? item.monthlyPrice : item.yearlyPrice}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="flex flex-grow items-end justify-between pt-6 pb-4 select-none">
            <Link to="/step-2">
              <button className="rounded-lg light_gray_text hover:bg-neutral-100 px-6 py-3 font-[500]">
                Go Back
              </button>
            </Link>
            <Link to="/step-4">
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

export default Step3
