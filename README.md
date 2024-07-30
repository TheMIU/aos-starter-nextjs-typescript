
# AOS + Next.js + TypeScript Template

## Getting Started

### Clone and Run

```bash
npm install
```

### Without Clone Steps

1. **Install AOS**:

```bash
npm install aos
```

2. **Import AOS in your `page.tsx`**:

```typescript
import AOS from "aos";
import "aos/dist/aos.css";
```

3. **Initialize AOS in `useEffect`**:

```typescript
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
```

4. **Add AOS to your elements**:

```typescript
<div data-aos="fade-up">
  {/* Content */}
</div>
```
---
More : https://michalsnik.github.io/aos/