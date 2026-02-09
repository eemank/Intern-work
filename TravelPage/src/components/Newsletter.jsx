import { PiPaperPlaneTiltFill } from "react-icons/pi";

export default function Newsletter() {
  return (
    <section className="w-full flex justify-center px-4 py-20 bg-white">
      <div className="relative w-full max-w-6xl px-6 md:px-16">
        
        <div className="relative overflow-hidden rounded-tl-[128px] bg-[#F7F6FB] py-16">
          <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-purple-300 opacity-40" />
          <div className="absolute -left-26 top-1/2 h-78 w-80 -translate-y-1/3 rounded-full border border-purple-300 opacity-40" />
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-purple-300 opacity-50" />
          <div className="absolute -right-25 top-11 h-78 w-80 -translate-y-1.5 rounded-full border border-purple-300 opacity-50" />
          <div className="absolute -right-26 top-12 h-80 w-80 rounded-full border border-purple-300 opacity-50" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold leading-relaxed text-[#5A5F8E] md:text-3xl">
              Subscribe to get information, latest news and other
              interesting offers about Jadoo
            </h2>
            <form className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex w-full max-w-md items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-none text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#FF8A65] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#ff7043]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

    
        <div className="absolute right-9 -top-1 z-20 flex h-12 w-12 items-center justify-center rounded-full text-white bg-linear-to-br from-purple-500 to-indigo-500">
          <PiPaperPlaneTiltFill size={22} />
        </div>
      </div>
    </section>
  );
}
