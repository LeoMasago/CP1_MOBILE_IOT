### Integrantes
- Léo Masago 557768
- Luiz Henrique Silva 555235
- Eduardo Tomazela 556807

### Descrição do projeto
- Projeto desenvolvido com finalidade de ser um front-end de uma tela de login do aplicativo da FIAP.

### Tecnologias
- **Expo**: fluxo de desenvolvimento simplificado para React Native
- **React Native**: desenvolvimento mobile nativo com React
- **TypeScript**: tipagem estática para maior segurança
- **NativeWind**: estilização usando utilitários à la Tailwind
- **Icons Expo**: Icones

### Pré-requisitos
- Node.js LTS instalado
- Expo CLI (opcional) ou npx
- iOS Simulator/Xcode ou Android Studio/Emulador, ou o aplicativo Expo Go no celular

### Como iniciar
1. Instale as dependências:
```bash
npm install
```
2. Inicie o projeto:
```bash
npm run start
```
3. Escolha a plataforma:
```bash
# no terminal do Expo
i  # iOS
a  # Android
w  # Web (quando aplicável)
```

### Scripts úteis
- `npm run start`: inicia o Metro/Expo
- `npm run android`: abre no emulador Android
- `npm run ios`: abre no simulador iOS
- `npm run web`: abre no navegador (quando aplicável)

### Estrutura principal
```
assets/               # imagens e fontes
components/           # componentes da aplicação
styles/               # estilos globais e presets do NativeWind
types/                # tipos e declarações auxiliares
App.tsx               # entrada principal do app
babel.config.js       # plugin do nativewind e presets do Expo
metro.config.js       # config do Metro (resolução e assets)
tailwind.config.js    # configuração do NativeWind/Tailwind
nativewind-env.d.ts   # tipos do NativeWind
tsconfig.json         # configuração TypeScript
```


