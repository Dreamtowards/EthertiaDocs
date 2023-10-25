
# Coding Spec

在本文，将介绍项目的编码规范

## Naming Convensioins

### Class Name

always using `ClassName`<sup>(PascalCase)</sup> 
in high-abstraction level

often using `type_name_t` or `typename_t`<sup>(snake_case/flatcase + `_t`)</sup> 
in low-level abstraction layer

### Function Name

always using `FuncName()` 
for `class-public member&static` functions.

often use `_FuncName()` 
for `static-global-function` (or called 'Internal Linkage Function' which only visible in current compilation unit / .cpp file)

often use `func_name()` in low-abstraction layer.


### Variable Name

1. use `m_VarName` for `class-private member` variables.

2. use `VarName` or `flatcase` for `class-public member` vaiables.

3. use `s_VarName` or whatever for `func-local static varible`

4. use `camelCase` or `flatcase` for `func-local` variables.



## Declaration & Definition

1. always only public classes/functions are declared in header files.

2. define big-function on source .cpp files.

3. define lightweight functions (about 1-3 statements)  in header (inline)
