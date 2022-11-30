# VUE
For all your VUE needs

### What is VUE:
A a JavaScript framework for building user interfaces. The two core features of Vue are:
- `Declarative Rendering:` Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.
- `Reactivity:` Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.

Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:

- Enhancing static HTML without a build step
- Embedding as Web Components on any page
- Single-Page Application (SPA)
- Fullstack / Server-Side Rendering (SSR)
- Jamstack / Static Site Generation (SSG)
- Targeting desktop, mobile, WebGL, and even the terminal

### VUE API styles:
- `Options API`: We define a component's logic using an object of options such as data, methods, and mounted. Properties defined by options are exposed on this inside functions, which points to the component instance.
- `Composition API`: we define a component's logic using imported API functions. In SFCs, Composition API is typically used with <script setup>. 

[pending: add comparation images using `git lfs`]

Both API styles are fully capable of covering common use cases. `Options API` is centered around the concept of a "component instance" (this as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. `Composition API` is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity.

For production use:
- Go with `Options API` if you are not using build tools, or plan to use Vue primarily in **low-complexity scenarios**, e.g. progressive enhancement.
- Go with `Composition API` + Single-File Components if you plan to build **full applications** with Vue.

### VUE installation:
- _npm i node_
- _npm init vue@latest_

Once build is installed:
- cd <your-project-name>
- npm install
- npm run dev

When you are ready to ship your app to production, run the following:
- _npm run build_

To use VUE from CDN:
- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

### DOC used:
- https://vuejs.org/guide/introduction.html
- https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=1
- Pluralsight 

### VC Extensions Used:
- Vue Language Features (Volar)
