import egh1stImage from "../assets/EGH1st.webp";
import jphacks2025Image from "../assets/JPHACKS2025.jpeg";
import travelHubImage from "../assets/Travel_hub.png";
import yeahYenImage from "../assets/Yeah!-Yen!.png";
import type { Project } from "./types";

export const achievementsFeProjects: Project[] = [
  {
    slug: "mogufinder-jphacks-2025",
    title: "JPHACKS 2025 Innovator認定",
    category: "ハッカソン",
    year: "2025/10~2025/11",
    summary: "日常の「ご飯どこ行く？」の合意形成を支援するWebアプリ",
    impact: "JPHACKS 2025 Innovator認定。",
    role: "フロントエンド実装、UI/UX改善",
    imageLabel: "JPHACKS",
    imageSrc: jphacks2025Image,
    imageAlt: "JPHACKS 2025",
    stack: ["React", "TypeScript", "Vite", "UI/UX"],
    points: [
      "日常の「ご飯どこ行く？」の合意形成を支援するWebアプリ開発",
      "マッチングアプリに着想を得た少ない選択肢によって素早い意思決定を支援",
      "フロントエンドの実装、特にUI/UXの改善を担当",
    ],
    links: [
      {
        label: "開催記事",
        href: "https://jphacks.com/information/result-report2025/",
      },
      {
        label: "Webサイト",
        href: "https://mogufinder-frontend-hoji7n3kqq-an.a.run.app/",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "日常の「ご飯どこ行く？」という合意形成を、少ない選択肢とマッチング型UIで支援するWebアプリを開発しました。",
      },
      {
        title: "担当",
        body: "フロントエンド実装を中心に、UI/UXの改善を担当しました。",
      },
      {
        title: "成果",
        body: "JPHACKS 2025でInnovator認定を受けました。",
      },
    ],
  },
  {
    slug: "yeah-yen-engineer-guild-hackathon",
    title: "第1回 Engineer Guild Hackathon 第3位",
    category: "ハッカソン",
    year: "2024/10~2024/11",
    summary:
      "慣れない日本硬貨の仕様によるレジでの手間を解決する、自動両替する財布の提案",
    impact: "第1回 Engineer Guild Hackathon 第3位。",
    role: "Arduinoを用いたプロトタイプ開発",
    imageLabel: "Yeah!-Yen!",
    imageSrc: yeahYenImage || egh1stImage,
    imageAlt: "Yeah!-Yen!",
    stack: ["Arduino", "Python", "Prototype"],
    points: [
      "慣れない日本硬貨の仕様によるレジでの手間を解決するため，自動両替する財布を提案",
      "Arduinoを用いたプロトタイプ開発を担当",
    ],
    links: [
      {
        label: "開催記事",
        href: "https://gaishishukatsu.com/archives/057edcf35209458483e8e62a9484988e",
      },
      {
        label: "GitHub",
        href: "https://github.com/tatesoto/Hackathon.git",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "慣れない日本硬貨の仕様によるレジでの手間を解決するため、自動両替する財布を提案しました。",
      },
      {
        title: "担当",
        body: "Arduinoを用いたプロトタイプ開発を担当しました。",
      },
      {
        title: "成果",
        body: "第1回 Engineer Guild Hackathonで第3位を獲得しました。",
      },
    ],
  },
  {
    slug: "travel-hub-ai-agent-hackathon",
    title: "第1回 AI Agent Hackathon with Google Cloud 出場",
    category: "ハッカソン",
    year: "2024/10~2025/03",
    summary:
      "チャット・マップ・生成AIを一体化した旅行者向けの旅行計画アプリの開発",
    impact: "第1回 AI Agent Hackathon with Google Cloud 出場。",
    role: "プロダクトの基礎設計、バックエンド・フロントエンド実装",
    imageLabel: "Travel Hub",
    imageSrc: travelHubImage,
    imageAlt: "Travel Hub",
    stack: ["Python", "Flask", "HTML", "Google Cloud", "Generative AI"],
    points: [
      "旅行者向けの旅行計画アプリを開発",
      "チャット・マップ・生成AIを一体化し、トークしながら旅行先の計画を練ることができる",
      "Python/Flaskを用いたバックエンドとHTMLを用いたフロントエンドの実装を担当",
    ],
    links: [
      {
        label: "公式サイト",
        href: "https://zenn.dev/hackathons/2024-google-cloud-japan-ai-hackathon?tab=schedule",
      },
      {
        label: "紹介記事",
        href: "https://zenn.dev/water3/articles/5b627d7424d7be",
      },
      {
        label: "GitHub",
        href: "https://github.com/Yutak6116/travel-hub-test.git",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "チャット・マップ・生成AIを一体化し、会話しながら旅行先の計画を練れる旅行者向けWebアプリを開発しました。",
      },
      {
        title: "担当",
        body: "プロダクトの基礎設計と、Python/Flaskによるバックエンド、HTMLによるフロントエンド実装を担当しました。",
      },
      {
        title: "成果",
        body: "第1回 AI Agent Hackathon with Google Cloudに出場し、Travel Hubを制作しました。",
      },
    ],
  },
];
