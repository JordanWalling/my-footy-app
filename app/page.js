export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col	items-center justify-center h-screen">
        <h1 className="text-xl font-extrabold mb-2">
          Welcome to{" "}
          <span className="text-2xl font-black text-cyan-600">
            My Footy App
          </span>
        </h1>
        <h3 className="text-sm font-thin tracking-wide uppercase">
          Home to all your footy stats
        </h3>
      </div>
    </div>
  );
}
