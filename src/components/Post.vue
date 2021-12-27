<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                    <v-card-title>
                        <div>
                            <span>{{title}}</span><br>
                            <div>{{body}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="orange">Ver</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>


    </div>
</template>

<script>

export default ({
    name: 'Post',
    props: {
        userId: Number,
        id: Number,
        title: String,
        body: String,
        status: Boolean,
        amount: Number
    } 
    
})
</script>
