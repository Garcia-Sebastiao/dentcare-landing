import Image from "next/image";

type TestimonialItemProps = {
  image: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
};

export function TestimonialItem({
  image,
  name,
  role,
  company,
  testimonial,
}: TestimonialItemProps) {
  return (
    <div className="flex w-88 flex-col gap-y-6">
      <div className="w-88 overflow-hidden rounded-[21px] h-[25.063rem] border-6 border-[#D9D9D9]">
        <Image src={image} alt={name} className=" w-full h-full object-cover" />
      </div>

      <div className="">
        <h4 className="text-lg text-[#252525]/86 font-semibold">{name}</h4>
        <span>
          <span className="text-green-shade-01">{role}</span> |{" "}
          <span className="text-green-shade-01">{company}</span>
        </span>

        <div className="flex flex-col mt-10">
          <span className="text-[65px] text-[#2F2F2F7D] leading-4">“</span>
          <p className="text-dark-shade-04/60 max-w-[21.938rem]">{testimonial}</p>
        </div>
      </div>
    </div>
  );
}
