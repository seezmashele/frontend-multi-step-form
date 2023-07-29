import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import { useFormData } from "../context/FormDataContext"
import { useNavigate } from "react-router-dom"

const Step1 = () => {
  const { useFormDataValues, changeName, changeEmail, changePhoneNumber } =
    useFormData()
  const { name, email, phoneNumber } = useFormDataValues()
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [invalidEmail, setInvalidEmail] = useState("")
  const [numberError, setNumberError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (email) {
      setInvalidEmail(!emailRegex.test(email) ? true : false)
    }
  }, [email])

  const handleNameChange = value => {
    changeName(value)
    if (value) {
      if (nameError) setNameError("")
    } else {
      setNameError("This field is required")
    }
  }

  const navigateTo = path => {
    if (name && email && phoneNumber) {
      navigate(path)
    } else {
      if (!name) setNameError("This field is required")
      if (!email) setEmailError("This field is required")
      if (!phoneNumber) setNumberError("This field is required")
    }
  }

  const handleEmailChange = value => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    changeEmail(value)
    if (value) {
      if (emailError) setEmailError("")
      setInvalidEmail(!emailRegex.test(value) ? true : false)
    } else {
      setInvalidEmail("")
      setEmailError("This field is required")
    }
  }

  const handleNumberChange = value => {
    changePhoneNumber(value)
    if (value) {
      if (numberError) setNumberError("")
    } else {
      setNumberError("This field is required")
    }
  }

  return (
    <>
      <Sidebar selectedIndex={0} />
      <div className="content_wrapper">
        <div className="content_container">
          <div className="w-full max-w-[28.5rem] flex flex-col">
            <div className="w-full">
              <h3 className="text-3xl text-[32px] mt-10 font-[700] dark_blue_text">
                Personal info
              </h3>
              <p className="text-base mt-2.5 font-[400] light_gray_text">
                Please provide your name, email address, and phone number.
              </p>
              <div className="mt-9">
                <div className="flex items-center mt-5 pb-0.5 font-[500] text-sm">
                  <h5 className="dark_blue_text w-full">Name</h5>
                  <p className="text-red-500 flex-shrink-0">{nameError}</p>
                </div>
                <input
                  id="step-1-name"
                  value={name}
                  onChange={e => handleNameChange(e.target.value)}
                  className={`mt-1.5 border pt-2.5 pb-3  font-[500] px-4 rounded-lg w-full ${
                    nameError ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="e.g. Stephen King"
                  required
                />
                <div className="flex items-center mt-5 pb-0.5 font-[500] text-sm">
                  <h5 className="dark_blue_text w-full">Email Address</h5>
                  <p
                    className={`${
                      invalidEmail ? "text-yellow-500" : "text-red-500"
                    } flex-shrink-0`}
                  >
                    {invalidEmail ? "Invalid email address" : emailError}
                  </p>
                </div>
                <input
                  id="step-2-email"
                  value={email}
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  onChange={e => handleEmailChange(e.target.value)}
                  className={`mt-1.5 border pt-2.5 pb-3  font-[500] px-4 rounded-lg w-full ${
                    emailError ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="e.g. stephenking@lorem.com"
                  required
                />
                <div className="flex items-center mt-5 pb-0.5 font-[500] text-sm">
                  <h5 className="dark_blue_text w-full">Phone Number</h5>
                  <p className="text-red-500 flex-shrink-0">{numberError}</p>
                </div>
                <input
                  id="step-3-phone"
                  value={phoneNumber}
                  onChange={e => handleNumberChange(e.target.value)}
                  className={`mt-1.5 border pt-2.5 pb-3  font-[500] px-4 rounded-lg w-full ${
                    numberError ? "border-red-500" : "border-neutral-300"
                  }`}
                  placeholder="e.g. +1 234 567 890"
                  required
                />
              </div>
            </div>
            <div className="flex-grow md:flex hidden items-end justify-end pt-6 pb-4">
              <button
                type="button"
                onClick={() => {
                  navigateTo("/step-2")
                }}
                className="rounded-lg dark_blue_bg text-white px-6 py-3 font-[500]"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed w-full bottom-0 md:hidden">
        <div className="flex w-full bg-white bottom_nav_shadow p-6 flex-grow items-end justify-end">
          <button
            type="button"
            onClick={() => {
              navigateTo("/step-2")
            }}
            className="rounded-lg dark_blue_bg text-white px-6 py-3 font-[500]"
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  )
}

export default Step1
