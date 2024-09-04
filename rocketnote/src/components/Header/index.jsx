import {Container, Profile, Logout} from './styles';
import {RiShutDownLine} from 'react-icons/ri'


export function Header() {
    return(
        <Container>
            <Profile to = "/profile">
                <img 
                src = "https://github.com/GabiHonoria.png"
                alt= "User photo"
                />

                <div>
                    <span>Welcome</span>
                    <strong>Gabriela Honória</strong>
                </div>

            </Profile>

            <Logout>
           <RiShutDownLine/>
            </Logout>

        </Container>
    );
}