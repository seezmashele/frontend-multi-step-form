import Sidebar from "../components/Sidebar"

const ThankYou = () => {
  return (
    <>
      <Sidebar selectedIndex={3} />
      <div className="content_wrapper">
        <div className="content_container">
          <div className="w-full max-w-[28.5rem] flex flex-col justify-center">
            <div className="py-16 flex flex-col items-center">
              <div className="w-20 h-20">
                <img src="icon-thank-you.svg" alt="thank you icon" />
              </div>
              <h4 className="text-center font-bold dark_blue_text mt-6 pt-0.5 text-[2rem]">
                Thank you!
              </h4>
              <p className="light_gray_text text-center mt-3">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYou
