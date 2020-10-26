<template>

    <div id="main-form">

      <h1>Order Form</h1>
      
        <v-form v-model="valid">

          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>

          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <div class="button-area">
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>

            <v-btn @click="clear">
              clear
            </v-btn>
          </div>

        </v-form>

    </div>    

 

</template>

<style scoped>
  #main-form > h1{
    margin-top: 20px;
    text-align: center;
  }

  .button-area {
    margin-top: 30px;
    text-align: center;
  }

  #main-form {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

@media (min-width: 420px){
  #main-form {
    width: 60%;
  }

}

</style>