import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HunzoLicence = () => {
  return (
    <p className="flex items-center flex-wrap gap-2 text-sm text-hunzo-text-grey flex-col">
      <div className="">
        <Link
          href="https://github.com/HughScott2002/Hunzo-UI"
          className="text-hunzo-blue hover:text-blue-800"
        >
          Hunzo
        </Link>
        <span> by </span>
        <Link
          href="https://github.com/HughScott2002/"
          className="text-hunzo-blue hover:text-blue-800"
        >
          Hugh Scott
        </Link>
        <span> is licensed under </span>
      </div>
      <Link
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        className="inline-flex items-center gap-1"
      >
        CC BY-NC-ND 4.0
        {/* <Image
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt="CC"
          width={22}
          height={22}
          className="inline-block ml-1"
        />
        <Image
          src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
          alt="BY"
          width={22}
          height={22}
          className="inline-block"
        />
        <Image
          src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
          alt="NC"
          width={22}
          height={22}
          className="inline-block"
        />
        <Image
          src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
          alt="ND"
          width={22}
          height={22}
          className="inline-block"
        /> */}
        {/* <Copyright /> */}
        <CcIcon />
        <ByIcon />
        <NcIcon />
        <NdIcon />
      </Link>
    </p>
  );
};

export default HunzoLicence;
export const CcIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 96.1 96.1"
  >
    <path d="M48.1 0C21.5 0 0 21.5 0 48.1s21.5 48 48.1 48 48-21.5 48-48.1S74.6 0 48.1 0zm0 86.5c-21.3 0-38.5-17.3-38.5-38.5S26.8 9.5 48.1 9.5s38.5 17.3 38.5 38.5-17.3 38.5-38.5 38.5z" />
    <path d="M54.3 54.2c-1.4 2.7-4.2 4.2-7.2 4.2-5 0-8.8-4-8.8-9.4 0-5.3 3.7-9.4 8.8-9.4 3.1 0 5.8 1.6 7.2 4.2l6.8-3.5c-2.7-5-8-8-14-8-9.3 0-16.6 7.4-16.6 16.7s7.3 16.7 16.6 16.7c6 0 11.3-3 14-8l-6.8-3.5z" />
  </svg>
);

export const ByIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 96.1 96.1"
  >
    <path d="M48.1 0C21.5 0 0 21.5 0 48.1s21.5 48 48.1 48 48-21.5 48-48.1S74.6 0 48.1 0zm0 86.5c-21.3 0-38.5-17.3-38.5-38.5S26.8 9.5 48.1 9.5s38.5 17.3 38.5 38.5-17.3 38.5-38.5 38.5z" />
    <path d="M53.8 44.3c1.7-2 2.5-4.3 2.5-7.2 0-2.8-.7-5.2-2.1-7.2s-3.2-3.4-5.4-4.2c-2.2-.8-6.3-1.2-12.3-1.2h-8.9v45h8.9c6 0 10.1-.4 12.3-1.2 2.2-.8 4-2.2 5.4-4.2s2.1-4.3 2.1-7.2c0-2.8-.8-5.2-2.5-7.2zM39.7 30.7h1.2c2.8 0 4.7.4 5.7 1.2 1 .8 1.5 2 1.5 3.6s-.5 2.8-1.5 3.6c-1 .8-2.9 1.2-5.7 1.2h-1.2v-9.6zm8.4 26.4c-1 .8-2.9 1.2-5.7 1.2h-2.7v-10.8h2.7c2.8 0 4.7.4 5.7 1.2s1.5 2 1.5 3.6-.5 2.8-1.5 3.6z" />
  </svg>
);

export const NcIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 96.1 96.1"
  >
    <path d="M48.1 0C21.5 0 0 21.5 0 48.1s21.5 48 48.1 48 48-21.5 48-48.1S74.6 0 48.1 0zm0 86.5c-21.3 0-38.5-17.3-38.5-38.5S26.8 9.5 48.1 9.5s38.5 17.3 38.5 38.5-17.3 38.5-38.5 38.5z" />
    <path d="M54.3 54.2l6.8 3.5c-2.7 5-8 8-14 8-9.3 0-16.6-7.4-16.6-16.7s7.3-16.7 16.6-16.7c6 0 11.3 3 14 8l-6.8 3.5c-1.4-2.7-4.2-4.2-7.2-4.2-5 0-8.8 4-8.8 9.4 0 5.3 3.7 9.4 8.8 9.4 3 0 5.8-1.5 7.2-4.2z" />
    <path d="M48.1 28.5l-8.9 18.9h4.4l1.8-4h5.3l1.8 4h4.4l-8.8-18.9zm-1.8 11.9l1.8-4 1.8 4h-3.6z" />
  </svg>
);

export const NdIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 96.1 96.1"
  >
    <path d="M48.1 0C21.5 0 0 21.5 0 48.1s21.5 48 48.1 48 48-21.5 48-48.1S74.6 0 48.1 0zm0 86.5c-21.3 0-38.5-17.3-38.5-38.5S26.8 9.5 48.1 9.5s38.5 17.3 38.5 38.5-17.3 38.5-38.5 38.5z" />
    <path d="M53.8 44.3h-11v-7.2h11c2 0 3.6.5 4.8 1.5 1.2 1 1.8 2.3 1.8 3.9 0 1.6-.6 2.9-1.8 3.9-1.2 1-2.8 1.5-4.8 1.5zm0 18.9h-11v-7.2h11c2 0 3.6.5 4.8 1.5 1.2 1 1.8 2.3 1.8 3.9 0 1.6-.6 2.9-1.8 3.9-1.2 1-2.8 1.5-4.8 1.5z" />
  </svg>
);
