// 404.js
import Typewriter from "typewriter-effect";

export default function FiveOhFive() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div>
        <Typewriter
          options={{
            loop: true,
            wrapperClassName: "lg:text-5xl text-xl dot-gothic",
            cursorClassName: "lg:text-5xl text-xl dot-gothic",
          }}
          onInit={(typewriter) => {
            typewriter.typeString("505 Page Not found").pauseFor(1000).start();
          }}
        />
      </div>
    </section>
  );
}