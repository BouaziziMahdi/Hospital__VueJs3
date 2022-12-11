<template>
  <h1 class="heading"><span>book</span> now</h1>
  <div class="d-flex justify-content-center">
    <div class="col-xl-10 col-lg-9 mb-2">
      <div class="row shadow-lg rounded p-5">
        <div class="col-lg-6 d-none d-lg-block">
          <img src="../assets/images/book/book-img.svg" alt="" />
        </div>
        <div class="col-lg-6">
          <form @submit.prevent="validateForm()">
            <h3 class="mb-5">book appointment</h3>
            <div class="errors-list" v-if="formErrors != ''">
              <div class="error" v-for="error in formErrors" :key="error.id">
                <div class="alert alert-danger">
                  {{ error }}
                </div>
              </div>
            </div>
            <div>
              <label for="username">username:</label>
              <input
                type="text"
                name="username"
                class="form-control mb-2"
                v-model="username"
              />
            </div>
            <div>
              <label for="email">email:</label>
              <input
                type="text"
                name="email"
                class="form-control mb-2"
                v-model="email"
              />
            </div>
            <div>
              <label for="yournumber">yournumber:</label>
              <input
                type="text"
                name="yournumber"
                class="form-control mb-2"
                v-model="yournumber"
              />
            </div>
            <div>
              <label for="date">date:</label>
              <input
                type="date"
                name="date"
                class="form-control mb-2"
                v-model="date"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Book Now"
                class="btn btn-outline-success"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "book",
  data() {
    return {
      formErrors: [],
      username: null,
      email: null,
      yournumber: null,
      date: null,
      maxChars: 15,
      review: [],
    };
  },
  methods: { 
   
    validateForm() {
      let myForm = {
        username: this.username,
        email: this.email,
        yournumber: this.yournumber,
        date:this.date,
      }
        
      this.formErrors = []; 

      if (!this.username) {
        this.formErrors.push("Username Cant Be Empty");
      }

      if (!this.email) {
        this.formErrors.push("email Cant Be Empty");
      }

      if (!this.yournumber) {
        this.formErrors.push("yournumber Cant Be Empty");
      }
      if (!this.date) {
        this.formErrors.push("date Cant Be Empty");
      }

      if (this.username && this.username.length > this.maxChars) {
        this.formErrors.push(
          `Username Cant Be More Than ${this.maxChars} Characters`
        )
        if (myForm!=this.formErrors) { 
          console.log("hhhh")
        }
        }
       
        }
      
      
    },
   
  }

</script>
<style scoped></style>
