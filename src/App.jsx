import { Routes, Route, Navigate } from "react-router-dom"
import Step1 from "./pages/Step1"
import Step2 from "./pages/Step2"
import Step3 from "./pages/Step3"
import Step4 from "./pages/Step4"
import ThankYou from "./pages/ThankYou"

const App = () => {
  return (
    <div className="w-full top-0 md:pt-16 pb-16 left-0 flex items-center justify-center min-h-screen md:px-6">
      <div className="md:bg-white w-full md:main_container_shadow max-w-[58.5rem] rounded-2xl min-h-[37rem] h-[37rem] md:p-4">
        <div className="w-full h-full flex flex-col md:flex-row gap-4 select-none">
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step-2" element={<Step2 />} />
            <Route path="/step-3" element={<Step3 />} />
            <Route path="/step-4" element={<Step4 />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
