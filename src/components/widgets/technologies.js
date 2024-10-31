
import dotnetLogo from "./../../assets/logos/dotnet.png"
import reactLogo from "./../../assets/logos/react.png"
import efLogo from "./../../assets/logos/ef.png"
import flutterLogo from "./../../assets/logos/flutter.png"
import pythonLogo from "./../../assets/logos/python.png"
import postmanLogo from "./../../assets/logos/postman.png"
import mssqlLogo from "./../../assets/logos/mssql.png"

const technologies = [
    dotnetLogo,
    reactLogo,
    efLogo,
    flutterLogo,
    pythonLogo,
    postmanLogo,
    mssqlLogo ];

function MyTechnologies() {
    return (
        <div className="flex flex-wrap gap-2">

            {technologies.map((tech)=>
             <a ><button href="" id="mail" className="bg-white sticky duration-500 border-2 border-black-600 fixed  w-28 transform hover:-translate-y-3   h-28 rounded-full">
                <img src={tech} className="rounded-full"/>
            </button></a>
            )}
        </div>
    )
}
export default MyTechnologies