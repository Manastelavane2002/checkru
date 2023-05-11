# Code Guidelines

> This document contains code guidelines that might not be caught by the linter.

## Folder structure

- SSR pages are configured/ accessed from `src/pages`

- Components are divided into four sub-categories
  - `src/components/global` - All the common global components used in the PWA. Eg `Button`
  - `src/components/hoc` - HOC components used to optimize existing components. Eg `AuthContainer`
  - `src/components/modules` - Components sepcific to a specific module
  - `src/components/pages` - Page containers that recieve the props from SSR.

- For storing data, the application uses context. (Read more)[https://react.dev/reference/react/useContext]
    - All contexts are defined in `src/context`.
    

- Helper functions are defined in `src/utils`. Eg. `src/utils/string-functions`.

- App constants are defined in `src/constants`. Constants include params like image paths, storage keys etc.

- Custom re-usable hooks defined in `src/hooks`.

- All the API functions are defined in `src/api`. *TODO*: Update doc once setting up api.

- Global styles defined in `src/styles/global.css`. Any other style param can be accessed and managed from `tailwind.config.js`.

## Adding Code

- Components are grouped by directories. Each directory will have an explicitly named component and adjacent styles, constants, and anything else specific to the component. Avoid using `index.tsx` for the component file name. Use `index.ts` only when the folder contains multiple usable exports. Eg: export from `Button.types.ts` and `Button.ts`.

```
components/
  global/
     Button/
        Button.tsx
```

- A naming convention for constants is all caps and snake case, and enums are encouraged over objects. eg `FOO_BAR.BAZ` Component-specific constants should go at the top of the component unless there are many, in which case they should be in an adjacent file in the component directory. If a constant is used elsewhere in the code, it should be in `src/constants/`

- Avoid using anonymous functions

```diff
- const foo = () => {
+ function Foo() {
  console.log('howdy')
}
```

- Try to segregate UI and functional logic. The base component should only have the UI logic, If the additional functional logic is large enough, it should be defined the corresponding `.utils.ts` file. Similarly props should be defined in a corresponding `types file`.

```
components/
  global/
     Button/
        Button.tsx
        Button.types.ts
        Button.utils.ts
```

## Context

Create new context instances in `/context`. Use the `createContext` utility to create a provider and hook. `createContext` provides a better Typescript development experience than the default React implementation; you don't need to provide a default value or add checks for null/undefined.

### Simple Implementation

```javascript
// MyContext.context.ts

const MyContext = createContext<MyContextType>();

export const MyContextProvider = MyContext.Provider;

export const useMyContext = MyContext.useContext;

// SomePage.container.tsx

<MyContextProvider>
  <OtherComponent />
</MyContextProvider>

// OtherComponent.tsx

const { coolContextProp } = useMyContext();
```

### Complex Implementation

You can also wrap the `createContext` provider in your own custom provider to add properties or define the context value internally.

```javascript
// MyContext.context.ts

const MyContext = createContext<MyContextType>();

function useContextSetup() {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    setIsOpen
  }
}

export function MyContextProvider({ children }: { children: ReactNode }) {
  const value = useContextSetup();
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export const useMyContext = MyContext.useContext;
```

### When & Where

Context is not needed in all cases; `useState` and `useReducer` on their own can manage many use cases. Context is great for:

- Data that needs to be available throughout the application
- Data that is cumbersome to pass through multiple components (see an article on [Prop drilling](https://kentcdodds.com/blog/prop-drilling) for help making the decision)

Context should live as close to where it's needed as possible.

- Some context needs to be at the app-level; you can pass these context at `src/pages/_app.tsx`.
- In other cases, a context provider can wrap a subset of components, like the `AuthContext` module, or a specific page.


## Props

- Destructure props within a component:

```diff
- function Component(props: Props)
+ function Component({ foo, bar, ...rest }: Props)
```

- Prop interfaces should be named `Props` unless they need to be used in another file.

```
export interface PopularProps {
  woo: string
}

interface Props {
  boo: string
}
```

## Typescript notes

### Union types and enums as unique identifiers

Union types are used throughout the codebase. To illustrate how to properly assign enums as an identifier for type checking, the example from https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types will be used.

To make a field unique, the value from the enum has to be used. It cannot reference any one of the fields in the enum.

```
enum ShapeKind {
    Circle = 'Circle',
    Square = 'Square,
}
```

```diff
- interface Circle {
-   kind: ShapeKind; // oneof enum vals
-   radius: number;
- }
- interface Square {
-   kind: ShapeKind; // oneof enum vals
-   sideLength: number;
- }

if (shape.kind === ShapeKind.Circle) {
   return <-- we don't want circles to reach code below
}

// According to the Square interface, shape.kind could still technically be Circle here

+ interface Circle {
+   kind: ShapeKind.Circle; // can only ever be "Circle"
+   radius: number;
+ }
+ interface Square {
+   kind: ShapeKind.Square; // can only ever be "Square"
+   sideLength: number;
+ }


if (shape.kind === ShapeKind.Circle) {
   return
}

// shape.kind can only ever be `ShapeKind.Square`, so Circle types will not reach this code
```

### Type checking when unique identifier is not present

Where possible, we should use a required, unique-identifying field when using union types, but sometimes this is unavoidable. In these instances, the `in` operator can be used as a subtitution. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

```diff
interface LinkProps {
  href: string;
}

interface ButtonProps {
  onClick: () => void;
}

function ButtonOrLink(props: ButtonProps | LinkProps) {
- // TS will error because `onClick` does not exist on LinkProps interface
- if (props.onClick) {
-   return <button onClick={props.onClick} />
- }

+ if ('onClick' in props) {
+   return <button onClick={props.onClick} />
+ }

  return <a href={props.href} />
}
```

## Local Data and Mocks

### Data
  - Used in components
  - Filenames follow the `[ComponentName]Data.data` naming pattern
  - Exported constants follow the `[constantName]Data` naming pattern

### Mocks:
  - Used in stories
  - Filenames follow the `[ComponentName]Mock.mock` naming pattern
  - Exported constants follow the `[constantName]Mock` naming pattern