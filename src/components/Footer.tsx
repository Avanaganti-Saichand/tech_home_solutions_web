export default function Footer() {
  return (
    <footer className="bg-[#F4A300] text-black py-6 ">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Tech Home Electric Solutions</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
