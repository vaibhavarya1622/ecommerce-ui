<template>
    <div class="container">
        <!-- Link to Home-->
    <div class="row">
        <div class="col-12 text-center pt-3">
            <router-link :to="{name:'Home'}">
                <img id="logo" src = "../assets/logo.png" />
            </router-link>
        </div>
        <!-- Sign Up form-->
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signup-div" class="flex-item border">
                    <h2 class="pt-4 pl-4">Create Account</h2>
                    <form @submit = "signup" class="pt-4 pl-4 pr-4">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="email" required>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <div class="form-group">
                                <label>First Name</label>
                                <input type="name" class="form-control" v-model="firstName" required>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input type="name" class="form-control" v-model="lastName" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" required>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" v-model = "passwordConfirm" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary my-2 py-2">Create Account</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import swal from 'sweetalert';
    export default{
        name:'SignUp',
        props:["baseURL"],
        data(){
            return {
                email:null,
                firstName:null,
                lastName:null,
                password:null,
                passwordConfirm:null
            }
        },
        methods:{
            async signup(e){
                e.preventDefault();
                //if the password matches
                if(this.password === this.passwordConfirm){
                    //make the post body
                    const user={
                        email:this.email,
                        firstName:this.firstName,
                        lastName:this.lastName,
                        password:this.password
                    }
                    //call the API
                    await axios.post(this.baseURL+"user/signup",user)
                    .then(()=>{
                        //redirect to home page
                        swal({
                            text:"User signup successfully, Please login",
                            icon:"success",
                            closeOnClickOutside:false,
                        }).then(()=>{this.$router.replace("/");});
                    })
                    .catch((err)=>{
                        console.log(err);
                        console.log(this.baseURL+"user/signup");
                    })
                }
                else{
                    swal({
                        text:"Error! Passwords are not matching",
                        icon:"error",
                        closeOnClickOutside:false
                    });
                }
            }
        }
    }
</script>
<style scoped>

    .btn-dark {
        background-color: #e7e9ec;
        color: #000;
        font-size: smaller;
        border-radius: 0;
        border-color: #adb1b8 #a2a6ac #a2a6ac;
    }
    
    .btn-primary {
        background-color: #f0c14b;
        color: black;
        border-color: #a88734 #9c7e31 #846a29;
        border-radius: 0;
    }
    
    #logo {
        width: 150px;
    }
    </style>
    