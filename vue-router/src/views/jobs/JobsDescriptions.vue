<template>
<h1>Job details Page</h1>
<!-- to check the route param we use $route + param + route param name, in this case id-->
<p>The job id is {{ $route.params.id }}</p>
<!-- we can also make it dynamic specifiying it on data-->
<p>The job id is {{ id }}</p>
<!-- example in case we fetch the data
<div v-if="job"> here we will wait for the system to fecth the data
    <p>The job details are {{ job.details }}</p>
</div>
-->
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            id: this.$route.params.id
            // job: null here we would insert the job info
        }
    }
    /*
    if jobs data were to be fecthed (check jobsViews)
    mounted() {
        fetch(website link + this.id) we passed the id from JobsViews
        .then((res) => {res.json}) we get the arguments inside json
        .then((data) => {this.jobs = data}) we equal data received to data we have
        .catch(err => console.log(err.message)) log the error message if any
    }
    */
}
</script>
  
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>