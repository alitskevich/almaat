# Web Application Fundamentals

---

## Application Types

### Single-Page Applications (SPA)

SPAs update the current page without full reloads, providing app-like navigation.

| Characteristic | Description |
| --- | --- |
| Initial Load | Downloads full application bundle |
| Navigation | Client-side routing, no page reloads |
| Data Fetching | API calls for dynamic content |
| SEO | Requires SSR or pre-rendering |

### Progressive Web Applications (PWA)

PWAs are installable web apps with offline support.

| Feature | Implementation |
| --- | --- |
| Installable | Web App Manifest |
| Offline Support | Service Workers |
| Push Notifications | Push API |
| Background Sync | Background Sync API |
| Secure | Required HTTPS |

**Web App Manifest:**

```json
{
    "name": "My PWA App",
    "short_name": "PWA App",
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#4a90d9",
    "icons": [
        { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
        { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
    ]
}
```

**Service Worker (cache-first with network fallback):**

```javascript
const CACHE_NAME = 'my-pwa-cache-v1';
const STATIC_ASSETS = ['/', '/index.html', '/styles/main.css', '/scripts/app.js'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(names =>
            Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
```

---

## Data Formats

### JSON

The dominant web data exchange format.

```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "active": true,
            "scores": [95, 87, 92]
        }
    ],
    "total": 1,
    "page": 1
}
```

| Vulnerability | Prevention |
| --- | --- |
| JSON Injection | Input validation |
| DoS via large payload | Size limits |
| Prototype Pollution | Deep clone, freeze objects |
| XSS via `eval()` | Always use `JSON.parse()` |

Use CORS instead of JSONP (JSONP is XSS-vulnerable).

### XML

Still relevant for enterprise systems and document formats.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<users>
    <user id="1">
        <name>John Doe</name>
        <email>john@example.com</email>
    </user>
</users>
```

---

## Client-Server Communication

### HTTP

| Method | Idempotent | Safe | Description |
| --- | --- | --- | --- |
| GET | Yes | Yes | Retrieve resource |
| POST | No | No | Create resource |
| PUT | Yes | No | Replace resource |
| PATCH | No | No | Partial update |
| DELETE | Yes | No | Delete resource |

| Code Range | Category | Examples |
| --- | --- | --- |
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirection | 301 Moved, 304 Not Modified |
| 4xx | Client Error | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| 5xx | Server Error | 500 Internal Error, 502 Bad Gateway |

### REST

Uses HTTP semantics for API design. Resources identified by URI, stateless requests.

```text
GET    /api/users           # List
GET    /api/users/123       # Get one
POST   /api/users           # Create
PUT    /api/users/123       # Replace
DELETE /api/users/123       # Delete

GET /api/users?role=admin&active=true    # Filter
GET /api/users/123/posts                 # Relationship
```

### GraphQL

Clients request exactly the data they need — no over- or under-fetching.

```graphql
query GetUsers {
    users(first: 10) {
        id
        name
        posts { title }
    }
}

mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id
        name
        errors { field message }
    }
}
```

| Aspect | REST | GraphQL |
| --- | --- | --- |
| Endpoints | Multiple | Single |
| Over-fetching | Common | None |
| Type safety | Optional | Built-in |
| Caching | Native HTTP | Requires setup |

### WebSockets

Bidirectional real-time communication over a persistent TCP connection.

```javascript
const socket = new WebSocket('wss://api.example.com/ws');

socket.onopen = () => socket.send(JSON.stringify({ type: 'SUBSCRIBE', channel: 'updates' }));
socket.onmessage = (event) => console.log('Received:', JSON.parse(event.data));
socket.onclose = (event) => console.log('Disconnected:', event.code);
socket.onerror = (error) => console.error('Error:', error);

