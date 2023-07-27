import { Link } from "react-router-dom"

const Sidebar = ({ selectedIndex = 0 }) => {
  const steps = [
    { title: "Your info", path: "/" },
    { title: "Select plan", path: "/step-2" },
    { title: "Add-ons", path: "/step-3" },
    { title: "Summary", path: "/step-4" }
  ]

  return (
    <div className="sidebar_bg w-[25rem] h-full bg-neutral-50 box_radius text-white text-sm">
      <div className="px-6 py-8 gap-y-3 flex flex-col">
        {steps.map((item, index) => {
          return (
            <Link to={item.path} key={`sidebar-item${index}`}>
              <div className="flex items-center hover:bg-[#ffffff22] cursor-pointer py-2 px-2 box_radius select-none">
                <div
                  className={`w-8 h-8 rounded-full mr-4 border border-white flex items-center justify-center font-bold ${
                    selectedIndex === index && "milky_cyan_bg text-black"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="uppercase">
                  <h4 className="text-xs opacity-60">Step {index + 1}</h4>
                  <h4 className="font-bold tracking-wider">{item.title}</h4>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
