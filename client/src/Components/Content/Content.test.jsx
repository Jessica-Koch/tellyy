import Content from "./Content";
import {renderTest} from "../../utils/testUtils";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Content", () => {
  renderTest(Content);
});
