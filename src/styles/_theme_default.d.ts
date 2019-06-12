import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    maxWidth: string
    borderRadius: string

    colors: {
      text_main: string
      text_secondary: string
      text_logo: string
      bg_main: string
      bg_secondary: string
      bg_logo: string
      border_main: string
      border_secondary: string
      border_logo: string
    }
  }
}
