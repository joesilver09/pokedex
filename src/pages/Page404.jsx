import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="grid gap-2  p-1 text-center place-content-center min-h-[95vh] max-w-[800px] mx-auto relative">
      <div className="absolute h-[25%] -z-10">
        <img src="images/404_1.png" alt="" className="h-full w-full"/>
      </div>
      <div>
        <div>
          <h3 className="text-2xl">OOOPS</h3>
          <h2 className="text-8xl font-bold">404</h2>
          <h3 className="text-2xl mb-8">Page not found!</h3>
        </div>
        <hr />
        <div>
          <p className="text-xs pt-2 mb-3 ">It seems that you got lost</p>
          <Link to="/" className="bg-[#D93F3F] m-2 p-1 rounded text-white">
            Go back home?
          </Link>
        </div>
      </div>
      <div className="absolute h-[25%] -z-10 right-0 bottom-0">
        <img src="images/404_2.png" alt="" className="h-full w-full"/>
      </div>
    </section>
  );
};
export default Page404;
