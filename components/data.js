import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Services",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Best Website Design",
      desc: "We deliver the very best design for our clients. We use latest tools for website design. We can offer best custom web design",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Passionate Website Development",
      desc: "Stackroots keeps young passionate team to deliver the best websites for clients",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "On Time Delivery",
      desc: "We Stackroots, keep a on time delivery of clients projects. For us your time is so precious.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  //title: "Offer more benefits here",
  // desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
   image: benefitTwoImg,
  bullets: [
    {
      title: "Innovation",
      desc: "With continuous innovation & improvement as our motto. We never just create the product, we place innovation in each products.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Agile Methodologies",
      desc: "Our approaches use agile development. Requirements and solutions through the collaborative effort of self-organizing and cross-functional teams and their customer/end user.",
      icon: <AdjustmentsIcon />,
    },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};

export { benefitOne, benefitTwo };
