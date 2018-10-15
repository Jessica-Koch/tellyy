/* eslint-env node, jest */
import SearchBar from "./SearchBar";
import {renderTest} from "../../utils/testUtils";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

const noop = Function.prototype;
describe("SearchBar", () => {
  renderTest(SearchBar, {onSubmit: noop, value: "imma value"});
});
