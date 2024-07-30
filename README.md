### To use template, clone and run
```bash
npm -i 
 ```

### without clone steps
Terminal
```bash
npm install aos
```

page.tsx
```ts
import AOS from "aos";
import "aos/dist/aos.css";
```
```ts
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
```
```ts
<div data-aos="fade-up">
     {/* Content */}
</div>
```