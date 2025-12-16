<div align="center">

# 🎯 TypeScript Utility Types - Guía Completa

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/jjmartinmelero)

**Una colección completa de ejemplos prácticos de los Utility Types de TypeScript**

[Características](#-características) •
[Utility Types](#-utility-types-incluidos) •
[Instalación](#-instalación) •
[Uso](#-uso) •
[Autor](#-autor)

</div>

---

## 📖 Descripción

Este repositorio contiene una **guía práctica y completa** sobre los **Utility Types** más importantes de TypeScript. Cada archivo incluye ejemplos del mundo real que demuestran cómo y cuándo usar cada tipo de utilidad para escribir código más seguro, mantenible y expresivo.

## ✨ Características

- ✅ **11 Utility Types** cubiertos con ejemplos prácticos
- 📝 Código comentado y fácil de entender
- 🎓 Casos de uso del mundo real
- 🚀 Ejemplos ejecutables con `ts-node`
- 💡 Mejores prácticas de TypeScript

## 🛠️ Utility Types Incluidos

### 1️⃣ `Partial<T>`
**Archivo:** [`01-partial.ts`](01-partial.ts)

Hace que todas las propiedades de un tipo sean **opcionales**.

**Casos de uso:**
- ✏️ Actualizar parcialmente un perfil de usuario
- 🔍 Filtros de búsqueda opcionales

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

function updateUser(id: number, fieldsToUpdate: Partial<User>) {
  // Solo necesitas pasar las propiedades que quieres actualizar
}

updateUser(1, { email: "nuevo@correo.com" }); // ✅
```

---

### 2️⃣ `Required<T>`
**Archivo:** [`02-required.ts`](02-required.ts)

Hace que todas las propiedades de un tipo sean **obligatorias**.

**Casos de uso:**
- 📦 Validar que un producto tenga todos los campos antes de guardarlo
- ✅ Asegurar datos completos en formularios

```typescript
interface ProductIncomplete {
  id: number;
  name?: string;
  price?: number;
}

type ProductComplete = Required<ProductIncomplete>;

const productComplete: ProductComplete = {
  id: 1,
  name: "Switch 2",
  price: 100 // ✅ Ahora price es obligatorio
}
```

---

### 3️⃣ `Omit<T, K>`
**Archivo:** [`03-omit.ts`](03-omit.ts)

Crea un tipo **excluyendo** propiedades específicas.

**Casos de uso:**
- 🚫 Ocultar información sensible (spoilers, contraseñas)
- 📤 DTOs para APIs públicas

```typescript
interface Avenger {
  name: string;
  power: number;
  weapon: string;
  alive: boolean;
}

type AvengerWithoutSpoiler = Omit<Avenger, "alive">;

const ironman: AvengerWithoutSpoiler = {
  name: "Ironman",
  power: 100,
  weapon: "Armor"
  // alive no está disponible ✅
}
```

---

### 4️⃣ `Pick<T, K>`
**Archivo:** [`04-pick.ts`](04-pick.ts)

Crea un tipo **seleccionando** solo propiedades específicas.

**Casos de uso:**
- 📋 Mostrar solo información básica
- 🎯 Crear vistas simplificadas de datos

```typescript
interface Movie {
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
}

type MovieBasicInfo = Pick<Movie, "title" | "director">;

const movieBasicInfo: MovieBasicInfo = {
  title: "Movie 1",
  director: "Director 1"
}
```

---

### 5️⃣ `Readonly<T>`
**Archivo:** [`05-readonly.ts`](05-readonly.ts)

Hace que todas las propiedades sean **inmutables**.

**Casos de uso:**
- 🔒 Configuraciones que no deben cambiar
- 🛡️ Datos que deben permanecer constantes

```typescript
interface Pizza {
  name: string;
  toppings: Readonly<string[]>;
}

const pizza: Readonly<Pizza> = {
  name: "Pepperoni",
  toppings: ["pepperoni"],
}

// pizza.name = "Hawaiana"; // ❌ Error
// pizza.toppings.push("piña"); // ❌ Error
```

---

### 6️⃣ `Exclude<T, U>`
**Archivo:** [`06-exclude.ts`](06-exclude.ts)

Excluye tipos de una **unión de tipos**.

**Casos de uso:**
- 🦸 Separar héroes de villanos
- 🎭 Filtrar tipos específicos de una unión

```typescript
type Characters = "Iron Man" | "Spiderman" | "Thor" | "Thanos" | "Loki";

type Avengers = Exclude<Characters, "Thanos" | "Loki">;
type Villains = Exclude<Characters, Avengers>;

const hero: Avengers = "Iron Man"; // ✅
const villain: Villains = "Thanos"; // ✅
```

---

### 7️⃣ `Extract<T, U>`
**Archivo:** [`07-extract.ts`](07-extract.ts)

Extrae tipos de una **unión de tipos** que coincidan con una condición.

**Casos de uso:**
- 🎮 Filtrar tipos específicos de Pokémon
- 🔍 Seleccionar subconjuntos de tipos discriminados

```typescript
type Pokemon =
  | { type: "pikachu", thunderLevel: number }
  | { type: "charizard", fireLevel: number }
  | { type: "squirtle", waterLevel: number };

type WaterPokemon = Extract<Pokemon, { waterLevel: number }>;

const waterPokemon: WaterPokemon = { 
  type: "squirtle", 
  waterLevel: 10 
}; // ✅
```

---

### 8️⃣ `ReturnType<T>`
**Archivo:** [`08-return_type.ts`](08-return_type.ts)

Obtiene el **tipo de retorno** de una función.

**Casos de uso:**
- 🔐 Tipar respuestas de autenticación
- 📡 Inferir tipos de respuestas de API

```typescript
const createAuthResponse = (success: boolean) => {
  if (success) {
    const token = crypto.randomUUID();
    return { status: 200, token } as const;
  }
  return { status: 401, error: "Unauthorized" } as const;
}

type AuthResponse = ReturnType<typeof createAuthResponse>;

const authResponse: AuthResponse = {
  status: 200,
  token: "123asdasd-asdasdasd-asdasdads"
}; // ✅
```

---

### 9️⃣ `Parameters<T>`
**Archivo:** [`09-parameters.ts`](09-parameters.ts)

Obtiene los **tipos de los parámetros** de una función como tupla.

**Casos de uso:**
- 💬 Reutilizar parámetros de funciones
- 🔄 Crear wrappers de funciones

```typescript
function sendMessage(chatId: string, message: string, attachment?: File) {
  // ...
}

type SendMessageParams = Parameters<typeof sendMessage>;

type ChatId = SendMessageParams[0]; // string
type Message = SendMessageParams[1]; // string
type Attachment = SendMessageParams[2]; // File | undefined

const params: SendMessageParams = ["general", "hello world!", new File([""], "file.txt")];
sendMessage(...params); // ✅
```

---

### 🔟 `NonNullable<T>`
**Archivo:** [`10-non_nullable.ts`](10-non_nullable.ts)

Excluye `null` y `undefined` de un tipo.

**Casos de uso:**
- ✉️ Validar emails antes de enviar newsletters
- 🛡️ Asegurar que los valores no sean nulos

```typescript
type UserEmail = `${string}@${string}.${string}` | null | undefined;

function sendNewsletter(user: NonNullable<UserEmail>) {
  console.log(`Sending newsletter to ${user}`);
}

// Type guard para filtrar valores nulos
function isValidEmail(email: UserEmail): email is NonNullable<UserEmail> {
  return email !== null && email !== undefined;
}

users.filter(user => isValidEmail(user.email))
     .forEach(user => sendNewsletter(user.email!)); // ✅
```

---

### 1️⃣1️⃣ `Awaited<T>`
**Archivo:** [`11-awaited.ts`](11-awaited.ts)

Obtiene el tipo **resuelto** de una Promise.

**Casos de uso:**
- 🌐 Tipar respuestas de APIs asíncronas
- 🔄 Trabajar con funciones async

```typescript
async function getInfoFromGithub() {
  return fetch("https://api.github.com/users/jjmartinmelero")
    .then(res => res.json())
    .then(data => {
      const { name, avatar_url } = data as { name: string, avatar_url: string };
      return { name, avatar_url };
    });
}

type UserInfoFromGithubResponse = Awaited<ReturnType<typeof getInfoFromGithub>>;

const user: UserInfoFromGithubResponse = {
  name: "John Doe",
  avatar_url: "https://example.com/avatar.jpg"
}; // ✅
```

---

## 🚀 Instalación

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos

1. **Clona el repositorio:**

```bash
git clone https://github.com/jjmartinmelero/utility_types_typescript.git
cd utility_types_typescript
```

2. **Instala las dependencias:**

```bash
npm install
```

---

## 💻 Uso

### Ejecutar un archivo específico

Puedes ejecutar cualquier archivo TypeScript usando `ts-node`:

```bash
npx ts-node 01-partial.ts
```

### Compilar TypeScript

Para compilar todos los archivos TypeScript a JavaScript:

```bash
npx tsc
```

### Ejecutar con Node.js

Después de compilar, puedes ejecutar los archivos JavaScript:

```bash
node 01-partial.js
```

---

## 📚 Recursos Adicionales

- 📖 [Documentación oficial de TypeScript - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- 🎓 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🔧 [TypeScript Playground](https://www.typescriptlang.org/play)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes alguna mejora o ejemplo adicional, siéntete libre de:

1. Hacer un **fork** del proyecto
2. Crear una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un **Pull Request**

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Juan Jesús Martín Melero**

- 🐙 GitHub: [@jjmartinmelero](https://github.com/jjmartinmelero)
- 💼 LinkedIn: [Juan Jesús Martín Melero](https://www.linkedin.com/in/jjmartinmelero)

---

<div align="center">

### ⭐ Si este proyecto te ha sido útil, ¡dale una estrella!

**Hecho con ❤️ y TypeScript**

</div>