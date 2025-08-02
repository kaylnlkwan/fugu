import Button from "./Button";

export default function Banner() {
  return (
    <div
      className="absolute top-0 left-0 w-full text-black py-2 z-30"
      style={{ backgroundColor: "rgba(184, 232, 82, 0.7)" }}
    >
      <div className="container mx-auto px-6 flex items-center">
        <div className="flex-1"></div>
        <h1 className="font-cinetype-bold text-xl flex-1 text-center">
          Launching at Bedford Studios (08/16)
        </h1>
        <div className="flex-1 flex gap-2 justify-end">
          <Button className="text-sm" variant="white" size="thin">
            LEARN MORE
          </Button>
          <Button className="text-sm" variant="black" size="thin">
            GET ON THE LIST
          </Button>
        </div>
      </div>
    </div>
  );
}
