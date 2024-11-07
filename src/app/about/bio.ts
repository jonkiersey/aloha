import { differenceInYears } from "date-fns";

const yearsExperience = differenceInYears(new Date(), "2017-02-01");

const bio = [
  `
    Hi, I’m Jon, a full stack web developer with over ${yearsExperience} years of professional engineering
    experience since graduating with a BS in Computer Science from Portland State University. I started with
    building internal web apps to remediate data problems within global retail services on microservice
    architectures, and for the last few years I’ve been working on customer facing web apps building full
    stack features in TypeScript across React and Node.js.
  `,
  `
    I have a real passion for product development and I love trying to find the perfect user experience
    for my customers, coupled with a knack for avoiding frustrating experiences. The best tools we can
    build are the tools that our customers don’t think about using. They organize experiences in the way
    that customers think about tasks and they let the user focus on the creative problem solving side of
    the work they’re doing.
  `,
  `
    I strongly believe in an egoless engineering process. As I often say: “all of us is a lot smarter
    than any of us.” As engineers we need to be committed to having great discussions to find the best
    answer to our technical problems and we have to remove an emotional investment in having our own
    idea be the “right” one. I drive this culture on my teams by being unafraid of being wrong and
    publicly acknowledging my mistakes and thanking teammates for their corrections. It’s more than a
    platitude, being wrong is the opportunity for learning and we have to embrace it.
  `,
  `
    It’s important to me to elevate the team that I’m on through creating a safe environment for
    engineers to be vulnerable. It’s important to me to build a strong relationship with product
    stakeholders to make interacting with my engineering team enjoyable. It’s important to me to deliver
    stable and delightful experiences to my customers.
  `,
];

export default bio;
