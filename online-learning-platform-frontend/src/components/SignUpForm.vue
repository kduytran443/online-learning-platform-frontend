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

const password = ref("");
const passwordRuleMaker = initRuleMaker("Password");
const passwordRules = [passwordRuleMaker.require, passwordRuleMaker.requireMinLength6];

const birthDate = ref("");
const birthDateRuleMaker = initRuleMaker("Birth Date");
const birthDateRules = [birthDateRuleMaker.require];

const phoneNumber = ref("");
const phoneNumberRuleMaker = initRuleMaker("Phone number");
const phoneNumberRules = [phoneNumberRuleMaker.require, phoneNumberRuleMaker.phoneNumberFormat];

const userType = ref("");
const userTyperRuleMaker = initRuleMaker("User type");
const userTyperRules = [userTyperRuleMaker.require];

const validate = () => {
  // @ts-ignore
  form.value.validate();

  const obj: SignUpModel = {
    username: username.value,
    email: email.value,
    password: password.value,
    birthDate: birthDate.value,
    phoneNumber: phoneNumber.value,
    userType: userType.value
  };

  console.log(obj);
};
</script>

<template>
  <v-card class="mx-auto" max-width="344" title="Sign Up">
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
        <v-text-field
          v-model="password"
          type="password"
          persistent-hint
          color="primary"
          label="Password"
          variant="underlined"
          :rules="passwordRules"
        ></v-text-field>
        <v-text-field
          v-model="birthDate"
          color="primary"
          label="Birth Date"
          variant="underlined"
          type="date"
          :rules="birthDateRules"
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          color="primary"
          label="Phone Number"
          variant="underlined"
          :rules="phoneNumberRules"
        ></v-text-field>
        <v-card class="tw-py-4 tw-mt-4"
          ><v-radio-group inline label="User Type" :rules="userTyperRules" v-model="userType">
            <v-radio label="Teacher" value="Teacher"></v-radio>
            <v-radio label="Student" value="Student"></v-radio> </v-radio-group
        ></v-card>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn @click="validate" variant="elevated" color="info">
          Complete Registration

          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-card-actions class="mt-4">
        <v-spacer></v-spacer>

        <v-btn @click="() => router.push(urlConstant.LOGIN_URL)" color="info">
          <v-icon icon="mdi-lock" start></v-icon>
          Login
        </v-btn>
        <v-btn @click="() => router.push(urlConstant.RESEND_REGISTRATION_CONFIRM)" color="info">
          <v-icon icon="mdi-email-sync-outline" start></v-icon>
          Resend Mail Confirm
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
