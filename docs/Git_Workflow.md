# 🌱 Git Workflow – Proyecto Synapse

## 1. Convención de Commits

Se usará la convención **tipo(scope): mensaje** en español o inglés sencillo, en tiempo presente.  

Ejemplos:  
- `feat(login): implementar autenticación con JWT`  
- `fix(api): corregir validación de usuario`  
- `docs(README): actualizar instrucciones de instalación`  
- `style(ui): ajustar márgenes en el formulario`  
- `refactor(dashboard): simplificar lógica de carga`  
- `test(auth): agregar pruebas unitarias a login`  

### Tipos de commit aceptados
- `feat`: nueva funcionalidad  
- `fix`: corrección de errores  
- `docs`: cambios en documentación  
- `style`: cambios de formato (espacios, comas, etc., sin afectar lógica)  
- `refactor`: cambios en la estructura del código sin modificar su comportamiento  
- `test`: añadir o modificar pruebas  

---

## 2. Frecuencia de Push/Pull

- Cada integrante debe **hacer push de sus cambios al menos una vez al día**.  
- Antes de comenzar a trabajar:  
  ```bash
  git pull origin develop
