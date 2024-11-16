import Faq from "../Components/Faq"

const FaqsPage = () => {
  return (
    <section>
      <div className="space-y-5">
        {/* Header Banner */}
        <header className="relative h-[300px] md:h-[300px] w-full flex justify-center items-center">
                <img
                    src="/images/img_3.webp"
                    alt="Custom Designs Banner"
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
                <div className="relative z-10 text-center text-white space-y-2 md:space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">FAQs</h1>
                    <p className="text-lg md:text-xl max-w-lg px-4">
                        Frequently asked questions and their answers. if you want to make any inquiry please reach out to us
                    </p>
                </div>
            </header>

        <Faq />
      </div>
    </section>
  )
}

export default FaqsPage