export default {
    data() {
        return {
            tareas: [],
            /* actividades: [],
            actividad:'', */
            tarea:null,
            hora:null
        };
    },
    methods: {
        

        crearObjArray() {
            var datos = {
                tarea: this.tarea,
                hora: this.hora,
            };
            /* this.actividades.push(this.actividad) */
            this.tareas.push(datos);
            /* console.log(this.actividades) */
        },
        deleteFirstElem() {
            console.log(this.tareas);
            this.tareas.splice(0, 1);
            console.log(this.tareas);
        },
        deleteLastElem() {
            this.tareas.splice(-1, 1);
            console.log(this.tareas);
        },
        deleteAnyElem(id) {
            console.log(id);
            this.tareas.splice(id, 1);
        },
        comprobar(){
            console.log(this.tarea);
            if(this.tarea==null || this.tareas == undefined){
                this.deleteFirstElem();
            }
        },
    }

};
