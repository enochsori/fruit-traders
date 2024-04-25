# The Fruit Emporium

---

In this workshop, I built an online fruit store, with different items being sold by different sellers.
It is only focused in client side.

- React
- Typescript
- Tailwind CSS

### Homepage:

![homepage screenshot](./public/images/homepage.png)

### About page:

![About screenshot](./public/images/about-page.png)

### Items page

!["Banana" item page screenshot](./public/images/item-detail.png)

---

### Page routing

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/:itemId',
        element: <ItemDetail />,
      },
      {
        path: '/confirm',
        element: <Confirmation />,
      },
    ],
  },
]);
```
