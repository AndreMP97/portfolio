import Navbar from "../../components/navbar/index";
import Error from "../../components/error/index";

export default function ErrorPage() {
    return (
        <div id="error-page" className="flex flex-col h-screen">
            <Navbar /> 
            <Error />
        </div>
    );
}