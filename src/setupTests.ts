import { configure } from "enzyme";
import enzymeAdapterReact16 from "enzyme-adapter-react-16";

configure({ adapter: new enzymeAdapterReact16() });

// unsafe hack
console.error = () => null;
