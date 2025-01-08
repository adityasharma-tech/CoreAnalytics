import { redirect } from "next/navigation";
import React from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


export default async function InstallSite(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams;
  if(!searchParams.hostname){
    redirect('/dashboard')
  }

  return (
    <section className="min-h-screen lg:px-20 md:px-10 sm:px-5 px-3 sm:py-5 py-3 bg-white">
      <style>
        {`
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}`}
      </style>
      <div className="text-2xl gap-x-2 flex">
        <span className="text-neutral-800">Analytics</span>
        <span className="text-neutral-500">{searchParams.hostname}</span>
      </div>
      <div className="my-5 flex flex-col gap-y-5 text-neutral-600">
        <span className="text-xl text-neutral-800">
          Waiting for your first visit
        </span>
        <span className="text-lg">Thanks for installing the script.</span>
        <div className="flex gap-x-3 items-center">
          <div className="loader"></div>
          <span className="text-lg">
            We will automatically detect when your script is successfully
            installed.
          </span>
        </div>
        <span className="text-lg">
          You don't have to wait, just come back in an hour or so.
        </span>
      </div>
    </section>
  );
}