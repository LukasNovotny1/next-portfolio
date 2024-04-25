import React from 'react'

export default function MyProjects() {
  return (
    <section className="max-w-screen-2xl mx-auto py-8 px-4">
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
        <div role="button" className="px-4 py-3 bg-black text-white rounded-md w-fit mx-auto mt-8"><a href="/projects">More projects.</a></div>
      </section>
  )
}
