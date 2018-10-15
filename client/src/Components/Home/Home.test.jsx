/* eslint-env node, jest */
import Home from "./Home";
import {renderTest} from "../../utils/testUtils";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Home", () => {
  renderTest(Home);
});
