function Card() {
  return (
    <div className="bg-themeFloat p-4 rounded-lg shadow border-[1px] border-themeBgNotification  ">
      <p className="text-xl font-semibold mb-2 text-themeLabelPrimary">
        Forward Compatibility and Toolchain Management in Go 1.21
      </p>
      <p className="text-sm font-normal mb-2 text-themeLabelSeconday  ">
        5 min read . Aug 2023
      </p>
      <div className="max-w-lg mx-auto ]">
        <img
          src="https://picsum.photos/600/400"
          alt="Image"
          className="w-full h-40 rounded-lg object-cover "
        ></img>
      </div>
    </div>
  );
}

export default Card;
