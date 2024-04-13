import type { HistoryItem, ProjectItem, SkillItem, SnsItem, StrengthFinderItem } from '@/type'
import ProjectAdOperation from '@/assets/png/projects/ad_operation.png'
import ProjectWebFront from '@/assets/png/projects/web_front.png'
import ProjectHealthApp from '@/assets/png/projects/health_app.png'
import ProjectChatBot from '@/assets/png/projects/chatbot.png'
import ProjectLiveApp from '@/assets/png/projects/live_app.png'
import ProjectTweetBot from '@/assets/png/projects/tweetbot.png'
import gitHibLogoImg from '@/assets/svg/github.svg'
import twitterLogoImg from '@/assets/svg/twitter.svg'
import wantedlyLogoImg from '@/assets/svg/wantedly.svg'
import zennLogoImg from '@/assets/svg/zenn.svg'

export const skillItems: SkillItem[] = [
  {
    title: 'Frontend',
    icon: 'mdi-application-outline',
    text: '会員サイトのサポートサイトや、ポートフォリオサイト、アプリの課金サイトなど静的Webを作成してきました。その他、WixにてWebページの作成/運用経験があります。',
    capabilities: [
      'HTML',
      'CSS',
      'Javascript',
      'jQuery',
      'TypeScript',
      'React',
      'Vuejs',
      'Bootstrap',
      'Vuetify'
    ]
  },
  {
    title: 'Backend',
    icon: 'mdi-desktop-classic',
    text: 'APIサーバ開発、対話型チャットボット/自動ツイートボットにてビジネスロジックの作成、パフォーマンスを意識したDB設計などを行ってまいりました。',
    capabilities: ['Django', 'Nodejs', 'NestJS', 'Prisma', 'Scala', 'MySQL', 'Stripe']
  },
  {
    title: 'Infrastructure',
    icon: 'mdi-server-network',
    text: '主にAWS環境でWebサーバ、メールサーバ、MQTTブローカーの作成や、ドメイン管理を行っております。その他、OSSをインストールして社内システムの作成/引用経験があります。',
    capabilities: ['AWS', 'Azure', 'Xserver', 'Heroku', 'Nginx', 'Apache', 'EMQX', 'Grafana']
  }
]

export const projectItems: ProjectItem[] = [
  {
    title: '広告運用システム',
    text: '広告大規模データを使用し、媒体に直接自動入稿するシステム。Vuejs,Scalaで開発。',
    tools: ['Vuejs', 'Scala', 'AWS'],
    image: ProjectAdOperation,
    date: '2023/05'
  },
  {
    title: 'ポートフォリオサイト',
    text: 'Vuejsを使用して静的Webページを作成したいと思い実装。デザインは極力Vuetifyを使用し、マテリアルデザインを意識して作成。',
    tools: ['Vuejs', 'TypeScript', 'AWS', 'Amplify', 'Lambda'],
    image: ProjectWebFront,
    date: '2023/04'
  },
  {
    title: '自治体向け健康管理アプリ',
    text: '利用者の日々の健康に関するデータを入力・閲覧するモバイルアプリのサーバ・インフラを担当。アプリ認証や外部APIとの連携を含めた全ての機能を実装。',
    tools: ['Django', 'AWS', 'EC2', 'Nginx'],
    image: ProjectHealthApp,
    date: '2022/09~2022/12'
  },
  {
    title: '勤怠管理アプリPoC',
    text: 'ビーコンとモバイル端末を使用し勤怠管理を行うことで、業務効率化ができるかを検証するPoC開発。APIサーバの開発を担当。',
    tools: ['Django', 'AWS', 'EC2'],
    image: ProjectChatBot,
    date: '2022/05~2022/08'
  },
  {
    title: 'ライブ配信アプリ',
    text: 'サーバ、インフラを担当。APIサーバ、配信サーバの構築、Stripeでの課金処理などを担当。その他、OSSを使用してwikiやチャットなどの社内システム立ち上げも行なった。',
    tools: ['Nodejs', 'Cloudfront', 'EC2', 'Lambda'],
    image: ProjectLiveApp,
    date: '2022/02~'
  },
  {
    title: '広報ツイートボット',
    text: '定期的にwebサイトの情報を取得し未ツイート事項があればツイートするボット。Nodejsでスクレイピングし、データはMySQLで管理。',
    tools: ['Nodejs', 'LightSail', 'Twitter Developer'],
    image: ProjectTweetBot,
    date: '2021/06'
  }
]

export const strengthFinderItems: StrengthFinderItem[] = [
  {
    color: 'accent',
    text: 'ポジティブ'
  },
  {
    color: 'accent-dark',
    text: '調和性'
  },
  {
    color: 'accent-dark',
    text: '包含'
  }
]

export const snsItems: SnsItem[] = [
  {
    link: 'https://github.com/Mitsuya-bbb',
    icon: gitHibLogoImg
  },
  {
    link: 'https://twitter.com/bbb__squash',
    icon: twitterLogoImg
  },
  {
    link: 'https://www.wantedly.com/id/bbbworksquash',
    icon: wantedlyLogoImg
  },
  {
    link: 'https://zenn.dev/bbb_squash',
    icon: zennLogoImg
  }
]

export const historyItems: HistoryItem[] = [
  {
    year: 2023,
    title: '株式会社MAGLAB',
    text: 'センシングシステムや、toC向けのモバイルアプリケーション開発で、スクラッチのバックエンド開発を行っています。',
    remarks: '業務委託',
    dotColor: 'primary'
  },
  {
    year: 2023,
    title: '株式会社サイバーエージェント',
    text: '広告事業に関するシステムのビジネスロジックの作成、大規模アカウントのデータ管理や、データ量の大きいAPIの制御・効率化などを行っております。',
    dotColor: 'accent'
  },
  {
    year: 2022,
    title: 'スタートアップベンチャー企業',
    text: 'ライブ配信アプリの配信サーバの構築、アプリと連携するAPIサーバを担当しておりました。その他、社内システムの立ち上げやKPI可視化ツールの作成を担当しました。',
    remarks: '業務委託',
    dotColor: 'primary'
  },
  {
    year: 2021,
    title: '株式会社チェンジ',
    text: '保険業をメインとしたコンサル業務と、開発側として建設業 / 保険業向けのPoC開発のサーバ側を担当していました。',
    dotColor: 'primary'
  },
  {
    year: 2020,
    title: '株式会社インフラトップ',
    text: '大学在学中に参画し、未経験からエンジニア転職を目指す方に、Ruby on RailsでWebアプリケーションを作成するの学習サポートを行っておりました。',
    remarks: 'インターン',
    dotColor: 'primary'
  },
  {
    year: 2017,
    title: 'INIAD',
    text: '1期生として入学し、コンピュータ・サイエンスを勉強していました。WPT×遺伝的アルゴリズムをテーマに卒業論文を執筆し、学内でちょっとした表彰をしてもらいました。',
    dotColor: 'primary'
  }
]
