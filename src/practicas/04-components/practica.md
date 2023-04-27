# Practica clase 4!

### Practica de componentes

1. Crea un componente Card que reciba una prop `children`

y que se vea así

```jsx	
<Card>
  card children
</Card>
```

```
+-----------------------+
|                       |
|     card children     |
|                       |
+-----------------------+
```

---

2. Edita el componente Card para que reciba una prop `title` y se vea así

```html
<Card title="card title">
  card children
</Card>
```

```
+-----------------------+
|       card title      |
+-----------------------+
|                       |
|     card children     |
|                       |
+-----------------------+
```

---

3. Edita el componente Card para que la prop `title` sea opcional

4. Edita el componente Card para que reciba una prop `footer` opcional y se vea así

```html
<Card footer="card footer">
  card children
</Card>
```

```
+-----------------------+
|                       |
|     card children     |
|                       |
+-----------------------+
|      card footer      |
+-----------------------+
```

```html
<Card title="card title" footer="card footer">
  card children
</Card>
```

```
+-----------------------+
|       card title      |
+-----------------------+
|                       |
|     card children     |
|                       |
+-----------------------+
|      card footer      |
+-----------------------+
```
