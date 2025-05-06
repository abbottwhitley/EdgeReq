const PageHeader = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">{description}</p>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
    </div>
  )
}

export default PageHeader
