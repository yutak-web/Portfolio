import type { Project } from "../types";
import PokerTotalizationSystemImage from "../../assets/poker_totalization_system.png";

export const personalProductProjects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio",
    category: "個人開発",
    year: "2026/04",
    summary: "自己紹介Webサイト",
    impact: "自身のプロフィール、実績、プロダクトを整理して公開。",
    role: "設計、実装、デプロイ",
    imageLabel: "Portfolio",
    stack: ["React", "TypeScript", "Vite"],
    points: ["技術: React / TypeScript / Vite"],
    links: [
      {
        label: "Webサイト",
        href: "https://yutak-web.github.io/Portfolio/",
      },
      {
        label: "GitHub",
        href: "https://github.com/yutak-web/Portfolio.git",
      },
    ],
    sections: [
      {
        title: "概要",
        body: "自身のプロフィール、実績、プロダクトを整理して紹介する自己紹介Webサイトです。",
      },
      {
        title: "技術",
        body: "React / TypeScript / Vite を用いて実装しました。",
      },
      {
        title: "公開",
        body: "GitHub Pagesで公開しています。",
      },
    ],
  },
  {
    slug: "poker-totalization-system",
    title: "Poker Totalization System",
    category: "個人開発",
    year: "2025/09",
    summary: "所属するPokerサークルの収支を管理するWebアプリ",
    impact: "サークル内の収支管理をWeb上で扱えるようにしました。",
    role: "設計、実装、Firebase連携、運用",
    imageLabel: "Poker Totalization System",
    imageSrc: PokerTotalizationSystemImage,
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    points: [
      "所属するPokerサークルの収支を管理するアプリ",
      "技術: React / TypeScript / Vite / Firebase",
    ],
    links: [
      {
        label: "Webサイト",
        href: "https://poker-totalization-system.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/BigFish-Poker-Dev/Poker-Totalization-System.git",
      },
      {
        label: "発表資料",
        href: "https://canva.link/mgr6ry8hd6mltp7",
      },
    ],
    embed: {
      title: "Poker Totalization System 発表資料",
      src: "https://www.canva.com/design/DAHNXivt89s/qqoiOQVfbEyEZn6kqpxk7g/view?embed",
      href: "https://canva.link/mgr6ry8hd6mltp7",
    },
    sections: [
      {
        title: "概要",
        body: "所属するPokerサークルの収支を管理するWebアプリです。",
      },
      {
        title: "技術",
        body: "React / TypeScript / Vite / Firebase を用いて実装しました。",
      },
      {
        title: "運用",
        body: "サークル内で利用されることを想定し、収支を扱いやすい形で管理できるようにしました。",
      },
    ],
  },
];
