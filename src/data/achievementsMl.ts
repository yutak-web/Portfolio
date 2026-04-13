import aihack2023Image from "../assets/Aihack_2023.jpeg";
import aihack2025Image from "../assets/Aihack_2025.webp";
import financialCompetitionImage from "../assets/Financial_Data_Competition_2024.png";
import signateStudentCup2025Image from "../assets/SIGNATE_Student_Cup_2025.png";
import signateCup2024Image from "../assets/SIGNATE_Cup_2024.png";
import type { Project } from "./types";

export const achievementsMlProjects: Project[] = [
  {
    slug: "financial-data-challenge-2024",
    title: "第２回 金融データ活用チャレンジ 7位/1013",
    category: "データ分析コンペ",
    year: "2024/03",
    summary: "SIGNATEコンペ、企業向けローンの返済可否予測",
    impact: "1013人中7位。特徴量設計、スタッキング、閾値最適化で上位入賞。",
    role: "特徴量設計、外部特徴量の検討、アンサンブル、後処理",
    imageLabel: "SIGNATE",
    imageSrc: financialCompetitionImage,
    imageAlt: "Financial Data Competition 2024",
    stack: ["Python", "SIGNATE", "Feature Engineering", "Stacking"],
    points: [
      "企業向けローンの返済可否予測",
      "組み合わせ特徴量・外部特徴量の使用",
      "スタッキングを用いたアンサンブル学習",
      "最適な閾値を見つける後処理",
    ],
    links: [
      {
        label: "SIGNATE",
        href: "https://user.competition.signate.jp/ja/competition/detail/?competition=7cd3a1a21e6b4778ad33b65ff080d676",
      },
      {
        label: "参加報告書",
        href: "https://www.canva.com/design/DAHAP35f9DA/bJgY46xHFFhrqzXGO_p6Pw/view?utm_content=DAHAP35f9DA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he595050fae",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "企業向けローンの返済可否を予測するタスクに対し、組み合わせ特徴量や外部特徴量を活用しました。",
      },
      {
        title: "工夫",
        body: "スタッキングによるアンサンブル学習と、予測確率に対する閾値最適化を行いました。",
      },
      {
        title: "成果",
        body: "第２回 金融データ活用チャレンジで1013人中7位を獲得しました。",
      },
    ],
  },
  {
    slug: "signate-student_cup_2025",
    title: "SIGNATE × TECH OCEAN Student Cup 2025 48位/245",
    category: "データ分析コンペ",
    year: "2026/01 - 2026/02",
    summary:
      "SIGNATE × TECH OCEANの学生限定AIコンペ。LLMが生成した架空のあらすじから、元ネタとなった作品タイトルを予測する自然言語処理タスク。",
    impact: "245人中48位。生成AI時代のテキスト分類・推論タスクに取り組んだ。",
    role: "テキスト前処理、特徴量設計、モデル検証、推論結果の改善",
    imageLabel: "SIGNATE",
    imageSrc: signateStudentCup2025Image,
    imageAlt: "SIGNATE Student Cup 2025",
    stack: ["Python", "SIGNATE", "NLP", "LLM", "Text Classification"],
    points: [
      "LLMによって生成された「架空のあらすじ」を読み解く自然言語処理タスク",
      "元ネタとなった映画・アニメ・漫画のタイトルを予測するモデルを作成",
      "テキスト分類と推論を組み合わせた学生限定AIコンペティション",
      "開催期間: 2026年1月14日〜2026年2月12日",
    ],
    links: [
      {
        label: "SIGNATE",
        href: "https://user.competition.signate.jp/ja/competition/detail/?competition=385dcbba17b645f3ac10f827dfba03f6",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "LLMによって生成された架空のあらすじを入力として、その元ネタとなった作品（映画・アニメ・漫画）のタイトルを予測するタスクに取り組みました。",
      },
      {
        title: "特徴",
        body: "単純な数値予測ではなく、生成AIと自然言語処理を組み合わせたテキスト分類・推論タスクであり、文章中の文脈や特徴語を読み解く力が求められるコンペでした。",
      },
      {
        title: "成果",
        body: "SIGNATE × TECH OCEAN Student Cup 2025で245人中48位を獲得しました。",
      },
    ],
  },
  {
    slug: "signate-cup-2024",
    title: "SIGNATE Cup 2024 76位/1123",
    category: "データ分析コンペ",
    year: "2024/08",
    summary: "SIGNATE Cup、旅行パッケージの成約率予測",
    impact: "1123人中76位。",
    role: "データ分析、特徴量設計、モデル検証",
    imageLabel: "SIGNATE Cup",
    imageSrc: signateCup2024Image,
    imageAlt: "SIGNATE Cup 2024",
    stack: ["Python", "SIGNATE", "Machine Learning"],
    points: ["旅行パッケージの成約率予測"],
    links: [
      {
        label: "SIGNATE",
        href: "https://user.competition.signate.jp/ja/competition/detail/?competition=17002dd84863499e90815a7c5ef2ee21",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "旅行パッケージの成約率を予測するテーブルデータ分析タスクに取り組みました。",
      },
      {
        title: "担当",
        body: "データの理解、特徴量設計、モデル検証を担当しました。",
      },
      {
        title: "成果",
        body: "SIGNATE Cup 2024で1123人中76位を獲得しました。",
      },
    ],
  },
  {
    slug: "aihack-2025",
    title: "第11回アイフルハッカソン aihack 特別賞",
    category: "データ分析コンペ",
    year: "2025/03",
    summary: "法人顧客のリスク予測モデルの精度最大化",
    impact: "第11回アイフルハッカソン aihack 特別賞。",
    role: "リスク予測モデルの構築、検証、改善",
    imageLabel: "aihack",
    imageSrc: aihack2025Image,
    imageAlt: "Aihack 2025",
    stack: ["Python", "Machine Learning", "Risk Modeling"],
    points: ["法人顧客のリスク予測モデルの精度最大化"],
    links: [
      {
        label: "開催記事",
        href: "https://aiful-group.com/n/nbd5493c8764d",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "法人顧客のリスク予測モデルの精度最大化に取り組みました。",
      },
      {
        title: "担当",
        body: "モデル構築、評価、改善サイクルを担当しました。",
      },
      {
        title: "成果",
        body: "第11回アイフルハッカソン aihackで特別賞を受賞しました。",
      },
    ],
  },
  {
    slug: "aihack-2023",
    title: "第6回アイフルハッカソン aihack 特別賞",
    category: "データ分析コンペ",
    year: "2023/03",
    summary: "貸倒予測モデルの精度最大化",
    impact: "第6回アイフルハッカソン aihack 特別賞。",
    role: "貸倒予測モデルの構築、検証、改善",
    imageLabel: "aihack",
    imageSrc: aihack2023Image,
    imageAlt: "Aihack 2023",
    stack: ["Python", "Machine Learning", "Risk Modeling"],
    points: ["貸倒予測モデルの精度最大化"],
    links: [
      {
        label: "開催記事",
        href: "https://80and.co/news/aihack2023",
      },
    ],
    sections: [
      {
        title: "内容",
        body: "貸倒予測モデルの精度最大化に取り組みました。",
      },
      {
        title: "担当",
        body: "モデル構築、評価、改善サイクルを担当しました。",
      },
      {
        title: "成果",
        body: "第6回アイフルハッカソン aihackで特別賞を受賞しました。",
      },
    ],
  },
];
