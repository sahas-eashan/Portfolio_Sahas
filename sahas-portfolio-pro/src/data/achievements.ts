export interface Achievement {
  title: string;
  description: string;
  year: string;
  type: 'winner' | 'runner-up' | 'finalist' | 'participant';
  organization: string;
  image?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Finalist – PLEASE Hack 2025",
    description: "Top finalist in South Asia for the PLEASE Hack 2025, representing Sri Lanka with a seaweed-based bioplastic solution for marine pollution.",
    year: "2025",
    type: "finalist",
    organization: "PLEASE Hack South Asia",
    image: "/images/pleasehack.jpeg"
  },
  {
    title: "2nd Runners-up – IESL RoboGames 2024",
    description: "Secured 2nd Runners-Up in IESL RoboGames (University Category) with an autonomous robot project using Kinect and computer vision.",
    year: "2024",
    type: "runner-up",
    organization: "Institution of Engineers Sri Lanka",
    image: "/images/BB.jpeg"
  },
  {
    title: "1st Runner-up – CodeRally 5.0",
    description: "Secured 1st runner-up at CodeRally 5.0 hackathon, leading a high-performing team from University of Moratuwa.",
    year: "2025",
    type: "runner-up",
    organization: "CodeRally",
    image: "/images/cr.jpeg"
  },
  {
    title: "Winner – Insighture Hackathon",
    description: "Built an AI-powered virtual real estate assistant and won the Insighture Hackathon.",
    year: "2025",
    type: "winner",
    organization: "Insighture",
    image: "/images/IH.jpeg"
  },
  {
    title: "Best Environment Project – Tyumen State University",
    description: "Awarded 'Best Environment Project' for our bioplastics solution at the Calling Fire on Us! Ideathon in Russia.",
    year: "2025",
    type: "winner",
    organization: "Tyumen State University, Russia",
    image: "/images/tymen.jpeg"
  },
  {
    title: "Finalist – CodeSprintX (IIT)",
    description: "Recognized for innovation and teamwork as a finalist in CodeSprintX 2024.",
    year: "2025",
    type: "finalist",
    organization: "Indian Institute of Technology",
    image: "/images/CS.jpg"
  },
  {
    title: "Finalist – Robofest (Micromouse)",
    description: "Finalist in the Robofest Micromouse autonomous robotics challenge.",
    year: "2024",
    type: "finalist",
    organization: "SLIIT Robofest",
    image: "/images/mouse.jpg"
  },
  {
    title: "Finalist – Dextron (Fast Line Following)",
    description: "Dextron Fast Line Following finalist, demonstrating high-speed autonomous navigation.",
    year: "2024",
    type: "finalist",
    organization: "Institute of Technology, University of Moratuwa",
    image: "/images/speed.jpg"
  },
  {
    title: "Finalist – AlgoExplore",
    description: "AlgoExplore finalist (algorithmic coding challenge).",
    year: "2024",
    type: "finalist",
    organization: "AlgoExplore",
    image: "/images/algo.jpeg"
  },
  {
    title: "Finalist – MoraXtreme 9.0",
    description: "Reached finals in MoraXtreme 9.0 competitive programming.",
    year: "2024",
    type: "finalist",
    organization: "University of Moratuwa",
    image: "/images/morax.jpeg"
  },
  {
    title: "Finalist – Codex 2025",
    description: "Finalist at Codex 2025 programming hackathon.",
    year: "2025",
    type: "finalist",
    organization: "Codex",
    image: "/images/codexmora.jpeg"
  },
  {
    title: "15th place in XTREME Encode 2024",
    description: "Achieved 15th place in global coding event XTREME Encode 2024.",
    year: "2024",
    type: "participant",
    organization: "XTREME Encode",
    image: "/images/codex.jpeg"
  },
  {
    title: "IEEE Xtreme 18.0 Participant",
    description: "Participated in IEEE Xtreme 18.0 programming competition.",
    year: "2024",
    type: "participant",
    organization: "IEEE",
    image: "/images/ieee.png"
  }
];