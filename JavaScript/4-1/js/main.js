var app = new Vue({
    el: '#app',
    data: {
        keyword: '',
        list: [],
        addText: '',
        keyword: '',
    },

    watch: {
        list: {
            handler: function() {
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },

    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText,
                    isChecked: false,
                });
            }

            this.addText = '';
        },

        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        },
    },

    computed: {
        countTask: function() {
            let count = 0;
            for(let i = 0; i < this.list.length; i++) {
                if(!this.list[i].isChecked) {
                    count++;
                }
            }
            return count;
        },

        Search: function() {
            let lists = [];

            for(let j = 0; j < this.list.length; j++) {
                let searchlist = this.list[j];

                if(searchlist.text.indexOf(this.keyword) !== -1) {
                    lists.push(searchlist);
                }
            }

            return lists;
        }
    }
});