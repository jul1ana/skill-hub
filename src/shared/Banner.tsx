import Image from "next/image";

interface BannerProps {
  banner: string,
  heading: string,
  subheading: string,
  title: string,
}

export function Banner({ banner, heading, subheading, title }: BannerProps) {
  return (
    <div>
      <div className="bg-gradient-to-r from-red-200 to-pink-100 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* BANNER IMAGE */}
          <div>
            <Image src={banner} alt="Banner" width={400} height={300} className="rounded-xl" />
          </div>

          {/* BANNER CONTENT */}
          <div className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
            <p className="text-[#642b2b] text-2xl mb-8">{subheading}</p>

            <div className="space-x-5 space-y-4">
              {/* mudancas no botao - title distintos */}
              <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                {title}
              </button>
              <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
                {title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}