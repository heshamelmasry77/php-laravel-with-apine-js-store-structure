// # Main Alpine.js file for importing components and stores
import Alpine from "alpinejs";

// Import Alpine stores
import globalStore from "./stores/global";

// Import Alpine components

// Import utilities and magic methods
// import "./utilities/magicMethods";

// Register stores
Alpine.store("global", globalStore);

// To load the Alpine JS dev tool Chrome extension
window.Alpine = Alpine;
Alpine.start();

// Default export to make this file a module
export default {};
