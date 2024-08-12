
function HeadText({ span, h1, p }) {
  return (
    <div>
      <div className="pt-6">
        <span className="font-medium font-roboto text-[1.5rem] lg:text-[1rem] mb-0 text-gray-400">
          {span}
        </span>
        <h1 className="text-[4rem] font-roboto text-red-500 dark:text-[#029CF5] hash-span font-bold lg:text-[2rem] mb-3">
          {h1}
        </h1>
        <p className="w-[50%] font-poppins lg:w-[100%] dark:text-[#d1d0d0]">{p}</p>
      </div>
    </div>
  );
}

export default HeadText;
