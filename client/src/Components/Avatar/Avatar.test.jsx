import Avatar from "./Avatar";
import {renderTest} from "../../utils/testUtils";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Avatar", () => {
  renderTest(Avatar, {imgUrl: "www.google.com", userName: "me"});
});
