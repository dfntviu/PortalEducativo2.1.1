<template>
	<div>
		<NavegacionAlumno/>
		
		<router-view/>
	</div>
</template>
<script>
	 import NavegacionAlumno from '@/components/NavegacionAlumno.vue';

	 export default{
	 	components: {NavegacionAlumno}
	 };
</script>

<style >
	
</style>