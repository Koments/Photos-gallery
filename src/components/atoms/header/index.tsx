import { Link } from 'react-router-dom';


import { Header } from "./styled-components";

export function HeaderContainer() {

    return (
        <Header>
            <Link to='/'>Home</Link>
            <Link to='/archived-photo'>Storage</Link>
        </Header>
    )
}