# ToDoReact

React və Vite ilə qurulmuş sadə Todo (tapşırıq) tətbiqi. Ant Design komponentlərindən və Tailwind CSS-dən istifadə olunur.

## Xüsusiyyətlər

- Tapşırıq əlavə etmə
- Tapşırıqları siyahı şəklində göstərmə
- Tapşırıq siyahısı boş olduqda xəbərdarlıq komponenti (`NotFoundComponent`)
- Ant Design ikonları və komponentləri ilə müasir interfeys

## Texnologiyalar

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev)
- [Ant Design](https://ant.design)
- [Tailwind CSS](https://tailwindcss.com)
- [Oxlint](https://oxc.rs)

## Başlamaq üçün

Asılılıqları quraşdırın:

```bash
npm install
```

Development server-i işə salın:

```bash
npm run dev
```

Production üçün build edin:

```bash
npm run build
```

Kodu lint yoxlamasından keçirin:

```bash
npm run lint
```

## Layihə strukturu

```
src/
  Components/
    db/todos.js       # Tapşırıqların data mənbəyi
    ui/                # Köməkçi UI komponentləri (NotFoundComponent və s.)
    todo.jsx           # Tək bir tapşırıq elementi
    Todos.jsx          # Tapşırıqların siyahısı
    Todoinput.jsx       # Yeni tapşırıq əlavə etmə forması
  App.jsx
  main.jsx
```
