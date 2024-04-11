<script setup lang="ts">
import type { SnsItem } from '@/type'
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { useDisplay } from 'vuetify'
import { ref, type Ref } from 'vue'
const { mdAndUp } = useDisplay()

type Props = {
  snsItems: SnsItem[]
}

const props: Props = defineProps<Props>()
const form = ref()
const name: Ref<string> = ref('')
const email: Ref<string> = ref('')
const inquiry: Ref<string> = ref('')

const isShowSubmitBtn: Ref<boolean> = ref(false)
const isLoading: Ref<boolean> = ref(false)
const ruleIsNotBlank = (value: any) => !!value || 'この項目は入力必須項目です'

const confirm = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  isShowSubmitBtn.value = true
}

const submit = async () => {
  isLoading.value = true
  form.value.reset()
  form.value.resetValidation()
  isLoading.value = false
  isShowSubmitBtn.value = false
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
              <span v-if="isShowSubmitBtn"
                >以下の内容で受け付けします。内容をご確認の上、「送信」をクリックしてください。</span
              >
              <v-text-field
                v-model="name"
                placeholder="お名前"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
              <v-text-field
                v-model="email"
                placeholder="メールアドレス"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
              <v-textarea
                v-model="inquiry"
                placeholder="お問い合わせ内容"
                variant="outlined"
                color="primary"
                :disabled="isShowSubmitBtn"
                :rules="[ruleIsNotBlank]"
              />
            </div>
            <template v-if="isShowSubmitBtn">
              <v-btn class="mx-2" elevation="0" color="primary" type="submit">送信</v-btn>
              <v-btn
                class="mx-2"
                elevation="0"
                variant="outlined"
                color="primary"
                @click="() => (isShowSubmitBtn = false)"
                :disabled="isLoading"
                >キャンセル</v-btn
              >
            </template>
            <template v-else>
              <v-btn
                class="px-4"
                elevation="0"
                color="primary"
                :loading="isLoading"
                @click="confirm"
                >確認</v-btn
              >
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
