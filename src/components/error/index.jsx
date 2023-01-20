import { useRouteError, Link } from "react-router-dom";
import ErrorPage from "../../assets/error-page.svg";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Error() {
    const error = useRouteError();
    //console.error(error);

    return (
        <div id="error-page" className="flex flex-col h-screen select-none">
            <div className="bg-gray-900 flex flex-wrap flex-grow flex-col items-center justify-between">
                <div className="flex flex-col justify-center items-center h-full">
                    <Link to="/portfolio/" className="flex h-12 w-12 bg-white text-gray-900 rounded-full justify-center items-center mb-4"><HomeIcon className="block h-10 w-10" /></Link>
                    <img className="w-80 mb-5" src={ErrorPage} alt="404" />
                    <h1 className="text-white text-3xl font-bold mb-3">Oops!</h1>
                    <p className="text-white text-xl font-medium mb-3">Sorry, an unexpected error has occurred.</p>
                    <p className="text-white text-xl font-medium">
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
}