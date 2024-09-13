import { DivStyle, InputStyle, ShowPassStyle } from './style'

export default function InputLogin() {

    return(
      <body>
        <DivStyle>
          <InputStyle placeholder='Teste email' type='email'/>
        </DivStyle>
        <DivStyle>
          <InputStyle placeholder='Teste senha' type='password'/>
          <ShowPassStyle />
        </DivStyle>
      </body>
      
    );
  }
