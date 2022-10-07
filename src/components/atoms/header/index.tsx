import { Link } from 'react-router-dom';

import { Header, RightSideNaviganion } from "./styled-components";

export function HeaderContainer() {

    return (
        <Header>
            <Link to='/' >Home</Link>
            <RightSideNaviganion>
                <Link to='/photo-list' >Photo List</Link>
                <Link to='/random-photo' >Generate photo</Link>
                <Link to='/archived-photo' >Storage</Link>
            </RightSideNaviganion>
        </Header>
    )
}