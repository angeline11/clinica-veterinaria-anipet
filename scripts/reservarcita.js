const db=firebase.firestore();
const taskForm=document.getElementById('task-form');
const taskContainer=document.getElementById('tasks-container');
const saveTask=(nombres,email,CI,nombre_mascota,especie,raza,razon,mensaje)=>
    db.collection('Veterinaria').doc().set({        
        nombres,
        email,
        CI,
        nombre_mascota,
        especie,
        raza,
        razon,
        mensaje
    })
const getTask=()=>db.collection('Veterinaria').get();

window.addEventListener('DOMContentLoaded',async(e)=>{
    const querySnapshot=await getTask();
    querySnapshot.forEach(doc =>{
        console.log(doc.data())
        const task=doc.data();
        taskContainer.innerHTML +=`<div class="card card-boty mt-2 border-primary">
            <h3 class="h5">${task.nombres}</h3>
            <p>Cédula de Identidad: ${task.CI}</p>
            <p>Especie: ${task.especie}</p>
            <p>Raza: ${task.raza}</p>
            <p>Razòn de la cita: ${task.razon}</p>
            <p>Mensaje adicional: ${task.mensaje}</p>
            <p>Estado Turno:Pendiente</P>
            <p>Fecha:</p>
            <p>Hora:</p>
        </div>`
    })
})  
taskForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const nombres=taskForm['task-nombre'].value;
    const  email=taskForm['task-email'] .value;
    const CI=taskForm['task-CI'].value;
    const  nombre_mascota=taskForm['task-nm'] .value;
    const especie=taskForm['task-especie'].value;
    const  raza=taskForm['task-raza'] .value;
    const razon=taskForm['task-razon'].value;
    const  mensaje=taskForm['task-nota'] .value;
    await saveTask(nombres,email,CI,nombre_mascota,especie,raza,razon,mensaje);
    taskForm.reset();
    alert('Su solicitud fue enviada con exito');

})
