interface buttonProps {
  btnText: string;
  className?: string;
  btnIcon: any;
}

export default function Button({ btnText, className, btnIcon }: buttonProps) {
  return (
    <main className="">
      <button
        className={`px-8 py-3 cursor-pointer  flex justify-between rounded-full  transition duration-700 ease-in-out ${className}`}
      >
        <div className="mr-2">{btnIcon}</div>
        {btnText}
      </button>
    </main>
  );
}
