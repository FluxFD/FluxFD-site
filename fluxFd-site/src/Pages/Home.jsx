
function Home() {
  return (
    <div className="h-full w-full min-h-screen flex flex-col justify-center">
      <div className="md:w-1/2 font-mono font-bold text-4xl">
        <p>
          <span className="text-red-500">Transforming Ideas</span> into Reality
        </p>
        <p>
          with <span className="text-red-500">Web and Mobile Expertise.</span>
        </p>
        <div className="mt-5 md:w-2/3">
          <p className="font-light text-base text-wrap">
            Dedicated to turning your unique ideas into reality by providing
            innovative web and mobile solutions that enhance user experience and
            drive business growth
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 border-2 border-rose-500 rounded-lg divide-x">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div>
  );
}

export default Home;
