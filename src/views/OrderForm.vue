<template>

    <div id="main-form">

      <h1>Order Form</h1>
      
        <v-form id="orderform" ref="form" v-model="valid" @submit.prevent="submit">

          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="20"
            label="Last name"
            required
          ></v-text-field>

          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="First name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-card class="interests" flat>
            <v-card-text>Please select your interests:</v-card-text>
            <div class="checkbox-grp d-flex justify-space-around">
              <v-checkbox
                v-model="interest"
                value="beer"
                label="Beer"
              ></v-checkbox>

              <v-checkbox
                v-model="interest"
                value="cider"
                label="Cider"
              ></v-checkbox>

              <v-checkbox
                v-model="interest"
                value="wine"
                label="Wine"
              ></v-checkbox>
            </div>

          </v-card>

          <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Delivery date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="modal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>

          <v-radio-group
              class="delivery-method"
              v-model="method"
              column
              label="Postage Method:"
            >
            <v-radio
              label="Delivery"
              value="delivery"
            ></v-radio>
            <v-radio
              label="Pickup"
              value="pickup"
            ></v-radio>

          </v-radio-group>

          <div class="button-area">
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="!valid"
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

<script>
export default {
  data: () => ({
    valid: false,
    interest: [],
    method: '',
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 10' 
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    date: '',
    modal: false,

  }),
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    submit() {
      console.log(` ${this.firstname} ${this.lastname} ${this.email}` )
    }
  }

}
</script>

<style scoped>
  #main-form > h1{
    margin-top: 20px;
    text-align: center;
  }

  .button-area {
    margin: 30px auto;
    text-align: center;
  }

  #main-form {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  [role="radiogroup"] > .v-radio:first-of-type {
    margin-top:20px;
  }

  .interests .v-card__text {
    font-size: 16px;
  }

  .interests .v-input--selection-controls {
    margin-top: 0px;
  }

@media (min-width: 420px){
  #main-form {
    width: 60%;
  }

}

</style>