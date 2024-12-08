import Image from "next/image";
const CardWithZoom = ({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) => {
  return (
    <div className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer group">
      <div className="absolute inset-0 transition-transform duration-500 ease-out transform group-hover:scale-125" id="#fred">
        <Image src={imageSrc} alt={name} fill className="rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-40">
        <p className="text-white text-2xl font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CardWithZoom;
