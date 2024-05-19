<script setup lang="ts">
import urlConstant from "@/constants/urlConstant";
import initRuleMaker from "@/utils/ruleMaker";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const valid = ref(false);
const form = ref(null);

const username = ref("");
const usernameRuleMaker = initRuleMaker("Username");
const usernameRules = [usernameRuleMaker.require, usernameRuleMaker.requireMinLength8];

const email = ref("");
const emailRuleMaker = initRuleMaker("Email");
const emailRules = [emailRuleMaker.require, emailRuleMaker.emailFormat];

const validate = () => {
  // @ts-ignore
  form.value.validate();

  const obj: ResendMailConfirmTokenModel = {
    username: username.value,
    email: email.value
  };

  console.log(obj);
};
</script>

<template>
  <v-card class="mx-auto" max-width="344" title="Resend registration confirm">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-text-field
          v-model="username"
          color="primary"
          label="Username"
          variant="underlined"
          :rules="usernameRules"
        ></v-text-field>
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
          :rules="emailRules"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="validate" variant="elevated" color="info">
          Resend
          <v-icon icon="mdi-email-sync-outline" end></v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="() => router.push(urlConstant.SIGN_UP)" color="info">
          <v-icon icon="mdi-chevron-left" start></v-icon>
          Sign Up
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
