import HomeIcon from "./imgs/home.svg";
import SearchIcon from "./imgs/search.svg";
import MyFavoritesIcon from "./imgs/favorites.svg";

interface IRoute {
    text : string;
    url : string;
    icon : string;
}
export const ROUTES : Array<IRoute> = [{
    text : "Home", url : "/", icon : HomeIcon
},{
    text : "Search", url : "/search", icon : SearchIcon
},{
    text : "My favorites", url : "/my-favorites", icon : MyFavoritesIcon
}];