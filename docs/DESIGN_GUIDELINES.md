# Guia de Design - Regras e Padrões

## Cores Base

### Cores Claras
- **Primary**: `slate-50`
  - Uso: Fundos claros e textos em dark mode
  - Exemplo: `bg-slate-50`, `dark:text-slate-50`

- **Secondary**: `slate-100`
  - Uso: Estados hover e elementos secundários
  - Exemplo: `hover:bg-slate-100`

### Cores Escuras
- **Primary**: `zinc-950`
  - Uso: Textos em modo claro e fundos em dark mode
  - Exemplo: `text-zinc-950`, `dark:bg-zinc-950`

- **Secondary**: `zinc-900`
  - Uso: Estados hover e elementos secundários em dark mode
  - Exemplo: `dark:hover:bg-zinc-900`

### Cor de Destaque (Accent)
- **Primary**: `blue-500`
  - Uso: Links, botões e elementos interativos
  - Exemplo: `text-blue-500`, `hover:text-blue-500`

- **Contrast**: `blue-600`
  - Uso: Quando necessário maior contraste
  - Exemplo: `dark:hover:text-blue-600`

## Regras de Implementação

### 1. Dark Mode
- **Obrigatório**: Todo componente deve ter suporte a dark mode
- **Sintaxe**: Usar prefixo `dark:` para estilos específicos
- **Exemplo**:
  ```tsx
  className="
    text-zinc-950 
    dark:text-slate-50
    hover:text-blue-500 
    dark:hover:text-blue-500
  "
  ```

### 2. Estados Hover
- **Quando usar**: Em elementos interativos (links, botões, cards)
- **Transição**: Sempre incluir `transition` para suavizar
- **Exemplo**:
  ```tsx
  className="
    transition
    hover:text-blue-500
    dark:hover:text-blue-500
  "
  ```

### 3. Consistência
- Manter padrão de cores em toda aplicação
- Usar as mesmas transições
- Seguir os mesmos espaçamentos
- Reutilizar componentes quando possível

### 4. Acessibilidade
- Garantir contraste adequado entre texto e fundo
- Usar `blue-600` quando necessário maior contraste
- Manter legibilidade em ambos os modos (claro/escuro)

## Como Usar

1. Importar o tema:
```tsx
import { theme } from '@/styles/theme'
```

2. Aplicar classes seguindo o padrão:
```tsx
className={`
  ${theme.lightMode.text}
  ${theme.darkMode.text}
  ${theme.transitions.default}
  ${theme.spacing.rounded.medium}
`}
```

3. Validar se novos componentes seguem estas regras antes de implementar

## Checklist de Implementação

- [ ] Cores base corretas (slate-50/100, zinc-950/900)
- [ ] Suporte a dark mode implementado
- [ ] Estados hover definidos quando necessário
- [ ] Transições suaves aplicadas
- [ ] Contraste adequado em ambos os modos
- [ ] Espaçamentos e bordas consistentes
