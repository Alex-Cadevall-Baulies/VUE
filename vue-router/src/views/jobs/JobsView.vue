<template>
    <div class="jobs">
        <h1>This is an jobs page</h1>
        <div v-for="job in jobs" :key="job.id">
        <!-- To  link the jobs witht he jobsdescription page using hyperling we use route-link-->
        <!-- We specify the route name we used on index.js and send the wanted param, in this case job.id-->
            <router-link :to="{name : 'jobsDescriptions', params: {id: job.id}}">
                <h2> {{ job.title }} </h2>
            </router-link>
        </div>

        <!-- example in case we fetch the data
            <div v-if="job"> here we will wait for the system to fecth the data
            <router-link :to="{name : 'jobsDescriptions', params: {id: job.id}}">
                <h2> {{ job.title }} </h2>
            </router-link>
            </div>
        -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'job1', id: 1, description: 'this is job 1' },
                { title: 'job2', id: 2, description: 'this is job 2' },
                { title: 'job3', id: 3, description: 'this is job 3' },
            ]
        }
    }

    /*if we were to fetch the data instead
    mounted() {
        fetch(website link)
        .then((res) => {res.json}) we get the arguments inside json
        .then((data) => {this.jobs = data}) we equal data received to data we have
        .catch(err => console.log(err.message)) log the error message if any
        we would also input this on the jobsDescriptions as it will be using it
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