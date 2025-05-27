const Beliefs = () => {
  return (
    <div className="mx-auto max-w-2xl md:max-w-7xl px-4 sm:px-4 sm:py-4 md:px-8 rounded-3xl ">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-0 gap-10 lg:gap-10">
        {/* COLUMN-1 */}

        <div className="bg-darkblue bg-beliefs bg-[position:right_top] bg-cover bg-no-repeat pt-12 px-10 sm:px-12 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">
            BELIEFS
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">
            Honesty{" "}
            <span className="text-grey">and hard work are our beliefs.</span>
          </h3>
          <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">
            We strive for excellence with every step we take, guided by purpose,
            passion, and perseverance.
          </h5>
        </div>

        {/* COLUMN-2 */}

        <div className="bg-build pt-12 px-10 sm:px-12 pb-52 md:pb-70 rounded-3xl">
          <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">
            BUILD
          </h2>
          <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start">
            <span className="text-blue">Build</span> that great idea that you
            have.
          </h3>
          <h5 className="bluish pt-2 mb-20 text-center sm:text-start">
            Every great achievement begins with a single idea. With focus,
            determination, and the courage to take the first step, you can
            transform your vision into something truly impactful—something that
            inspires others and stands the test of time.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
