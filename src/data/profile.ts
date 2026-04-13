import heroImage from "../assets/Profile.jpeg";
import type { ContactLink, Profile } from "./types";

export const profile: Profile = {
  name: "Yuta Kanehara",
  tagline: "Student Full-Stack Engineer / Signate Master",
  heroTitle: "Build with Purpose,\nLearn by Doing",
  intro:
    "Web開発とデータサイエンスを横断しながら、設計から実装、改善まで自走できる学生エンジニアです。使いやすさと実装の筋の良さを両立させることを意識して開発しています。",
  about:
    "大学では情報学を幅広く学びつつ、個人開発・ハッカソン・インターンではフルスタック開発を、データ分析コンペではデータサイエンスを中心に取り組んできました。データ分析から開発・保守まで一貫して関わることができる点が強みで、実装の背景にある意図を理解しながらコードを書くことを大切にしています。将来的には、ユーザーの課題をデータサイエンスで解決するプロダクトの開発に携わりたいと考えています。",
  image: heroImage,
  email: "yk.individual@gmail.com",
  github: "https://github.com/Yutak6116",
  linkedin: "https://www.linkedin.com/in/yuta-kanehara-622916398",
  zenn: "https://zenn.dev/yutak6116",
};

export const contactLinks: ContactLink[] = [
  { label: "Mail", href: `mailto:${profile.email}`, kind: "mail" },
  { label: "GitHub", href: profile.github, kind: "github" },
  ...(profile.linkedin
    ? [
        {
          label: "LinkedIn" as const,
          href: profile.linkedin,
          kind: "linkedin" as const,
        },
      ]
    : []),
  ...(profile.zenn
    ? [{ label: "Zenn" as const, href: profile.zenn, kind: "zenn" as const }]
    : []),
];
