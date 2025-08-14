import ModalTarget from "./ModalTarget";

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

      <div className="w-full h-1 bg-indigo-500 rounded-full my-7"></div>

      <div className="flex flex-wrap">
        <ModalTarget/>
      </div>
    </>
  );
};

export default Target;
