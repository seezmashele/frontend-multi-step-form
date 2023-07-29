const Sidebar = ({ selectedIndex = 0 }) => {
  const steps = [
    { title: "Your info", path: "/" },
    { title: "Select plan", path: "/step-2" },
    { title: "Add-ons", path: "/step-3" },
    { title: "Summary", path: "/step-4" }
  ]

  return (
    <div className="sidebar_bg md:w-[25rem] md:h-full md:box_radius text-white text-sm">
      <div className="px-6 pb-28 pt-10 md:pb-8 my:pt-8 gap-y-3 gap-x-2 md:gap-x-2 justify-center md:justify-normal flex md:flex-col">
        {steps.map((item, index) => {
          return (
            <div
              key={`sidebar-item${index}`}
              className="flex items-center py-2 px-2 box_radius select-none"
            >
              <div
                className={`w-10 h-10 md:w-8 md:h-8 rounded-full flex-shrink-0 md:mr-4 border border-white flex items-center justify-center font-bold ${
                  selectedIndex === index && "milky_cyan_bg text-black"
                }`}
              >
                {index + 1}
              </div>
              <div className="uppercase hidden md:block">
                <h4 className="text-xs opacity-60">Step {index + 1}</h4>
                <h4 className="font-bold tracking-wider">{item.title}</h4>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
