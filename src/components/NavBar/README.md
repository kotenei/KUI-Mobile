# API

```jsx
import { NavBar } from 'kui-mobile';
```

## NavBar

| 名称         | 类型                      | 默认值  | 描述                      |
| ------------ | ------------------------- | ------- | ------------------------- |
| icon         | React.ReactNode           | -       | 图标                      |
| mode         | string                    | 'light' | 模式，可选 'light' 'dark' |
| leftContent  | React.ReactNode \| string | -       | 左则区域内容              |
| rightContent | React.ReactNode \| string | -       | 右则区域内容              |
| onLeftClick  | () => void                | -       | 左则点击回调              |
| onRightClick | () => void                | -       | 右则点击回调              |
