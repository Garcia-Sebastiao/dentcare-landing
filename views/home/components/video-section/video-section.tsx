import { VideoPreview } from "@/assets/video-preview";
import { PlayIcon } from "lucide-react";

export function VideoSection() {
  return (
    <div className="w-full relative mt-21 px-29 flex justify-center min-h-222 rounded-[24px] p-4">
      <VideoPreview />

      <button className="border border-white w-16.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16.5 flex items-center justify-center rounded-full bg-[#DADADA50] backdrop-blur-md">
        <PlayIcon className="fill-white text-white" />
      </button>
    </div>
  );
}
