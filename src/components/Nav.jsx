function Nav() {
  return (
    <div>
      <nav className="flex  h-10 justify-center items-center row pl-1 pr-1 absolute top-0 left-0 right-0 z-0  dark:bg-[#050818] py-3 ">
        <div className="flex justify-center flex-1 p-6 lg:p-2  w-full items-center lg:justify-start font-extrabold text-red-400 dark:text-[#029CF5] ">
          <span className="font-poppins text-[1.5rem] dark:text-[#15EDED] sm:text-[1.2rem]">
            WiziCodes.
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
