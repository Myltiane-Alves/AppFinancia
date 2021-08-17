import React from 'react';
import {View, TextView} from 'react-native';

import { 
    Background,
    Container,
    Logo, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText 
} from './styles';

export default function SignIn() {
    return(
        <Background>
            <Container>
                <Logo source={require('../../assets/Logo.png')}/>

                <AreaInput>
                    <Input
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder="Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link>
                   <LinkText>Criar uma conta!</LinkText> 
                </Link>

            </Container>
        </Background>
    )
}