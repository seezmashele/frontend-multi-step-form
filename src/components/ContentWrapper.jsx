const ContentWrapper = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center bg-white rounded-lg">
      {children}
    </div>
  )
}

export default ContentWrapper
