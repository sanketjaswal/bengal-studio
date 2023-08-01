/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import NormalButton, { FancyButton } from "./Components/Button/Button";
import Navs from "./Components/Navs/Navs";
import { Image23 } from "./Components/Image23/Image23";
import { F4Tab } from "./Components/Frame4Comps/F4Comp";
import {
  Text,
  BigHeadingText,
  FancyBigHeading,
  SubTextHead,
  SmallHeading,
  FancySmallHeading,
} from "./Components/Text/text.styled";

import Ellipse1, {
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
} from "./Components/Ellipse/Ellispe";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Ellipse1></Ellipse1>
        <Ellipse2></Ellipse2>
        <Ellipse3></Ellipse3>
        <Ellipse4></Ellipse4>
        <Ellipse5></Ellipse5>
        <Ellipse6></Ellipse6>

        <div className="NavContainer">
          <div className="NavLogo">
            <h2>The Bengal Studio</h2>
          </div>
          <div className="NavBtns">
            <Navs>Home</Navs>
            <Navs>Blog</Navs>
            <Navs>Career</Navs>
            <Navs>About us</Navs>
          </div>
        </div>

        <div id="Frame1">
          <div id="Frame1_1">
            <div id="TextHolder1_1">
              <BigHeadingText>Explore the future of the</BigHeadingText>
              <FancyBigHeading>TBS</FancyBigHeading>
              <Text>Think Simple Build Unique</Text>
            </div>
            <div id="BtnHolder1_1">
              <FancyButton>Explore Now</FancyButton>
              <NormalButton>Get Started</NormalButton>
            </div>
          </div>
          <div id="Frame1_2">
            <div className="subItems">
              <SubTextHead>29K+</SubTextHead>
              <Text>Artworks</Text>
            </div>
            <div className="subItems">
              <SubTextHead>18K+</SubTextHead>
              <Text>Artists</Text>
            </div>
            <div className="subItems">
              <SubTextHead>25K+</SubTextHead>
              <Text>Auction</Text>
            </div>
          </div>
          <div></div>
        </div>

        <div id="Frame2">
          <div id="Image1">
            <div id="rectangle"></div>
            <div id="starvector"></div>
          </div>
        </div>

        <div id="Frame3">
          <div id="img23Holder">
            <Image23></Image23>
          </div>
          <div id="Frame3phra">
            <div id="frame3text">
              <div id="f3Text">
                <SmallHeading>What is </SmallHeading> &nbsp;
                <FancySmallHeading> TBS</FancySmallHeading>
              </div>
              <Text>
                The Bengal Studio is a software development company specializing
                in App development for the society which is available in Play
                Store. With a team of highly skilled developers and engineers,
                we also deliver custom software solutions tailored to meet our
                client's unique needs. From web and mobile applications to
                enterprise software, we combine innovation, quality, and
                reliability to empower businesses with advanced digital
                solutions — partner with us to transform your ideas into robust
                software solutions that drive growth and success.
              </Text>
            </div>
            <FancyButton>Know More</FancyButton>
          </div>
        </div>

        <div id="Frame4">
          <div id="frame4Textcont">
            <FancySmallHeading>How does the Metaverse work</FancySmallHeading>
            <Text>
              Adipiscing at in tellus integer. Pellentesque massa placerat duis
              ultricies. Venenatis cras
            </Text>
          </div>
          <div id="f4TabsHolder">
            <F4Tab
              cls="photo1"
              heading="Discuss with Colleagues"
              subtext="Working online is the same experience as work ing in an office. This will be. achieved with.."
            />
            <F4Tab
              cls="photo2"
              heading="Virtual Reality Concert"
              subtext="Watching concerts virtually is one of the things that can be done in cyberspace.."
            />
            <F4Tab
              cls="photo3"
              heading="Playing Games"
              subtext="For gamers, the metaverse could be an interesting platform of choice for the.."
            />
            <F4Tab
              cls="photo4"
              heading="Online Travel"
              subtext="With cyberspace, online travel is certainly not impossible. We can do this with the help of.."
            />
            <F4Tab
              cls="photo5"
              heading="Artworks"
              subtext="In the past, works of art such as paintings could only be seen in the real world.."
            />
            <F4Tab
              cls="photo6"
              heading="Digital Clothing"
              subtext="The community has also been active with the emergence of paintings or drawings.."
            />
          </div>
        </div>

        <div id="Frame6">
          <div id="frame6_1">
            <div id="f6greyArea">
              <BigHeadingText>Metaverse Fashion Week</BigHeadingText>
            </div>
          </div>
        </div>

        <div id="Frame5">
          <div id="frame5head">
            <SmallHeading>Our Latest &nbsp;</SmallHeading>
            <FancySmallHeading> Activity</FancySmallHeading>
          </div>
          <div id="frame5text">
            <Text>
              We help you to build high-quality digital solutions and products
              as well as deliver a wide range of related professional services.
              We are providing world-class service to our clients and products.
            </Text>
          </div>
        </div>

        <div id="Footer">
          <div id="footer1">
            <FancySmallHeading>TBS</FancySmallHeading>
            <Text>Think Simple Build Unique</Text>
          </div>
          <div id="footer2">
            <SubTextHead>About Us</SubTextHead>
            <div id="inFoot2">
              <Text>About MetaV</Text>
              <Text>Contact Us</Text>
              <Text>FAQ</Text>
              <Text>Privacy Policy</Text>
              <Text>Terms of Service</Text>
            </div>
          </div>
          <div id="footer3">
            <SubTextHead>Services</SubTextHead>
            <div id="inFoot2">
              <Text>Marketplace</Text>
              <Text>Virtual Concert</Text>
              <Text>Gaming</Text>
              <Text>Artwork</Text>
              <Text>Online Travel</Text>
            </div>
          </div>
          <div id="footer4">
            <SubTextHead>Contact</SubTextHead>
            <div id="infoot4">
              <div id="footerIcons">
                <div className="icons" id="icon1"></div>
                <div className="icons" id="icon2"></div>
                <div className="icons" id="icon3"></div>
                <div className="icons" id="icon4"></div>
              </div>
              <Text>2023 © thebengalstudio.com All right reserved.</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
