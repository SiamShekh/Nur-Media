
const NoVideo = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <img src="https://www.sins.si/static/arhiv/img/no_results.png" className="w-full mx-10" />
            <p className="text-2xl font- mt-5">No results found</p>
            <p className="mt-5 mx-5 text-center">Try different keywords or remove search filters</p>

        </div>
    );
};

export default NoVideo;