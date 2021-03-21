<template>
  <form
    id="signup--form"
    @submit.prevent="checkSignupForm"
    action="/feed"
    novalidate="true"
  >
    <div
      id="div--signup__email"
      :class="{ 'Il y a une erreur': $v.user.email.$error }"
    >
      <label for="email"></label>

      <input
        class="$v.email"
        type="email"
        v-model="$v.user.email.$model"
        placeholder="exemple@groupomania.com"
      />
      <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
        <span v-if="!$v.user.email.required">Email requis</span>
        <span v-if="!$v.user.email.email">Email invalide</span>
      </div>
    </div>
    <div
      id="div--signup__password"
      :class="{ 'Il y a une erreur': $v.user.password.$error }"
    >
      <label for="password"></label>
      <input
        class="$v.password"
        type="password"
        v-model="$v.user.password.$model"
        placeholder="Password"
      />
      <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
        <span v-if="!$v.user.password.required">Mot de passe requis</span>
        <span v-if="!$v.user.password.minLength"
          >Le mot de passe dit contenir au moin 8 caractères</span
        >
      </div>
    </div>
    <div id="options">
      <div id="login">
        <a href="/Login">Vous possédez un compte ?</a>
      </div>
    </div>

    <ButtonSignup></ButtonSignup>
  </form>
</template>

<script>
import ButtonSignup from "./buttons/ButtonSignup.vue";
import required from "vuelidate/lib/validators/required";
import email from "vuelidate/lib/validators/email";
import minLength from "vuelidate/lib/validators/minLength";

export default {
  name: "SignupComponent",
  components: {
    ButtonSignup,
  },
  data() {
    return {
      url: "groupomania.com",
      user: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },

  validations: {
    user: {
      email: { required, email },
      password: {
        required,

        minLength: minLength(8),

        containsUppercase: (value) => {
          return !/[A-Z]/.test(value);
        },
        containsLowercase: (value) => {
          return !/[a-z]/.test(value);
        },
        containsNumber: (value) => {
          return !/[0-9]/.test(value);
        },
        containsSpecial: (value) => {
          return !/[#?!@$%^&*-]/.test(value);
        },
      },
    },
  },
  methods: {
    checkSignupForm() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  padding: 10px 10px;
  margin: 10px 0;
}
label {
  font-size: 14px;
  margin: 0 10px;
}
a {
  font-size: 14px;
  color: #a8a8a8;
}
#login {
  margin: 10px 0;
}
span {
  font-size: 12px;
}
</style>
