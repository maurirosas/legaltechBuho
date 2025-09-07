import React from "react";
import {Search, Search__button, Search__input} from "../styles/Search.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const SearchComponent = () => {
    return (
        <Search>
            <Search__input
                type="text"
                placeholder="Buscador de leyes y jurisprudencia"
            />
            <Search__button>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{color: "#2C2C2C"}}
                />
            </Search__button>
        </Search>
    );
};
