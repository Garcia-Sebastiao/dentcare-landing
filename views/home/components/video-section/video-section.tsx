/* eslint-disable @next/next/no-img-element */
import { VideoPreview } from "@/assets";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

export function VideoSection() {
  return (
    <section className="px-29">
      <div className="w-full relative mt-21 bg-white/41 flex justify-center h-222 rounded-3xl p-4">
        <div className="w-full h-full relative rounded-3xl overflow-hidden">
          <Image
            alt="Video Preview"
            src={VideoPreview}
            className="w-full rounded-3xl h-full object-cover"
          />

          <div className="w-full absolute top-0 left-0 bg-[#222222]/23 backdrop-blur-md h-full" />
        </div>

        <button className="border border-white w-16.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16.5 flex items-center justify-center rounded-full bg-[#DADADA50] backdrop-blur-md">
          <PlayIcon className="fill-white text-white" />
        </button>
      </div>
    </section>
  );
}
