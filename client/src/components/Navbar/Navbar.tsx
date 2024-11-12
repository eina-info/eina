"use client";

import Link from "next/link";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  BookOpenIcon,
  CalendarIcon,
  ChevronDownIcon,
  FilmIcon,
  MicrophoneIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";

/**
 * @name Navbar
 * @description The main navigation component for the application.
 */

const resources = [
  {
    name: "Events",
    description:
      "Stay up-to-date with upcoming events in your area or online. Whether it's a concert, conference, or community gathering, find exciting opportunities to connect, learn, and have fun.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Podcasts",
    description:
      "Dive into engaging conversations, storytelling, and expert insights.",
    href: "#",
    icon: MicrophoneIcon,
  },
  {
    name: "Books",
    description:
      "Browse our extensive collection of books across various topics.",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Movies",
    description:
      "Discover films that challenge societal norms, promote inclusivity, and highlight diverse voices.",
    href: "#",
    icon: FilmIcon,
  },
];
const callsToAction = [
  { name: "View all resources", href: "#", icon: RectangleGroupIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-background">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">eina</span>
            <img alt="eina-logo" src="/eina-logo.svg" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-md text-foreground">
              Resources
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-foreground"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10  pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="bg-background mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {resources.map((item) => (
                  <div
                    key={item.name}
                    className="bg-foreground group relative rounded-lg p-6 text-sm/6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-background">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-background group-hover:text-foreground"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block font-semibold text-gray-900"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-background pb-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="flex justify-center gap-4 pb-4">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="bg-foreground flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold min-w-40 rounded-md text-gray-900 hover:bg-background hover:text-foreground hover:border-solid hover:border-[1px] hover:border-foreground"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-md text-foreground">
            Topics
          </a>
          <a href="#" className="text-md text-foreground">
            Collectives
          </a>
          <a href="#" className="text-md text-foreground">
            How It Works
          </a>
          <a href="#" className="text-md text-foreground">
            Contact
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-md text-foreground border-[1px] border-foreground rounded-xl px-6 hover:text-background hover:bg-foreground"
          >
            Log in<span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed bg-foreground inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">eina</span>
              <img alt="eina-logo" src="/favicon.ico" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-background"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-background">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base/7 text-background hover:bg-background hover:text-foreground">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="flex items-center rounded-lg py-2 pl-6 pr-3 text-sm/7 text-background hover:bg-background hover:text-foreground"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none"
                        />
                        <span className="pl-2">{item.name}</span>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-background hover:bg-background hover:text-foreground"
                >
                  Topics
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-background hover:bg-background hover:text-foreground"
                >
                  Collectives
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-background hover:bg-background hover:text-foreground"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-background hover:bg-background hover:text-foreground"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-background hover:bg-background hover:text-foreground"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
