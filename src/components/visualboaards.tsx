/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/KNRwaOUm26j
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/vercel/kv/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/vercel/kv/components/ui/avatar"

export function visualboaards() {
  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Vision Boards</h1>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <FilterIcon className="w-6 h-6" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button size="icon" variant="ghost">
                <ListOrderedIcon className="w-6 h-6" />
                <span className="sr-only">Sort</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Jared Palmer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@jaredpalmer</div>
                </div>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <PinIcon className="w-6 h-6" />
                  <span className="sr-only">Pin</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Shu Ding</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@shuding_</div>
                </div>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <PinIcon className="w-6 h-6" />
                  <span className="sr-only">Pin</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Max Leiter</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@maxleiter</div>
                </div>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <PinIcon className="w-6 h-6" />
                  <span className="sr-only">Pin</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="@vercel" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Vercel</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">@vercel</div>
                </div>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <PinIcon className="w-6 h-6" />
                  <span className="sr-only">Pin</span>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
                <img
                  alt="Vision Board"
                  className="aspect-square object-cover rounded-lg"
                  height={300}
                  src="/placeholder.svg"
                  width={300}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Pinned Vision Boards</h2>
              <Button size="icon" variant="ghost">
                <PlusIcon className="w-6 h-6" />
                <span className="sr-only">Add</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Jared Palmer</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">@jaredpalmer</div>
                  </div>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <PinIcon className="w-6 h-6" />
                    <span className="sr-only">Pin</span>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">Shu Ding</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">@shuding_</div>
                  </div>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <PinIcon className="w-6 h-6" />
                    <span className="sr-only">Pin</span>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                  <img
                    alt="Vision Board"
                    className="aspect-square object-cover rounded-lg"
                    height={300}
                    src="/placeholder.svg"
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
