import Image from 'next/image'


import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import bankImage from '../images/screenshots/coinag_1.jpg'

export function CallToAction() {
  return (
    // <section
    //   id="get-started-today"
    //   className="relative overflow-hidden bg-myBlue4 py-32 mt-72 bg-gradient-to-tr from-[#09c7d9] to-[#00021d]"
    // >
    //   {/* <Image
    //     className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    //     src={backgroundImage}
    //     alt=""
    //     width={2347}
    //     height={1244}
    //     unoptimized
    //   /> */}
    //   <Container className="relative">
    //     {/* <div className="mx-auto max-w-lg text-center">
    //       <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
    //         Get started today
    //       </h2>
    //       <p className="mt-4 text-lg tracking-tight text-white">
    //         It’s time to take control of your books. Buy our software so you can
    //         feel like you’re doing something productive.
    //       </p>
    //       <Button href="/register" color="white" className="mt-10">
    //         Get 6 months free
    //       </Button>
    //     </div> */}
    //     <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
    //         <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
    //           <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
    //             <Image
    //               width={100}
    //               height={100}
    //               className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
    //               src={bankImage}
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
    //           <figure className="relative isolate pt-6 sm:pt-12">
    //             <svg
    //               viewBox="0 0 162 128"
    //               fill="none"
    //               aria-hidden="true"
    //               className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
    //             >
    //               <path
    //                 id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
    //                 d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
    //               />
    //               <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
    //             </svg>
    //             <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
    //               <p>
    //                 Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit
    //                 tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh
    //                 scelerisque bibendum.
    //               </p>
    //             </blockquote>
    //             <figcaption className="mt-8 text-base">
    //               <div className="font-semibold text-white">Judith Black</div>
    //               <div className="mt-1 text-gray-400">CEO of Tuple</div>
    //             </figcaption>
    //           </figure>
    //         </div>
    //     </div>
    //   </Container>
    // </section>
    <div className="bg-white">
      <div className="py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* margin-left:20, margin-right:20, max-width:100 mx-auto max-w-7xl*/}
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-myBlue sm:text-4xl">
              {/* Boost your productivity. */}
              Lorem, ipsum dolor.
              <br />
              {/* Start using our app today. */}
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[30rem] max-w-none mt-40 ml-44 rounded-md bg-white/5 ring-1 ring-white/10"
              src={bankImage}
              alt="App screenshot"
              width={1824}
              height={580}
            />
          </div>
        </div>
      </div>
  </div>
  )
}
