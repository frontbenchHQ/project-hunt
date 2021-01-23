import loaderIcon from "assets/images/loader.svg";
const Loader = ({ message }) => {
  return (
    <div className=" py-20 mb-40 text-center">
      <img
        src={loaderIcon}
        alt="loading"
        className="w-14 mb-4 mx-auto transform animate-spin rotate-180"
      />
      <h1 className="md:text-xl text-lg">{message}</h1>
    </div>
  );
};
export default Loader;
