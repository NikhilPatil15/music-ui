"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
import { log } from "console";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import { FormEvent, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted: ", {email,message});
    setEmail('')
    setMessage('')
  };
  return (
    <div className="w-full min-h-screen  bg-gray-900">
      <BackgroundBeams />
      <div className=" py-12 pt-36 ">
        <h1 className="text-6xl font-sans text-center text-neutral-200">
          Contact Us
        </h1>
        <p className="text-neutral-500 text-center max-w-lg mt-6 mx-auto my-2">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5 w-full items-center max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-neutral-200 focus:ring-2 focus:ring-teal-500  p-4 bg-slate-900 placeholder:text-gray-200 z-30 w-full"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-neutral-200 focus:ring-2 focus:ring-teal-500  p-4 bg-slate-900 placeholder:text-gray-200 z-30 w-full  "
        />
        <Button type="submit" borderRadius="1.75rem" className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
            Submit
        </Button>
      </form>
    </div>
  );
}
