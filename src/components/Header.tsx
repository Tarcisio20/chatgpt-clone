import IconAdd from "./icons/IconAdd";
import IconMenu from "./icons/IconMenu";

type Props = {
    openSidebarClick : ()=> void;
    title : string;
    newChatClick : ()=> void;
}

export const Header = ({ openSidebarClick, title, newChatClick } : Props) => {
    return(
        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">
            <div className="text-white" onClick={openSidebarClick}>
                <IconMenu width={24} height={24} /> 
            </div>
            <div className="mx-2 truncate text-white">{title}</div>
            <div className="text-white" onClick={newChatClick}>
                <IconAdd width={24}height={24} />
            </div>
        </header>
    )
}