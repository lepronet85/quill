import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="Mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Quill is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">documents</span> in
          seconds
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>

        <Link
          href="/dashboard"
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(4% 27%, 46% 36%, 88% 49%, 41% 53%, 69% 70%, 12% 50%, 41% 53%, 46% 55%, 19% 54%, 21% 83%, 89% 61%)",
              }}
              className="relative left-[calculate(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30 deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24 ">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