socket.close(1000, 'Done');
```

| Technology | Use Case | Browser Support |
| --- | --- | --- |
| WebSockets | Bidirectional real-time | Excellent |
| Server-Sent Events | Server-to-client streaming | Good |
| Long Polling | Fallback | Universal |

---

## Browser Technologies

### DOM

The DOM represents the page as a tree of nodes that JavaScript can manipulate.

| Operation | Performance |
| --- | --- |
| `getElementById` | Fastest |
| `querySelector` | Fast |
| `textContent` | Fast |
| DOM creation | Slow — minimize, use fragments |
| Layout thrashing | Very slow — batch reads then writes |

```javascript
// Bad - multiple reflows
elements.forEach(el => { const h = el.offsetHeight; el.style.height = (h + 10) + 'px'; });

// Good - batch reads then writes
const heights = Array.from(elements).map(el => el.offsetHeight);
elements.forEach((el, i) => { el.style.height = (heights[i] + 10) + 'px'; });

// Use fragment for bulk inserts
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
```

### Events

Events bubble from target up to Window (capture phase goes the other direction).

**Event delegation** — attach one listener to the parent instead of many to children:

```javascript
document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.classList.contains('item')) {
        handleItemClick(event);
    }
});
```

### Browser Storage

| Storage | Capacity | Expiration | Scope |
| --- | --- | --- | --- |
| Cookie | 4KB | Configurable | All frames |
| localStorage | 5–10MB | Never | Same origin |
| sessionStorage | 5–10MB | Tab close | Same tab |
| IndexedDB | Hundreds of MB | Never | Same origin |

```javascript
// localStorage
localStorage.setItem('user', JSON.stringify({ name: 'John' }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');

// IndexedDB
const request = indexedDB.open('MyDatabase', 1);
request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const store = db.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('email', 'email', { unique: true });
};
```

---

## CSS Fundamentals

### Box Model

Each element is a rectangular box: content → padding → border → margin.

Use `box-sizing: border-box` so width/height include padding and border.

### Flexbox

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
}

.item {
    flex: 1;        /* grow: 1, shrink: 1, basis: 0 */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
}
```

### Grid

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
```

### Responsive Design (Mobile-First)

```css
/* Base (mobile) */
.container { padding: 16px; }

/* Tablet */
@media (min-width: 768px) {
    .container { padding: 24px; display: grid; grid-template-columns: 200px 1fr; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { max-width: 1200px; margin: 0 auto; }
}
```

---

## HTML5

### Semantic Elements

Use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` to describe content meaning.

### Form Enhancements

```html
<input type="email" required autocomplete="email">
<input type="url" pattern="https://.*">
<input type="number" min="0" max="100" step="1">
<input type="date" min="2024-01-01">
<input type="file" accept=".pdf,.doc">
<input type="text" required minlength="3" maxlength="50">
```

---

## WCAG (Accessibility)

| Principle | Description |
| --- | --- |
| **Perceivable** | Content presentable in ways users can perceive |
| **Operable** | UI components must be operable |
| **Understandable** | Information and operation must be clear |
| **Robust** | Content works with assistive technologies |

```html
<!-- Live region for dynamic updates -->
<div aria-live="polite" aria-atomic="true">Status: {{ message }}</div>

<!-- Hidden decorative icon with label -->
<button aria-label="Close dialog">
    <span aria-hidden="true">&times;</span>
</button>

<!-- Image with extended description -->
<img src="chart.png" alt="Sales chart showing 25% growth in Q4"
     aria-describedby="chart-details">
<p id="chart-details">Detailed description...</p>

<!-- Expandable control -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" hidden><!-- Menu content --></div>
```

---

## Browser APIs

### Fetch API

```javascript
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ name: 'New User' })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}
```

### Geolocation API

```javascript
navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log('Lat:', position.coords.latitude);
        console.log('Lng:', position.coords.longitude);
    },
    (error) => console.error('Error:', error),
    { enableHighAccuracy: true, timeout: 5000 }
);

// Watch position
const watchId = navigator.geolocation.watchPosition(
    pos => console.log(pos),
    err => console.error(err)
);
navigator.geolocation.clearWatch(watchId);
```

---

## References

1. [MDN Web Docs](https://developer.mozilla.org/)
2. [Web.dev PWA Guide](https://web.dev/learn/pwa/)
3. [GraphQL Documentation](https://graphql.org/)
4. [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
5. [HTML5 Specification](https://html.spec.whatwg.org/)
