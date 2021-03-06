import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center border-t mt-auto py-4">
      <span className="my-4 text-gray-800">
        Designed and Developed by{" "}
        <span className="font-semibold">Hetav Desai</span>
      </span>
      <span className="my-4 flex items-center text-gray-800">
        <img src={github} className="mr-1 w-4 h-4" />
        <a
          className="hover:underline font-medium"
          href="https://www.github.com/desaihetav/keep-clone"
        >
          /desaihetav/keep-clone
        </a>
      </span>
    </div>
  );
}
