import React from 'react'

export default function Home() {
  return (
    <><div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-semibold max-w-2xl text-center">
        This is my portfolio! Checkout my new projects
      </h1>
      <p className="text-xl mt-4 max-w-sm text-center">
        I create modern websites using Figma. Send me a message!
      </p>
      <div className="flex mt-8 gap-4 justify-center items-center">
        <button className="bg-black text-white px-6 py-3 rounded-md">
          Contact me
        </button>
        <button className="text-black px-2 py-2 rounded-md">My projects</button>
      </div>
    </div><section className="max-w-screen-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold">My skills</h1>
        <p className="text-xl">Check out my skills. I only work with modern technologies</p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 30L32.7 28.0467C32.287 27.4762 31.7039 27.0512 31.0344 26.8326C30.3649 26.6141 29.6433 26.6132 28.9733 26.8302C28.3032 27.0471 27.7191 27.4707 27.3047 28.0402C26.8903 28.6096 26.667 29.2957 26.6667 30H30ZM50 93.3333C38.5073 93.3333 27.4853 88.7679 19.3587 80.6413C11.2321 72.5147 6.66667 61.4927 6.66667 50H0C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V93.3333ZM93.3333 50C93.3333 55.6906 92.2125 61.3255 90.0348 66.5829C87.8571 71.8404 84.6652 76.6174 80.6413 80.6413C76.6174 84.6652 71.8404 87.8571 66.5829 90.0348C61.3255 92.2125 55.6906 93.3333 50 93.3333V100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50H93.3333ZM50 6.66667C55.6906 6.66667 61.3255 7.78752 66.5829 9.96522C71.8404 12.1429 76.6174 15.3348 80.6413 19.3587C84.6652 23.3826 87.8571 28.1596 90.0348 33.417C92.2125 38.6745 93.3333 44.3094 93.3333 50H100C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0V6.66667ZM50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50H6.66667C6.66667 38.5073 11.2321 27.4853 19.3587 19.3587C27.4853 11.2321 38.5073 6.66667 50 6.66667V0ZM33.3333 80V30H26.6667V80H33.3333ZM27.3 31.9533L70.6333 91.9533L76.0333 88.0467L32.7 28.0467L27.3 31.9533ZM66.6667 26.6667V66.6667H73.3333V26.6667H66.6667Z" fill="black" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">NextJS</h1>
            <p>I use this framework beacause I know what is good.</p>
          </div>
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 256 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_103_2)">
                  <path d="M64 384C99.328 384 128 355.328 128 320V256H64C28.672 256 0 284.672 0 320C0 355.328 28.672 384 64 384Z" fill="#0ACF83" />
                  <path d="M0 192C0 156.672 28.672 128 64 128H128V256H64C28.672 256 0 227.328 0 192Z" fill="#A259FF" />
                  <path d="M0 64C0 28.672 28.672 0 64 0H128V128H64C28.672 128 0 99.328 0 64Z" fill="#F24E1E" />
                  <path d="M128 0H192C227.328 0 256 28.672 256 64C256 99.328 227.328 128 192 128H128V0Z" fill="#FF7262" />
                  <path d="M256 192C256 227.328 227.328 256 192 256C156.672 256 128 227.328 128 192C128 156.672 156.672 128 192 128C227.328 128 256 156.672 256 192Z" fill="#1ABCFE" />
                </g>
                <defs>
                  <clipPath id="clip0_103_2">
                    <rect width="256" height="384" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <h1 className="text-2xl font-semibold">Figma</h1>
            <p>I use this framework beacause I know what is good.</p>
          </div>
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C36.65 0 28.35 5.54167 25 16.6667C30 11.125 35.85 9.04167 42.5 10.4167C46.3 11.2083 49.05 13.5 52.05 16.0417C56.95 20.2083 62.5 25 75 25C88.35 25 96.65 19.4583 100 8.33333C95 13.875 89.15 15.9583 82.5 14.5833C78.7 13.7917 76 11.5 72.95 8.95833C68.05 4.79167 62.5 0 50 0ZM25 25C11.65 25 3.35 30.5417 0 41.6667C5 36.125 10.85 34.0417 17.5 35.4167C21.3 36.2083 24 38.5 27.05 41.0417C31.95 45.2083 37.5 50 50 50C63.35 50 71.65 44.4583 75 33.3333C70 38.875 64.15 40.9583 57.5 39.5833C53.7 38.7917 51 36.5 47.95 33.9583C43.05 29.7917 37.5 25 25 25Z" fill="#36b6f2" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">TailWindCSS</h1>
            <p>I use this framework beacause I know what is good.</p>
          </div>
        </div>
        <div role="button" className="px-4 py-3 bg-black text-white rounded-md w-fit mx-auto mt-8">More about my skills.</div>
      </section><section className="max-w-screen-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold">My projects</h1>
        <p className="text-xl">Check out my projects!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 114 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.25 17.8333H70.395C69.4224 15.2272 67.6109 12.9691 65.2112 11.3715C62.8115 9.77392 59.9421 8.91577 57 8.91577C54.0579 8.91577 51.1885 9.77392 48.7888 11.3715C46.3891 12.9691 44.5776 15.2272 43.605 17.8333H23.75C21.2328 17.8404 18.8208 18.7821 17.0408 20.4528C15.2608 22.1234 14.2575 24.3873 14.25 26.75V89.1667C14.2575 91.5294 15.2608 93.7932 17.0408 95.4639C18.8208 97.1346 21.2328 98.0763 23.75 98.0833H90.25C92.7672 98.0763 95.1792 97.1346 96.9592 95.4639C98.7392 93.7932 99.7425 91.5294 99.75 89.1667V26.75C99.7425 24.3873 98.7392 22.1234 96.9592 20.4528C95.1792 18.7821 92.7672 17.8404 90.25 17.8333ZM57 17.8333C57.9395 17.8333 58.8578 18.0948 59.639 18.5847C60.4201 19.0746 61.0289 19.7709 61.3884 20.5855C61.7479 21.4002 61.842 22.2966 61.6587 23.1615C61.4755 24.0263 61.0231 24.8207 60.3588 25.4442C59.6945 26.0677 58.8481 26.4923 57.9267 26.6643C57.0053 26.8364 56.0502 26.7481 55.1823 26.4106C54.3143 26.0732 53.5725 25.5018 53.0505 24.7686C52.5286 24.0354 52.25 23.1734 52.25 22.2917C52.2538 21.1103 52.7554 19.9784 53.6454 19.1431C54.5354 18.3077 55.7414 17.8369 57 17.8333ZM47.5 40.125L60.7525 52.5816L72.7225 41.3466L66.5 35.6667H85.5V53.5L79.439 47.6551L60.762 65.1987L47.5 52.7421L35.2165 64.2624L28.5 57.9583L47.5 40.125ZM90.25 84.7083H23.75V75.7917H90.25V84.7083Z" fill="black" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">Project 1</h1>
            <p>Description about the project</p>
          </div>
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 114 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.25 17.8333H70.395C69.4224 15.2272 67.6109 12.9691 65.2112 11.3715C62.8115 9.77392 59.9421 8.91577 57 8.91577C54.0579 8.91577 51.1885 9.77392 48.7888 11.3715C46.3891 12.9691 44.5776 15.2272 43.605 17.8333H23.75C21.2328 17.8404 18.8208 18.7821 17.0408 20.4528C15.2608 22.1234 14.2575 24.3873 14.25 26.75V89.1667C14.2575 91.5294 15.2608 93.7932 17.0408 95.4639C18.8208 97.1346 21.2328 98.0763 23.75 98.0833H90.25C92.7672 98.0763 95.1792 97.1346 96.9592 95.4639C98.7392 93.7932 99.7425 91.5294 99.75 89.1667V26.75C99.7425 24.3873 98.7392 22.1234 96.9592 20.4528C95.1792 18.7821 92.7672 17.8404 90.25 17.8333ZM57 17.8333C57.9395 17.8333 58.8578 18.0948 59.639 18.5847C60.4201 19.0746 61.0289 19.7709 61.3884 20.5855C61.7479 21.4002 61.842 22.2966 61.6587 23.1615C61.4755 24.0263 61.0231 24.8207 60.3588 25.4442C59.6945 26.0677 58.8481 26.4923 57.9267 26.6643C57.0053 26.8364 56.0502 26.7481 55.1823 26.4106C54.3143 26.0732 53.5725 25.5018 53.0505 24.7686C52.5286 24.0354 52.25 23.1734 52.25 22.2917C52.2538 21.1103 52.7554 19.9784 53.6454 19.1431C54.5354 18.3077 55.7414 17.8369 57 17.8333ZM47.5 40.125L60.7525 52.5816L72.7225 41.3466L66.5 35.6667H85.5V53.5L79.439 47.6551L60.762 65.1987L47.5 52.7421L35.2165 64.2624L28.5 57.9583L47.5 40.125ZM90.25 84.7083H23.75V75.7917H90.25V84.7083Z" fill="black" />
              </svg>

            </div>
            <h1 className="text-2xl font-semibold">Project 2</h1>
            <p>Description about the project</p>
          </div>
          <div className="flex flex-col items-center text-center border-2 p-4 px-8 rounded-md">
            <div className="border rounded-full p-4">
              <svg width="80" height="80" viewBox="0 0 114 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.25 17.8333H70.395C69.4224 15.2272 67.6109 12.9691 65.2112 11.3715C62.8115 9.77392 59.9421 8.91577 57 8.91577C54.0579 8.91577 51.1885 9.77392 48.7888 11.3715C46.3891 12.9691 44.5776 15.2272 43.605 17.8333H23.75C21.2328 17.8404 18.8208 18.7821 17.0408 20.4528C15.2608 22.1234 14.2575 24.3873 14.25 26.75V89.1667C14.2575 91.5294 15.2608 93.7932 17.0408 95.4639C18.8208 97.1346 21.2328 98.0763 23.75 98.0833H90.25C92.7672 98.0763 95.1792 97.1346 96.9592 95.4639C98.7392 93.7932 99.7425 91.5294 99.75 89.1667V26.75C99.7425 24.3873 98.7392 22.1234 96.9592 20.4528C95.1792 18.7821 92.7672 17.8404 90.25 17.8333ZM57 17.8333C57.9395 17.8333 58.8578 18.0948 59.639 18.5847C60.4201 19.0746 61.0289 19.7709 61.3884 20.5855C61.7479 21.4002 61.842 22.2966 61.6587 23.1615C61.4755 24.0263 61.0231 24.8207 60.3588 25.4442C59.6945 26.0677 58.8481 26.4923 57.9267 26.6643C57.0053 26.8364 56.0502 26.7481 55.1823 26.4106C54.3143 26.0732 53.5725 25.5018 53.0505 24.7686C52.5286 24.0354 52.25 23.1734 52.25 22.2917C52.2538 21.1103 52.7554 19.9784 53.6454 19.1431C54.5354 18.3077 55.7414 17.8369 57 17.8333ZM47.5 40.125L60.7525 52.5816L72.7225 41.3466L66.5 35.6667H85.5V53.5L79.439 47.6551L60.762 65.1987L47.5 52.7421L35.2165 64.2624L28.5 57.9583L47.5 40.125ZM90.25 84.7083H23.75V75.7917H90.25V84.7083Z" fill="black" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold">Project 3</h1>
            <p>Description about the project</p>
          </div>
        </div>
        <div role="button" className="px-4 py-3 bg-black text-white rounded-md w-fit mx-auto mt-8">More projects.</div>
      </section></>
  )
}
