import { HiMiniHome } from "react-icons/hi2";
import { MdSubscriptions } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Footer = () => {
    return (
        <div className="sticky bottom-0 z-20 w-full flex flex-row items-center justify-between h-20 border-t px-4 py-3 md:px-5 bg-white dark:bg-black">

            <div className="flex w-1/3 flex-col justify-center items-center">
                <HiMiniHome className="text-xl" />
                <p className="text-xs font-bold">Home</p>
            </div>

            <div className="flex w-1/3 flex-col justify-center items-center">
                <MdSubscriptions className="text-xl text-gray-500" />
                <p className="text-xs">Subscriptions</p>
            </div>

            <div className="flex w-1/3 flex-col justify-center items-center">
                <IoIosSettings className="text-xl text-gray-500" />
                <p className="text-xs">Settings</p>
            </div>

        </div>
    );
};

export default Footer;