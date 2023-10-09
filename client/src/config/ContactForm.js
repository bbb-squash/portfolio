export default {
  type: {
    init: 'init',
    confirm: 'confirm',
    complete: 'complete',
    error: 'error'
  },
  message: {
    init: 'どんな些細なことでも問題ございません。\nお気軽にご連絡ください。',
    confirm: '以下の内容で送信します。',
    complete: 'お問い合わせありがとうございます。\n入力いただいた内容で受け付けました。\n後日、「bbb.worksquash@gmail.com」よりご連絡いたします。',
    error: '申し訳ありません。システムエラーで送信に失敗しております。\n時間を置いて再度実行いただくか、bbb.worksquash@gmail.comまでemailにてご連絡ください。'
  },
  button: {
    init: '確認',
    confirm: '送信',
  },
  validation: {
    blank: 'この項目は入力必須項目です',
    email: '無効なメールアドレスです'
  }
}