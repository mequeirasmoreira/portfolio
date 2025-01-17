/**
 * Design System Base
 * Este arquivo contém as definições base de cores e estilos do projeto
 */

export const theme = {
  colors: {
    // Cores claras
    light: {
      primary: 'slate-50',    // Uso principal em fundos claros e textos em dark mode
      secondary: 'slate-100', // Variação mais escura para hover e elementos secundários
    },
    
    // Cores escuras
    dark: {
      primary: 'zinc-950',    // Uso principal em textos e fundos em dark mode
      secondary: 'zinc-900',  // Variação mais clara para hover e elementos secundários
    },

    // Cor de destaque (accent)
    accent: {
      primary: 'blue-500',    // Cor principal para links e ações
      contrast: 'blue-600',   // Variação mais escura para melhor contraste
    }
  },

  // Regras de uso para modo escuro
  darkMode: {
    background: 'dark:bg-zinc-950',
    text: 'dark:text-slate-50',
    hover: 'dark:hover:text-blue-500',
    border: 'dark:border-zinc-800',
  },

  // Regras de uso para modo claro
  lightMode: {
    background: 'bg-slate-50',
    text: 'text-zinc-950',
    hover: 'hover:text-blue-500',
    border: 'border-slate-200',
  },

  // Transições e animações padrão
  transitions: {
    default: 'transition-all duration-200 ease-in-out',
  },

  // Espaçamentos e bordas
  spacing: {
    padding: {
      small: 'p-2',
      medium: 'p-4',
      large: 'p-6',
    },
    margin: {
      small: 'm-2',
      medium: 'm-4',
      large: 'm-6',
    },
    rounded: {
      small: 'rounded',
      medium: 'rounded-lg',
      large: 'rounded-xl',
    }
  }
}

/**
 * Guia de Uso:
 * 
 * 1. Cores:
 *    - Para textos claros: theme.colors.light.primary (slate-50)
 *    - Para textos escuros: theme.colors.dark.primary (zinc-950)
 *    - Para destaque: theme.colors.accent.primary (blue-500)
 * 
 * 2. Dark Mode:
 *    - Sempre incluir variantes dark mode usando as classes do tema
 *    - Exemplo: ${theme.darkMode.text} ${theme.darkMode.hover}
 * 
 * 3. Hover States:
 *    - Sempre definir estados hover quando o elemento for interativo
 *    - Usar as cores de contraste quando necessário
 * 
 * 4. Consistência:
 *    - Manter padrão de cores em toda aplicação
 *    - Usar as transições padrão para interações
 *    - Seguir os espaçamentos definidos
 */
