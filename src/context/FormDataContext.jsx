import { createContext, useContext, useState } from "react"

const FormDataContext = createContext()

export const useFormData = () => {
  return useContext(FormDataContext)
}

export const FormDataProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)
  const [monthlyBilling, setMonthlyBilling] = useState(true)
  const [selectedAddons, setSelectedAddons] = useState([
    { selected: false },
    { selected: false },
    { selected: false }
  ])

  const useFormDataValues = () => {
    return {
      name,
      email,
      phoneNumber,
      selectedPlanIndex,
      monthlyBilling,
      selectedAddons
    }
  }

  const changeName = value => setName(value)
  const changeEmail = value => setEmail(value)
  const changePhoneNumber = value => setPhoneNumber(value)
  const changeSelectedPlanIndex = value => setSelectedPlanIndex(value)
  const changeMonthlyBilling = value => setMonthlyBilling(value)
  const changeSelectedAddons = value => setSelectedAddons(value)

  return (
    <FormDataContext.Provider
      value={{
        useFormDataValues,
        changeName,
        changeEmail,
        changePhoneNumber,
        changeSelectedPlanIndex,
        changeMonthlyBilling,
        changeSelectedAddons
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}
