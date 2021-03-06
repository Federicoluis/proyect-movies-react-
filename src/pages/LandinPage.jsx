import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";


export function LandingPage(){
    const [query] = useSearchParams();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 500);
    return <div>
        <Search />
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}/> 
    </div>;
}

//aprovechar la Key para destruir el componente y volverlo al estado inicial de busqueda 