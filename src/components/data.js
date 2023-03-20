import {
  any,
  collaboration,
  access,
  security,
  profile1,
  profile2,
  profile3,
  phone,
  email,
  location,
} from "../assets";
const navElement = [
  { id: 1, text: "Features" },
  { id: 1, text: "Team" },
  { id: 1, text: "Sign in" },
];
const services = [
  {
    id: 1,
    img: access,
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 2,
    img: security,
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 3,
    img: collaboration,
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.",
  },
  {
    id: 4,
    img: any,
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Flyo has you covered allowing for all file types to be securely stored and shared.",
  },
];
const testimonials = [
  {
    id: 1,
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: profile1,
    name: "Satish Patel",
    role: " Founder & CEO, Huddle",
  },
  {
    id: 2,
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: profile2,
    name: "Bruce McKenzie",
    role: " Founder & CEO, Huddle",
  },
  {
    id: 3,
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    img: profile3,
    name: " Iva Boyd",
    role: " Founder & CEO, Huddle",
  },
];
const contacts = [
  {
    id: 1,
    icon: location,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    icon: phone,
    text: "+1-543-123-4567",
  },
  {
    id: 3,
    icon: email,
    text: "example@fylo.com",
  },
];

export { navElement, services, testimonials, contacts };
