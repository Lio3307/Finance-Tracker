const Target = () => {
  return (
    <>
      <p className="font-bold text-[2rem] mt-[3rem] md:mt-0">Target</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id facere
        necessitatibus voluptates repellat similique voluptatem perferendis ex
        repudiandae eos architecto quis aliquid eveniet, vel commodi, laboriosam
        dolores. Molestias, iste quam?
      </p>

      <div className="w-full h-1 bg-indigo-500 rounded-full my-8"></div>

      <div className="flex flex-wrap">
        <div className=" text-[1.6rem] border-2 hover:text-white hover:bg-indigo-600 cursor-pointer border-indigo-800 text-black font-bold py-[4rem] px-[4.3rem] rounded-[1.2rem]">
          +
        </div>
        
      </div>
    </>
  );
};

export default Target;
