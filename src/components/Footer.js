import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center border-t mt-auto py-4">
      <span className="my-4 text-gray-800">
        Designed and Developed by{" "}
        <a
          className="hover:underline font-semibold"
          href="https://desaihetav.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Hetav Desai
        </a>
      </span>
      <span className="my-4 flex items-center text-gray-800">
        <img src={github} className="mr-1 w-4 h-4" alt="GitHub Logo" />
        <a
          className="hover:underline font-medium"
          href="https://www.github.com/desaihetav/notes-hd"
          target="_blank"
          rel="noreferrer"
        >
          / desaihetav / notes-hd
        </a>
      </span>
    </div>
  );
}
