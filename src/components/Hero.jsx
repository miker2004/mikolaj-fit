import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4 items-center">
        <p>IT'S TIME TO GET</p>
        <img src="./public/favicon.png" alt="" className="size-64" />
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-5xl md:text-6xl lg:text-7xl">
          Beff<span className="text-blue-400">CAKE</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Hey!! You need to get in shape fast?!
        <span className="text-blue-400 font-medium"> Wanna look your best?!</span> Tired of the other guys getting all the chicks?!
        Then bulk up quick, with
        <span className="text-blue-400 font-medium"> Weight Gain 4000!! </span>
        Get some today, and say with me: 
        <br />
        <span className="text-blue-400 font-medium text-2xl uppercase">'Beefcake!'</span>
      </p>
      <Button
        func={() => window.location.href = '#generate'}
        text={'Beefcake!'}
      />
    </div>
  );
}
