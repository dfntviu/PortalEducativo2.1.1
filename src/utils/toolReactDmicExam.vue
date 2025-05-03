<template>
	<div>
		  <h2>Selecciona un día a la semana</h2>
			<select v-model="selectDay">
				<option value="">Lunes</option>
				<option value="">Martes</option>
				<option value="">Miércoles</option>
				<option value="">Jueves</option>
				<option value="">Viernes</option>
			</select>
			<!-- Muestra el Sport del dia -->
		<div v-if="sportDay" style="margin-top: 20px;">
			<h3>Hoy Practicarás:
			 <span v-if="sportDay ===='voleyball'">Volley-Ball|🏐</span>
			 <span v-if="sportDay ===='swimming'">Natación|🏊</span>
			 <span v-if="sportDay ===='football'">Soccer |🏃‍♂️</span>
		    </h3>
		</div>

		<!-- Dynamic segun el deporte q corresponde -->
		<div v-if="sportDay==='voleyball'">
			 <label >Selecciona una modalidad de Volley-Ball</label>
			   <select v-model="selVolleyBall">
			   	  <select v-for="option in optVolleyBalls" :value="option.value">
			   	  	  <option disabled value="">---- Selecciona una Practica ----</option>
			   	  	  <option v-for="option in optVolleyBalls"></option>
			   	  	  {{option.text}}
			   	  </select>
			   </select>
		</div>

		<div v-if="sportDay==='swimming'">
			 <label >Selecciona una modalidad de Volley-Ball</label>
			   <select v-model="selFootBall">
			   	  <select v-for="option in optFootBall" :value="option.value">
			   	  	<option disabled value="">---- Selecciona una Practica ----</option>
			   	  	<option v-for="optionp in optFootBall"></option>
			   	  	  {{option.text}}
			   	  </select>
			   </select>
		</div>

		<div v-if="sportDay==='football'">
			 <label >Selecciona una modalidad de Volley-Ball</label>
			   <select v-model="selSwimming">
			   	  <select v-for="option in optSwimming" :value="option.value">
			   	  	<option disabled value="">---- Selecciona una Practica ----</option>
			   	  	 <option v-for="option in  optSwimming"></option>
			   	  	  {{option.text}}
			   	  </select>
			   </select>
		</div>

		<!-- Resultado de la Activida -> Deporte -->
		<div v-if="selectExerciseText">
			<strong>Ejercicio Seleccionado</strong> {{selectExerciseText}}
		</div>
			<!-- No es comun, se practica deporte -->
		<div v-else-if="selectDay" style="margin-top: 20px;">
			<p>No hay Practica. Disfruta el descanso</p>
		</div>
	</div>
</template>

<script setup>
	 import {ref, computed} from 'vue'

	 const selectDay = ref('')

	 const selVolleyBall = ref('')

	 const optVolleyBalls = ref([
	 		{text:'Simulacro de Bloqueo', value: 'bloqueo'},
	 		{text:'Tec de Espalda', value: 'servir'},
	 		{text:'Entrenam. Clavar ', value: 'clavar'}
	 	])

	 const optFootBall = ref([
	 		{text:'Dribbling Drill', value: 'dribble'},
	 		{text:'Shooting Practice', value: 'shoot'},
	 		{text:'Passing Drill.  ', value: 'pass'}
	 	])

	  // Mostrar el resultado de la actividad segun la eleccion
	 const optSwimming = ref([
	 		{text:'Nado Estilo Libre', value: 'libre'},
	 		{text:'Nado Espalda', value: 'espalda'},
	 		{text:'Breaststroke Training ', value: 'breaststroke'}
	 	])

	  // Detectar el deporte del dia
	   const sportDay =computed(()=>{
	   		if(selectDay.value === 'lunes') return 'volleyball'
	   		if(selectDay.value === 'martes') return 'football'

	   		if(selectDay.value === 'miercoles' ||  selectDay.value === 'viernes' ) return 'swimming'
	   })

	const selectExerciseText = computed(()=>{
		if(sportDay.value === 'voleyball'){
			const selected =  optVolleyBalls.value.find(opt => opt.value === selVolleyBall.value)
			  return selected ? selected.text : '';
		}
	})

	const selectExerciseText = computed(()=>{
		if(sportDay.value === 'swimming'){
			const selected =  optFootBall.value.find(opt => opt.value === selVolleyBall.value)
			  return selected ? selected.text : '';
		}
	})

	const selectExerciseText = computed(()=>{
		if(sportDay.value === 'swimming'){
			const selected =  optSwimming.value.find(opt => opt.value === selVolleyBall.value)
			  return selected ? selected.text : '';
		}
		return ''
	})
</script>