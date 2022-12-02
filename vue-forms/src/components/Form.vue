<template>
    <!-- by adding an event.prevent to form we avoid form refreshing page when clicking submit button -->
    <form @submit.prevent="handleSubmit">
        <div>
            <label>Email</label>
            <!-- v-modal links input info to data info changing it as user types -->
            <input type="email" required v-model="email">
        </div>
        <div>
            <label>Password</label>
            <input type="password" required v-model="password">
        </div>
        <div v-if="passwordCheck" class="error">{{passwordCheck}}</div>

        <div>
            <label>Select Role</label>
            <select v-model="role">
                <option value="developer"></option>
                <option value="designer"></option>
                <option value="devOps"></option>
            </select>
        </div>

        <div class="terms">
            <!-- if checked terms = true -->
            <input type="checkbox" v-model="terms" required>
            <label>accept t&m</label>
        </div>

        <!-- when user clicks a comma (,) we will insert the option into an array -->
        <div>
            <label>Skills</label>
            <input type="text" v-model="tempSkills" @keyup="addSkill">
            <!-- we check array to delete skill -->
            <div v-for="skill in skills" :key="skill">
                <span @click="deleteSkill(skill)"> {{ skill }}</span>
            </div>
            
        </div>

        <!-- if checked introduces the name to the names array in data -->
        <div>
            <input type="checkbox" value="Alex" v-model="names">
            <label>Alex</label>
        </div>
        <div>
            <input type="checkbox" value="Miranda" v-model="names">
            <label>Miranda</label>
        </div>
        <div>
            <input type="checkbox" value="Lorelei" v-model="names">
            <label>Lorelei</label>
        </div>

        <div class="submit"> 
            <button>create account</button> 
        </div>
    </form>

    <p>email : {{ email }}</p>
    <p>password : {{ password }}</p>
    <p>role : {{ role }}</p>
    <p>terms : {{ terms }}</p>
    <p>skills {{ skills }}</p>
    <p>names: {{ names }}</p>
</template>
  
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            names: [],
            tempSkills: '',
            skills: [],
            passwordCheck: ''
        }
    },

    methods: {
        addSkill(event) {
            // if key pressed is , and tempSkill not empty push tempSkill to array and set it to '' again
            if (event.key === ',' && this.tempSkills) {
                //we delete the , from this.tempSkills
                const withoutCommas = this.tempSkills.replaceAll(',', '');
                //check if not repeated in array
                if (!this.skills.includes(withoutCommas)) {
                    this.skills.push(withoutCommas)
                    this.tempSkills = ''
                }
            }
        },

        deleteSkill (skill) {
            //we are filtering the item, if item is not equal to skill it stays, if it is it removes it
            this.skills = this.skills.filter(item => {
                return skill !==item
            })
        },

        handleSubmit() {
            //we use this function to send the data to database
            //we will also use it to check password
            //we ask if pass lenght is superior to 5 char, if it isn't we send error
            this.passwordCheck = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'
        }
    }
}
</script>
  
<style>

</style>