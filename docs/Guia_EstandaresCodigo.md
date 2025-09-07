# 📘 Guía de Estándares de Código – Proyecto Synapse  

## 1. Reglas de Nombres  

### Variables  
- Usar `camelCase`.  
- Nombres claros y descriptivos.  
- No usar abreviaturas innecesarias.  

✅ `let userName = "Sara";`  
❌ `let User_name = "Sara";`  

# Clases y Componentes (React)  
- Usar `PascalCase`.  

✅ `class UserProfile {}`  
✅ `function LoginForm() {}`  
❌ `class user_profile {}`  

# Funciones  
- También en `camelCase`.  

✅ `function getUserData() {}`  
❌ `function Get_user_Data() {}`  

---

# 2. Comentarios y Documentación Interna  

- Usar **`//`** para comentarios cortos.  
- Usar **`/** ... `*/`** para documentar funciones, clases o métodos.  
- Explicar **qué hace** el código, no lo obvio.  

Ejemplo:  

```js
// Cálculo del promedio de notas
function calcularPromedio(notas) {
  /**
   * Recibe un array de números
   * Retorna el promedio redondeado
   */
  const suma = notas.reduce((a, b) => a + b, 0);
  return Math.round(suma / notas.length);
}

## Flujo de Ramas

Para el proyecto se definió el siguiente flujo de ramas:

- **main**  
  Contiene el código estable y listo para producción.  
  Solo se hacen merges desde `develop` cuando una versión está lista.  

- **develop**  
  Rama de integración. Aquí se combinan las nuevas funcionalidades terminadas en `feature/*`.  

- **feature/**  
  Cada nueva funcionalidad se desarrolla en su propia rama, creada a partir de `develop`.  
  Ejemplos:  
  - `feature/login`  
  - `feature/dashboard`  
  - `feature/chat-colaborativo`
