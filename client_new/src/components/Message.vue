<script setup lang="ts">
import type { SnsItem } from '@/type'
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { useDisplay } from 'vuetify'
import { ref, type Ref } from 'vue'
import axios from 'axios'
const { mdAndUp } = useDisplay()

type Props = {
  snsItems: SnsItem[]
}

type FormState = {
  name: string
  email: string
  content: string
}

type FormAlertState = {
  isShow: boolean
  closeable: boolean
  text: string
  type: 'error' | 'success' | 'warning' | 'info'
  icon: string
}

const useForm = () => {
  const form = ref()
  const formState: Ref<FormState> = ref({
    name: '',
    email: '',
    content: ''
  })

  const formAlertState: Ref<FormAlertState> = ref({
    isShow: false,
    closeable: false,
    text: '',
    type: 'info',
    icon: ''
  })

  const isShowSubmitBtn: Ref<boolean> = ref(false)
  const isLoading: Ref<boolean> = ref(false)

  const ruleIsNotBlank = (value: any) => !!value || 'この項目は入力必須項目です'

  return {
    form,
    formState,
    formAlertState,
    isShowSubmitBtn,
    isLoading,
    ruleIsNotBlank
  }
}

const props: Props = defineProps<Props>()
const { form, formState, formAlertState, isShowSubmitBtn, isLoading, ruleIsNotBlank } = useForm()

const confirm = async () => {
  formAlertState.value.isShow = false
  formAlertState.value.closeable = false

  const { valid } = await form.value.validate()

  if (valid) {
    isShowSubmitBtn.value = true
    formAlertState.value.type = 'info'
    formAlertState.value.isShow = true
    formAlertState.value.text =
      '以下の内容で受け付けします。内容をご確認の上、「送信」をクリックしてください。'
  }
}

const cancel = () => {
  if (!isLoading.value) {
    isShowSubmitBtn.value = false
    formAlertState.value.isShow = false
  }
}

const submit = async () => {
  isLoading.value = true
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_BEARER_TOKEN}`
  }
  const response = await axios.post(import.meta.env.VITE_APP_API_ENDPOINT, formState.value, {
    headers
  })

  if (response.status === 200) {
    formAlertState.value.type = 'success'
    formAlertState.value.text =
      'お問い合わせありがとうございます。入力いただいた内容で受付いたしました。'
    form.value.reset()
  } else {
    formAlertState.value.type = 'error'
    formAlertState.value.text =
      '申し訳ありません。システムエラーで送信に失敗しております。時間を置いて再度実行いただくか、emailにてご連絡ください。'
  }
  formAlertState.value.closeable = true
  isShowSubmitBtn.value = false
  isLoading.value = false
}
</script>

<template>
  <page-content-layout title="Message">
    <template v-slot:description>
      <p class="mb-5">
        ここまで読んでいただき、誠にありがとうございました。<br />
        もし私にご興味を持たれた方がいらっしゃいましたら、フォームからメッセージいただけると嬉しいです。<br />
        後日、メールにてご連絡いたします。
      </p>
      <div :class="['mb-6', ...(mdAndUp ? ['d-flex', 'justify-center', 'align-center'] : [])]">
        <div :class="[...(mdAndUp ? ['mr-2'] : ['mb-2'])]">
          <span
            :class="[
              'font-weight-bold',
              'max-w-290px',
              'text-white',
              'px-3',
              'bg-secondary',
              'rounded-xl',
              'd-inline-block',
              ...(mdAndUp ? ['h-36px'] : ['h-60px'])
            ]"
          >
            <v-icon
              icon="mdi-email"
              color="white"
              size="36"
              :class="mdAndUp ? ['mr-2'] : ['d-block', 'mx-auto']"
            />
            bbb.worksquash@gmail.com
          </span>
        </div>
        <a
          v-for="(item, index) in props.snsItems"
          :key="index"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          class="mx-2"
        >
          <v-btn icon variant="text" class="bg-secondary">
            <v-img :src="item.icon" width="36" height="36" />
          </v-btn>
        </a>
      </div>
      <v-row>
        <v-col md="12" lg="8" class="box-shadow pa-10 mx-auto rounded-lg">
          <v-form @submit.prevent="submit" ref="form">
            <div class="text-left mb-2">
              <h2 class="text-primary mb-5">お問い合わせフォーム</h2>
              <v-alert
                v-if="formAlertState.isShow"
                :type="formAlertState.type"
                variant="outlined"
                density="compact"
                :closable="formAlertState.closeable"
                class="mb-3"
              >
                {{ formAlertState.text }}
              </v-alert>
              <v-text-field
                v-model="formState.name"
                placeholder="お名前"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
              <v-text-field
                v-model="formState.email"
                placeholder="メールアドレス"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
              <v-textarea
                v-model="formState.content"
                placeholder="お問い合わせ内容"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
            </div>
            <template v-if="isShowSubmitBtn">
              <v-btn class="mx-2" elevation="0" color="primary" :loading="isLoading" type="submit"
                >送信</v-btn
              >
              <v-btn
                class="mx-2"
                elevation="0"
                variant="outlined"
                color="primary"
                @click="cancel"
                :disabled="isLoading"
                >キャンセル</v-btn
              >
            </template>
            <template v-else>
              <v-btn class="px-4" elevation="0" color="primary" @click="confirm">確認</v-btn>
            </template>
          </v-form>
        </v-col>
      </v-row>
    </template></page-content-layout
  >
</template>

<style scoped>
.border-secondary {
  border-color: rgb(var(--v-theme-secondary)) !important;
}
</style>
