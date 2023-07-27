import Sidebar from "../components/Sidebar"
import { useFormData } from "../context/FormDataContext"
import { Link } from "react-router-dom"

const Step1 = () => {
  const { useFormDataValues, changeName, changeEmail, changePhoneNumber } =
    useFormData()
  const { name, email, phoneNumber } = useFormDataValues()

  return (
    <>
      <Sidebar selectedIndex={2} />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[28.5rem] flex flex-col">
          <div className="w-full">
            <h3 className="text-3xl text-[32px] mt-10 font-[700] dark_blue_text">
              Personal info
            </h3>
            <p className="text-base mt-2.5 font-[400] light_gray_text">
              Please provide your name, email address, and phone number.
            </p>
            <div className="mt-9">
              <h5 className="pb-0.5 dark_blue_text font-[500] text-sm select-none">
                Name
              </h5>
              <input
                id="step-1-name"
                value={name}
                onChange={e => changeName(e.target.value)}
                className="mt-1.5 border pt-2.5 pb-3 border-neutral-300 font-[500] px-4 rounded-lg w-full"
                placeholder="e.g. Stephen King"
              />
              <h5 className="mt-5 pb-0.5 dark_blue_text font-[500] text-sm select-none">
                Email Address
              </h5>
              <input
                id="step-2-email"
                value={email}
                onChange={e => changeEmail(e.target.value)}
                className="mt-1.5 border pt-2.5 pb-3 border-neutral-300 font-[500] px-4 rounded-lg w-full"
                placeholder="e.g. stephenking@lorem.com"
              />
              <h5 className="mt-5 pb-0.5 dark_blue_text font-[500] text-sm select-none">
                Phone Number
              </h5>
              <input
                id="step-3-phone"
                value={phoneNumber}
                onChange={e => changePhoneNumber(e.target.value)}
                className="mt-1.5 border pt-2.5 pb-3 border-neutral-300 font-[500] px-4 rounded-lg w-full"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
          </div>
          <div className="flex-grow flex items-end justify-end pt-6 pb-4">
            <Link
              to="/step-2"
              className="rounded-lg dark_blue_bg text-white px-6 py-3 font-[500]"
            >
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1
